import { Button } from "../atoms";
import { Chart } from "../Icons";

export const NavItem = () => {
  return (
    <div className="flex justify-between w-full">
      <Button className="flex w-full gap-4 items-center" variant="ghost">
        <Chart fill="none" stroke="#000" />
        <p className="flex gap-3 text-gray-700 font-normal text-base">
          Dashboard
        </p>
      </Button>
      <div className="rounded-lg bg-gray-100 text-gray-700 p-1 font-medium text-sm">
        10
      </div>
    </div>
  );
};
