import { Input } from "../atoms";
import { ContactRadio, ContainerHeader } from "../molecules";

export const Contact = () => {
  return (
    <div className="border-y border-solid border-gray-200 py-5">
      <ContainerHeader
        title={"Contact email"}
        subTitle="Where should invoices be sent?"
      />

      <div>
        <ContactRadio label="Send to my account email">
          <p className="text-gray-500 font-normal text-sm">test@test.com</p>
        </ContactRadio>

        <ContactRadio label="Send to alternative account">
          <div className="md:w-1/2 w-full">
            <Input value={"test@test.com"} />
          </div>
        </ContactRadio>
      </div>
    </div>
  );
};
