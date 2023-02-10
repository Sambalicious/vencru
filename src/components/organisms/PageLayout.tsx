import { PageHeader } from "@/components/molecules";
import { tabList } from "@/utils/dummy";
import { Tab } from "@headlessui/react";
import Settings from "../page/Settings";

interface PageLayoutProps {
  pageTitle: string;
  pageSubTitle: string;
}

export const PageLayout = ({ pageTitle, pageSubTitle }: PageLayoutProps) => {
  return (
    <div>
      <div className="my-3 px-4">
        <PageHeader title={pageTitle} subTitle={pageSubTitle} />
      </div>
      <div>
        <Tab.Group defaultIndex={5}>
          <Tab.List className={"overflow-x-auto flex md:px-4"}>
            {tabList?.map(tab => (
              <Tab
                className={({ selected }) =>
                  `${
                    selected
                      ? "text-gray-800 bg-gray-50 outline-none"
                      : "bg-white"
                  } first:rounded-[8px_0px_0px_8px] last:rounded-[0px_8px_8px_0px] border-[8px_0px_0px_8px] text-gray-700 font-normal text-sm px-6 py-2 whitespace-nowrap border border-solid border-gray-300`
                }
                key={tab.id}
              >
                {tab.label}{" "}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className={"mt-8"}>
            <Tab.Panel className="px-4">My details</Tab.Panel>
            <Tab.Panel className="px-4">Profile</Tab.Panel>
            <Tab.Panel className="px-4">Password</Tab.Panel>
            <Tab.Panel className="px-4">Teams</Tab.Panel>
            <Tab.Panel className="px-4">Plan</Tab.Panel>
            <Tab.Panel>
              <div className="px-4">
                <Settings />
              </div>
            </Tab.Panel>
            <Tab.Panel className="px-4">Notification</Tab.Panel>
            <Tab.Panel className="px-4">Integration</Tab.Panel>
            <Tab.Panel className="px-4">API</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};
