import Image from "next/image";

export const Logout = () => {
  return (
    <div className="flex justify-between py-3 border-t border-solid border-gray-200">
      <Image src={"/icons/girl.png"} alt="user" width={40} height={40} />
      <div>
        <p>Olivia Rhye</p>
        <p>olivia@untitledui.com</p>
      </div>
    </div>
  );
};
