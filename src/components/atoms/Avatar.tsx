import Image from "next/image";

export const Avatar = () => {
  return (
    <div>
      <div className="flex -space-x-4">
        <Image
          className="inline-block w-10  h-10 rounded-full border-4 border-white-500 transition duration-300 hover:-translate-y-2"
          src="/icons/Avatar-2.svg"
          alt="profile"
          width={24}
          height={24}
        />
        <Image
          className="inline-block w-10 h-10  rounded-full border-4 border-white-500 transition duration-300 hover:-translate-y-2"
          src="/icons/Avatar.svg"
          alt="profile"
          width={24}
          height={24}
        />
        <Image
          className="inline-block w-10 h-10  rounded-full border-4 border-white-500 transition duration-300 hover:-translate-y-2"
          src="/icons/Avatar-1.svg"
          alt="profile"
          width={24}
          height={24}
        />
        <div className="w-10 h-10 rounded-full   border-4 font-normal text-xs bg-gray-50 text-gray-600 border-white transition duration-300 hover:-translate-y-2 flex items-center justify-center">
          +1
        </div>
      </div>
    </div>
  );
};
