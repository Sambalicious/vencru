import { SidebarData } from "@/types/index";
import { useNavContext } from "contexts/nav";
import { Button } from "../atoms";

export const NavItem = ({ label, icon, count }: Omit<SidebarData, "id">) => {
  const Icon = icon;
  const isPath = label?.toLowerCase() === "settings";
  const { nav, setNav } = useNavContext();
  return (
    <div
      className={`flex justify-between items-center w-full my-5 ${
        isPath ? "bg-gray-50 rounded-md py-2" : ""
      }`}
    >
      <Button
        onClick={() => setNav(!nav)}
        className="flex w-full gap-4 items-center"
        variant="ghost"
      >
        <div>
          <Icon fontSize={"20px"} fill="none" stroke="#667085" />{" "}
        </div>
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
