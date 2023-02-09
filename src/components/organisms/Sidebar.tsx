import { forwardRef } from "react";

import { SidebarData } from "@/types/index";
import Image from "next/image";
import { Input } from "../atoms";
import { Chart, Home, Settings, Support, Users } from "../Icons";
import { Logout, NavItem, NewFeatures } from "../molecules";

interface SidebarProps {
  //showNavbar: boolean;
}

const sidebarItems: SidebarData[] = [
  {
    id: 1,
    label: "Home",
    icon: <Home fontSize={"20px"} fill="none" stroke="#667085" />,
  },
  {
    id: 2,
    label: "Dashboard",
    icon: <Chart fontSize={"20px"} fill="none" stroke="#667085" />,
    count: 10,
  },
  {
    id: 3,
    label: "Projects",
    icon: <Chart fontSize={"20px"} fill="none" stroke="#667085" />,
  },
  {
    id: 3,
    label: "Tasks",
    icon: <Chart fontSize={"20px"} fill="none" stroke="#667085" />,
  },
  {
    id: 3,
    label: "Settings",
    icon: <Settings fontSize={"20px"} fill="none" stroke="#EAECF0" />,
  },
  {
    id: 3,
    label: "Users",
    icon: <Users fontSize={"20px"} fill="none" stroke="#667085" />,
  },
  {
    id: 3,
    label: "Support",
    icon: <Support fontSize={"20px"} fill="none" stroke="#667085" />,
  },
];

const SideBar = forwardRef<HTMLDivElement, SidebarProps>((props, ref) => {
  return (
    <aside ref={ref} className="w-[274px] pb-10  bg-white shadow-sm md:px-4 ">
      <div className="flex  my-4 ">
        <Image src="/icons/untitled.png" alt="logo" width={143} height={32} />
      </div>
      <div>
        <Input type={"search"} placeholder="Search" />
      </div>

      {sidebarItems?.map(item => (
        <NavItem
          key={item.id}
          label={item.label}
          icon={item.icon}
          count={item.count}
        />
      ))}
      <NewFeatures />
      <Logout />
    </aside>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
