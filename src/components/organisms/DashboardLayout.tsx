import { useMediaQuery } from "@/hooks/mediaQuery";
import { Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import SideBar from "./Sidebar";
export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const isDesktop = useMediaQuery("(min-width:1060px)");

  return (
    <div className="flex">
      <Transition
        as={Fragment}
        show={isDesktop}
        enter="transform transition duration-[400ms]"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transform duration-[400ms] transition ease-in-out"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <SideBar />
      </Transition>
      <main
        className={`w-full transition-all duration-[400ms] ${
          isDesktop ? "" : ""
        }`}
      >
        <div className="bg-gray-50 md:px-4 py-5 w-full">{children}</div>
      </main>
    </div>
  );
};
