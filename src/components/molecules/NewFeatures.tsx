import Image from "next/image";
import { Button } from "../atoms";
export const NewFeatures = () => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 my-3">
      <h6 className="font-medium text-sm text-gray-900">
        New features available!
      </h6>
      <p className="text-gray-500 font-normal text-xs py-2">
        Check out the new dashboard view. Pages now load faster.{" "}
      </p>

      <Image
        src="/icons/girl.png"
        width={215}
        height={136}
        alt="new features"
        className="bg-primary-100 rounded-md py-2 w-full"
      />

      <div className="flex pt-2 gap-4">
        <Button variant="ghost">Dismiss</Button>
        <Button className="text-primary-700">Whats new?</Button>
      </div>
    </div>
  );
};
