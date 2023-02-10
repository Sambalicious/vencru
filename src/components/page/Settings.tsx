import { PageHeader, SectionHeader } from "@/components/molecules";
import { tabList } from "@/utils/dummy";
import { Tab } from "@headlessui/react";
import { Button, Table } from "../atoms";
import { Download } from "../Icons";
import { CardDetails, Contact } from "../organisms";
const Settings = () => {
  return (
    <div>
      <div className="my-3 px-4">
        <PageHeader
          title={"Settings"}
          subTitle={"Manage your team and preferences here"}
        />
      </div>
      <div className="rounded-md ">
        <Tab.Group defaultIndex={5}>
          <Tab.List className={"overflow-x-auto flex md:px-4"}>
            {tabList?.map(tab => (
              <Tab
                className={({ selected }) =>
                  `${
                    selected ? "text-gray-800 bg-gray-50 outline-none" : ""
                  } first:rounded-[8px_0px_0px_8px] last:rounded-[0px_8px_8px_0px] border-[8px_0px_0px_8px] text-gray-700 font-normal text-sm px-6 py-2 whitespace-nowrap border border-solid border-gray-300 bg-red`
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
                <div className="my-4">
                  <SectionHeader
                    title="Payment Method"
                    subTitle="Update your billing details and address."
                  />
                </div>

                <Contact />

                <CardDetails />

                <div className="md:flex justify-between items-center my-3">
                  <SectionHeader title="Billing History" />
                  <Button
                    className="py-2 px-4 mt-3 flex items-center gap-2"
                    variant="primary"
                  >
                    <Download fontSize={"18px"} fill="none" stroke="#344054" />
                    <p className="text-gray-700 font-medium text-sm">
                      {" "}
                      Download all
                    </p>
                  </Button>
                </div>
                <div className="mb-10 mt-5 ">
                  <Table />
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>Notification</Tab.Panel>
            <Tab.Panel>Integration</Tab.Panel>
            <Tab.Panel>API</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Settings;
