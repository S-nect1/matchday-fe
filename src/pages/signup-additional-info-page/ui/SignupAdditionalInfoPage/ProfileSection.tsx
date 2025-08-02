import avatarImage from '../../assets/avatar.png';

interface ProfileSectionProps {
  profileImage: string | null;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProfileSection = ({
  profileImage,
  onImageUpload,
}: ProfileSectionProps) => {
  const handleImageClick = () => {
    const fileInput = document.getElementById(
      'profile-image-input'
    ) as HTMLInputElement;
    fileInput?.click();
  };

  return (
    <div className="mx-auto mb-6 grid h-[100px] w-[100px] grid-cols-1 grid-rows-1">
      {/* 메인 프로필 이미지 */}
      <div
        className="col-start-1 row-start-1 flex h-[100px] w-[100px] cursor-pointer items-center justify-center"
        onClick={handleImageClick}
      >
        <img
          src={profileImage || avatarImage}
          alt="Profile"
          className="h-full w-full object-cover"
        />
      </div>

      {/* 숨겨진 파일 input */}
      <input
        id="profile-image-input"
        type="file"
        accept="image/*"
        onChange={onImageUpload}
        className="hidden"
      />
    </div>
  );
};
