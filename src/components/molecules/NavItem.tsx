import { SidebarData } from "@/types/index";
import { Button } from "../atoms";

export const NavItem = ({ label, icon, count }: Omit<SidebarData, "id">) => {
  return (
    <div className="flex justify-between items-center w-full my-5">
      <Button className="flex w-full gap-4 items-center" variant="ghost">
        <div>{icon}</div>
        <p className="flex gap-3 text-gray-700 font-normal text-base">
          {label}
        </p>
      </Button>
      {count && (
        <div className="rounded-lg bg-[#F2F4F7] text-gray-700 py-1 px-2 font-medium text-sm">
          {count}
        </div>
      )}
    </div>
  );
};
