import { PageHeader, SectionHeader } from "@/components/molecules";
import { tabList } from "@/utils/dummy";
import { Tab } from "@headlessui/react";
import { Button, Table } from "../atoms";
import { Avatar } from "../atoms/Avatar";
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
      <Tab.Group>
        <Tab.List className={"overflow-x-auto flex"}>
          {tabList?.map(tab => (
            <Tab
              className={({ selected }) =>
                `${
                  selected ? "text-gray-800 bg-gray-50 outline-none" : ""
                } border-[8px_0px_0px_8px] text-gray-700 font-normal text-sm px-6 py-2 whitespace-nowrap border border-solid border-gray-300 bg-white`
              }
              // className=" "
              key={tab.id}
            >
              {tab.label}{" "}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className={"mt-8"}>
          <Tab.Panel>Content 1</Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          <Tab.Panel>Content 3</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>

      <div className="px-4">
        <div className="my-4">
          <SectionHeader
            title="Payment Method"
            subTitle="Update your billing details and address."
          />
        </div>

        <Contact />

        <CardDetails />

        <Avatar />
        <div className="md:flex justify-between items-center my-3">
          <SectionHeader title="Billing History" />
          <Button className="py-2 px-4 mt-3" variant="primary">
            Download all
          </Button>
        </div>
        <div className="mb-10 mt-5 md:px-4">
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Settings;
