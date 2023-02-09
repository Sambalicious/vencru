import { forwardRef } from "react";

import { useMediaQuery } from "@/hooks/mediaQuery";
import { SidebarData } from "@/types/index";
import { useNavContext } from "contexts/nav";
import Image from "next/image";
import { Button, Input } from "../atoms";
import {
  Chart,
  Flag,
  Home,
  Layers,
  Search,
  Settings,
  Support,
  Users,
} from "../Icons";
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
    icon: <Layers fontSize={"20px"} fill="none" stroke="#667085" />,
  },
  {
    id: 3,
    label: "Reporting",
    icon: <Flag fontSize={"20px"} fill="none" stroke="#667085" />,
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
  const isDesktop = useMediaQuery("(min-width:1060px)");
  const { nav, setNav } = useNavContext();

  return (
    <>
      <aside
        ref={ref}
        className=" md:w-[280px] md:pb-10   bg-white shadow-sm md:px-3 absolute p-4 h-max md:sticky top-0  "
      >
        <div className="flex justify-between mb-4 mt-8 ">
          {isDesktop && (
            <Image
              src="/icons/untitled.png"
              alt="logo"
              width={143}
              height={32}
            />
          )}
          {!isDesktop && (
            <Button
              onClick={() => setNav(!nav)}
              className="flex justify-end text-xl  w-full font-bold"
              variant="ghost"
            >
              &times;
            </Button>
          )}
        </div>
        <div className="relative">
          <div className="absolute top-5 left-4">
            <Search fill="none" fontSize={"20px"} stroke="#667085" />
          </div>
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
    </>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
