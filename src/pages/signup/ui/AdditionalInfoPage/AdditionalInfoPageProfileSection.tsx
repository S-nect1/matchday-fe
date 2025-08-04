import avatarImage from '../../assets/avatar.png';

interface AdditionalInfoPageProfileSectionProps {
  profileImage: string | null;
  onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AdditionalInfoPageProfileSection = ({
  profileImage,
  onImageUpload,
}: AdditionalInfoPageProfileSectionProps) => {
  const handleImageClick = () => {
    const fileInput = document.getElementById(
      'profile-image-input'
    ) as HTMLInputElement;
    fileInput?.click();
  };

  return (
    <div className="mb-6 flex justify-center">
      <div className="grid h-[100px] w-[100px] grid-cols-1 grid-rows-1">
        {/* 메인 프로필 이미지 */}
        <div
          className="col-start-1 row-start-1 flex h-[100px] w-[100px] cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-300 transition-opacity hover:opacity-80"
          style={{ backgroundColor: '#bdbdbd' }}
          onClick={handleImageClick}
        >
          <img
            src={profileImage || avatarImage}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>

        {/* 온라인 상태 표시 */}
        <div
          className="pointer-events-none col-start-1 row-start-1 h-[30px] w-[30px] self-start justify-self-end rounded-full border-2 border-white"
          style={{ backgroundColor: '#34a817' }}
        />

        {/* 숨겨진 파일 input */}
        <input
          id="profile-image-input"
          type="file"
          accept="image/*"
          onChange={onImageUpload}
          className="hidden"
        />
      </div>
    </div>
  );
};
