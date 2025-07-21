import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Camera } from 'lucide-react';

export const MyPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  // TODO: Replace with actual user data
  const [userData, setUserData] = useState({
    name: 'OOO',
    birthDate: '1997.03.20',
    physique: '180cm/88kg',
    mainPosition: '미드필더',
    subPosition: '수비수',
    mainFoot: '오른발',
    backNumber: '01',
    isPro: '없음',
    activeRegion: '서울특별시 강남구',
    bio: '내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. 내용입니다. ',
  });

  const handleInputChange = useCallback((field: string, value: string) => {
    setUserData(prev => ({ ...prev, [field]: value }));
  }, []);

  const handleLogout = useCallback(() => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      // TODO: Implement actual logout logic
      console.log("Logout");
    }
  }, []);

  return (
    <div className="bg-gray-100">
      <div
        className="h-56 bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1560272564-c83b66b17484?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
        }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="container mx-auto px-4 h-full flex items-end pb-8">
          <h1 className="text-5xl font-bold text-white">마이페이지</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <Tabs defaultValue="my-info">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="my-info">내 정보</TabsTrigger>
              <TabsTrigger value="my-team">마이팀</TabsTrigger>
              <TabsTrigger value="calendar">캘린더</TabsTrigger>
            </TabsList>

            <TabsContent value="my-info">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1 flex flex-col items-center">
                  <div className="relative mb-4">
                    <Avatar className="w-32 h-32 border-4 border-white">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute bottom-0 right-0 rounded-full bg-white">
                      <Camera className="h-5 w-5" />
                    </Button>
                  </div>
                  <h2 className="text-2xl font-bold">{userData.name}</h2>
                  <p className="text-gray-500">{userData.birthDate}</p>
                  <p className="text-gray-700 mt-1">{userData.physique}</p>
                  <div className="mt-4 w-full space-y-2">
                    <Button className="w-full" onClick={() => setIsEditing(!isEditing)}>
                      {isEditing ? '저장하기' : '내 정보 수정하기'}
                    </Button>
                    <Button variant="outline" className="w-full" onClick={handleLogout}>
                      로그아웃
                    </Button>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="grid grid-cols-2 gap-6 mb-6">
                    <div className="space-y-1">
                      <Label>주포지션</Label>
                      <Input value={userData.mainPosition} disabled={!isEditing} onChange={e => handleInputChange('mainPosition', e.target.value)} />
                    </div>
                    <div className="space-y-1">
                      <Label>부포지션</Label>
                      <Input value={userData.subPosition} disabled={!isEditing} onChange={e => handleInputChange('subPosition', e.target.value)} />
                    </div>
                    <div className="space-y-1">
                      <Label>주발</Label>
                      <Input value={userData.mainFoot} disabled={!isEditing} onChange={e => handleInputChange('mainFoot', e.target.value)} />
                    </div>
                    <div className="space-y-1">
                      <Label>등번호</Label>
                      <Input value={userData.backNumber} disabled={!isEditing} onChange={e => handleInputChange('backNumber', e.target.value)} />
                    </div>
                    <div className="space-y-1">
                      <Label>선출 여부</Label>
                      <Input value={userData.isPro} disabled={!isEditing} onChange={e => handleInputChange('isPro', e.target.value)} />
                    </div>
                    <div className="space-y-1">
                      <Label>활동지역</Label>
                      <Input value={userData.activeRegion} disabled={!isEditing} onChange={e => handleInputChange('activeRegion', e.target.value)} />
                    </div>
                  </div>
                  <div>
                    <Label>주요 특징/장점</Label>
                    <Input value={userData.bio} disabled={!isEditing} onChange={e => handleInputChange('bio', e.target.value)} />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="my-team">
              <p>마이팀 컨텐츠</p>
            </TabsContent>
            <TabsContent value="calendar">
              <p>캘린더 컨텐츠</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
