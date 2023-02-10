import { Button, Table } from "../atoms";
import { Download } from "../Icons";
import { SectionHeader } from "../molecules";
import { CardDetails, Contact } from "../organisms";

const Settings = () => {
  return (
    <div>
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
          <p className="text-gray-700 font-medium text-sm"> Download all</p>
        </Button>
      </div>
      <div className="mb-10 mt-5 ">
        <Table />
      </div>
    </div>
  );
};

export default Settings;
