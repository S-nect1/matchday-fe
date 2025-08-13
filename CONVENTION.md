# 프로젝트 개발 컨벤션

## 목차

1. [FSD 아키텍처 가이드](#1-fsd-아키텍처-가이드)
2. [컴포넌트 개발 가이드](#2-컴포넌트-개발-가이드)
3. [성능 최적화 가이드](#3-성능-최적화-가이드)
4. [상태 관리 가이드](#4-상태-관리-가이드)
5. [사이드 이펙트 관리](#5-사이드-이펙트-관리)
6. [라이브러리 활용 가이드](#6-라이브러리-활용-가이드)

---

## 1. FSD 아키텍처 가이드

### 1.1 기본 구조

```
src/
├── app/          # 애플리케이션 설정 및 진입점
├── pages/        # 페이지 컴포넌트
├── widgets/      # 독립적인 UI 블록
├── features/     # 비즈니스 기능
├── entities/     # 비즈니스 엔티티
├── shared/       # 공유 리소스
```

### 1.2 Slice와 Segment 구분

- **Features**: 사용자 인터랙션과 비즈니스 로직 (로그인, 검색, 필터링 등)
- **Widgets**: 독립적인 UI 블록 (헤더, 사이드바, 카드 등)

### 1.3 Import 경로 규칙

#### 규칙 요약

| 상황                           | 사용 경로 | 예시             |
| ------------------------------ | --------- | ---------------- |
| 동일 슬라이스                  | 상대경로  | `./api`, `../ui` |
| 다른 슬라이스 혹은 다른 레이어 | 절대경로  | `@/shared/ui`    |

#### 규칙 상세 설명

- **동일 슬라이스**: 같은 feature, widget, entity 폴더 내부에서의 import는 상대경로 사용
- **다른 슬라이스/레이어**: features → shared, widgets → entities 등 다른 폴더간 import는 절대경로(@) 사용
- **장점**: 코드 이동 시 상대경로는 자동으로 유지되고, 절대경로는 의존성을 명확히 표현

#### Import 순서

```typescript
// 1. 라이브러리 코드
import React from 'react';
import { useState } from 'react';

// 2. 다른 레이어/슬라이스 (절대경로)
import { AppLayout } from '@/app/layouts';
import { HomePage } from '@/pages/home';
import { SearchWidget } from '@/widgets/search';
import { User } from '@/entities/user';
import { Button } from '@/shared/ui';

// 3. 동일 슬라이스 (상대경로)
import { authApi } from './api';
import { AuthForm } from '../ui';
import { useAuthValidation } from './hooks';
```

### 1.4 파일 및 폴더 명명 규칙

#### 파일명

- **컴포넌트**: PascalCase (`UserCard.tsx`)
- **기타 파일**: kebab-case (`user-api.ts`, `auth-hooks.ts`)

#### 폴더명

- **컴포넌트**: PascalCase (`UserCard/`)
- **기타 폴더**: kebab-case (`user-api/`, `auth-hooks/`)

### 1.5 컴포넌트 구조화

#### 단일 파일 컴포넌트

```typescript
// SomeComponent.tsx
export const SomeComponent = () => {
  return <div>간단한 컴포넌트</div>;
};
```

#### 복합 컴포넌트 구조

컴포넌트가 복잡해지면 폴더로 분리:

```
SomeComponent/
├── index.tsx                    # 메인 컴포넌트 (export default)
├── SomeComponentHeader.tsx      # 헤더 섹션
├── SomeComponentContent.tsx     # 컨텐츠 섹션
└── SomeComponentFooter.tsx      # 푸터 섹션
```

```typescript
// SomeComponent/index.tsx
import { SomeComponentHeader } from "./SomeComponentHeader";
import { SomeComponentContent } from "./SomeComponentContent";
import { SomeComponentFooter } from "./SomeComponentFooter";

export const SomeComponent = () => {
  return (
    <div>
      <SomeComponentHeader />
      <SomeComponentContent />
      <SomeComponentFooter />
    </div>
  );
};

```

### 1.6 Public API (index.ts)

#### 슬라이스 루트의 index.ts

```typescript
// features/auth/index.ts
export { LoginForm } from './ui/LoginForm';
export { useAuth } from './hooks/use-auth';
export { authApi } from './api/auth-api';
```

#### Export 규칙

- **기본**: named export 사용
- **컴포넌트 폴더의 index.tsx**: export default 사용

---

## 2. 컴포넌트 개발 가이드

### 2.1 컴포넌트 작성 순서

React 컴포넌트 내부 코드는 다음 순서로 작성합니다:

```typescript
const MyComponent = ({ prop1, prop2 }: Props) => {
  // 1. 전역 상태 store들
  const userStore = useUserStore();
  const authStore = useAuthStore();

  // 2. 로컬 상태 (useState 등)
  const [localState, setLocalState] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 3. 데이터 fetching 및 상태 관리 hooks
  const { data: users, isLoading: usersLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  // 4. 컴포넌트 초기화 로직 (optional)
  useEffect(() => {
    // 마운트 시 실행될 초기화 로직
    initializeComponent();
  }, []);

  // 5. 계산된 값들 (useMemo)
  const filteredUsers = useMemo(() => {
    return users?.filter(user => user.name.includes(localState)) || [];
  }, [users, localState]);

  const displayConfig = useMemo(() => {
    return {
      showHeader: users && users.length > 0,
      title: `총 ${users?.length || 0}개의 사용자`,
    };
  }, [users]);

  // 6. 이벤트 핸들러 함수들 (useCallback)
  const handleInputChange = useCallback((value: string) => {
    setLocalState(value);
  }, []);

  const handleSubmit = useCallback(() => {
    // 제출 로직
    console.log('Submitted:', localState);
  }, [localState]);

  // 7. 사이드 이펙트 (useEffect)
  useEffect(() => {
    // 특정 상태 변경에 따른 사이드 이펙트
    if (localState) {
      trackUserInput(localState);
    }
  }, [localState]);

  // 8. 조건부 렌더링 (early return)
  if (usersLoading) {
    return <LoadingSpinner />;
  }

  // 9. 메인 렌더링 로직
  return (
    <div>
      <input value={localState} onChange={(e) => handleInputChange(e.target.value)} />
      <button onClick={handleSubmit}>제출</button>
      {filteredUsers.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};
```

#### 순서 규칙 상세 설명

1. **전역 상태 먼저**: 컴포넌트가 의존하는 외부 상태들을 명확히 보여줍니다
2. **로컬 상태**: 컴포넌트 내부에서만 사용되는 상태들
3. **데이터 fetching**: useQuery, useMutation 등 서버 상태 관리
4. **초기화 로직**: 컴포넌트 마운트 시 한 번 실행되는 로직
5. **계산된 값**: 상태에 의존하는 파생 데이터들
6. **이벤트 핸들러**: 사용자 인터랙션 처리 함수들
7. **사이드 이펙트**: 상태 변경에 따른 부수 효과들
8. **조건부 렌더링**: 로딩, 에러 상태 등의 early return
9. **메인 렌더링**: 실제 UI 렌더링 로직

### 2.2 관심사 분리 원칙

#### ❌ 잘못된 예시 (렌더링 + 데이터 페칭 혼재)

```typescript
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchUsers().then(data => {
      setUsers(data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? <Spinner /> : users.map(user => <UserCard key={user.id} user={user} />)}
    </div>
  );
};
```

#### ✅ 올바른 예시 (관심사 분리)

```typescript
// 렌더링 로직만 담당
const UserList = ({ users, loading }: UserListProps) => {
  return (
    <div>
      {loading ? <Spinner /> : users.map(user => <UserCard key={user.id} user={user} />)}
    </div>
  );
};

// 데이터 페칭은 상위 컴포넌트에서 처리
const UserListContainer = () => {
  const { users, loading } = useUsers();

  return <UserList users={users} loading={loading} />;
};
```

### 2.2 Props 기반 설계

컴포넌트는 최대한 props를 통해 동작하도록 설계합니다.

```typescript
// 책임이 명확한 컴포넌트
interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

const SearchBar = ({ value, onChange, placeholder, disabled }: SearchBarProps) => {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};
```

---

## 3. 성능 최적화 가이드

### 3.1 useCallback 사용

컴포넌트 내부에서 선언한 함수는 useCallback으로 감쌉니다.

```typescript
const MyComponent = ({ onSubmit }: Props) => {
  const [value, setValue] = useState('');

  // ✅ useCallback으로 함수 메모이제이션
  const handleSubmit = useCallback(() => {
    onSubmit(value);
  }, [value, onSubmit]);

  const handleChange = useCallback((newValue: string) => {
    setValue(newValue);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={(e) => handleChange(e.target.value)} />
    </form>
  );
};
```

### 3.2 useMemo 사용

계산된 값이나 상수는 useMemo로 메모이제이션합니다.

```typescript
const UserCard = ({ user, showDetails }: Props) => {
  // ✅ 계산된 값 메모이제이션
  const displayName = useMemo(() => {
    return `${user.firstName} ${user.lastName}`;
  }, [user.firstName, user.lastName]);

  const userActions = useMemo(() => {
    return showDetails ? ['edit', 'delete', 'view'] : ['view'];
  }, [showDetails]);

  return (
    <div>
      <h3>{displayName}</h3>
      {/* 렌더링 로직... */}
    </div>
  );
};
```

---

## 4. 상태 관리 가이드

### 4.1 객체 기반 상태 관리

관련된 상태들은 객체로 묶어 응집도를 높입니다.

#### ❌ 분산된 상태

```typescript
const [isSearchBarActive, setIsSearchBarActive] = useState(true);
const [searchBarValue, setSearchBarValue] = useState('');
const [searchBarPlaceholder, setSearchBarPlaceholder] = useState('');
```

#### ✅ 응집된 상태

```typescript
const [searchBarState, setSearchBarState] = useState({
  isActive: true,
  value: '',
  placeholder: '검색어를 입력하세요',
});
```

### 4.2 불필요한 상태 제거

계산 가능한 값은 상태가 아닌 useMemo를 사용합니다.

#### ❌ 불필요한 상태

```typescript
const [placeholder, setPlaceholder] = useState('');

useEffect(() => {
  if (searchBarState.isActive) {
    setPlaceholder('검색어를 입력하세요');
  } else {
    setPlaceholder('검색이 비활성화되었습니다');
  }
}, [searchBarState.isActive]);
```

#### ✅ 계산된 값

```typescript
const placeholder = useMemo(() => {
  return searchBarState.isActive
    ? '검색어를 입력하세요'
    : '검색이 비활성화되었습니다';
}, [searchBarState.isActive]);
```

---

## 5. 사이드 이펙트 관리

### 5.1 useEffect 최소화

useEffect보다는 이벤트 핸들러에서 직접 처리합니다.

#### ❌ useEffect 남용

```typescript
useEffect(() => {
  // 입력값이 변경될 때마다 실행되는 로직
  validateInput(searchBarState.value);
  trackUserInput(searchBarState.value);
}, [searchBarState.value]);
```

#### ✅ 이벤트 핸들러에서 처리

```typescript
const handleInputChange = useCallback((value: string) => {
  setSearchBarState(prev => ({ ...prev, value }));

  // 입력 변경 시 실행될 로직을 직접 호출
  validateInput(value);
  trackUserInput(value);
}, []);

return (
  <input
    value={searchBarState.value}
    onChange={(e) => handleInputChange(e.target.value)}
  />
);
```

---

## 6. 라이브러리 활용 가이드

### 6.1 권장 라이브러리

프로젝트에서 적극 활용할 라이브러리들:

- **lodash**: 데이터 조작 유틸리티
- **immer**: 불변성 관리
- **nuqs**: URL 파라미터 관리

### 6.2 Lodash 활용 예시

```typescript
import { pick, omit, compact } from 'lodash';

// 객체에서 특정 키만 선택
const userBasicInfo = pick(user, ['id', 'name', 'email']);

// 특정 키 제외
const userWithoutSensitiveData = omit(user, ['password', 'ssn']);

// 배열에서 falsy 값 제거
const validItems = compact([1, 0, 'hello', '', null, 'world']);
// 결과: [1, 'hello', 'world']
```

### 6.3 Immer 활용 예시

```typescript
import { produce } from 'immer';

const updateUserProfile = useCallback((updates: Partial<User>) => {
  setUser(
    produce(draft => {
      Object.assign(draft.profile, updates);
      draft.updatedAt = new Date();
    })
  );
}, []);
```

### 6.4 Nuqs 활용 예시

```typescript
import { parseAsString, useQueryState } from 'nuqs';

const SearchPage = () => {
  const [query, setQuery] = useQueryState('q', parseAsString.withDefault(''));
  const [category, setCategory] = useQueryState('category', parseAsString.withDefault('all'));

  return (
    <div>
      <SearchInput value={query} onChange={setQuery} />
      <CategoryFilter value={category} onChange={setCategory} />
    </div>
  );
};
```

---

## 마무리

이 컨벤션은 팀의 생산성과 코드 품질을 향상시키기 위한 가이드라인입니다. 새로운 요구사항이나 더 나은 방법을 발견하면 팀 논의를 통해 지속적으로 개선해 나가겠습니다.

### 참고 자료

- [FSD 공식 문서](https://feature-sliced.design/)
- [React 성능 최적화 가이드](https://react.dev/learn/render-and-commit)
- [TypeScript 베스트 프랙티스](https://typescript-eslint.io/docs/)

## 사용 라이브러리

eslint, prettier, vite, typescript, tailwindcss, shadcn, tanstack-query, zustand, react-router-dom
