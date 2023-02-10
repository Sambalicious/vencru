import Image from "next/image";
import { Button } from "../atoms";
import { Logout as LogoutIcon } from "../Icons";
export const Logout = () => {
  return (
    <div className="flex justify-between my-3 py-4 border-t border-solid border-gray-200">
      <div className="flex gap-2">
        <Image
          src={"/icons/user.png"}
          className="rounded-full"
          alt="user"
          width={40}
          height={40}
        />
        <div>
          <p className="text-gray-900 font-medium text-sm">Olivia Rhye</p>
          <p className="text-gray-500 font-normal text-sm">
            olivia@untitledui.com
          </p>
        </div>
      </div>
      <Button>
        <LogoutIcon fontSize="24px" fill="none" stroke="#667085" />
      </Button>
    </div>
  );
};
