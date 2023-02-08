import Image from "next/image";

export const Avatar = () => {
  return (
    <div className="-space-x-4">
      <Image
        className="relative z-30 inline object-cover  border-2 border-white rounded-full"
        src="/icons/avatar.png"
        alt="Profile image"
        width={24}
        height={24}
      />
      <Image
        className="relative z-20 inline object-cover w-12 h-12 border-2 border-white rounded-full"
        src="/icons/avatar.png"
        alt="Profile image"
        width={24}
        height={24}
      />
      <Image
        className="relative z-10 inline object-cover w-12 h-12 border-2 border-white rounded-full"
        src="/icons/avatar.png"
        alt="Profile image"
        width={24}
        height={24}
      />
    </div>
  );
};
