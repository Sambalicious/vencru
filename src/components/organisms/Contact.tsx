import { useState } from "react";
import { Input } from "../atoms";
import { Message } from "../Icons";
import { ContactRadio, ContainerHeader } from "../molecules";

export const Contact = () => {
  const [selectedContact, setSelectedContact] = useState("email");
  return (
    <div className="border-y border-solid border-gray-200 py-5  md:flex justify-between ">
      <ContainerHeader
        title={"Contact email"}
        subTitle="Where should invoices be sent?"
      />

      <div className="md:w-8/12">
        <ContactRadio
          onChange={() => setSelectedContact("email")}
          checked={selectedContact === "email"}
          label="Send to my account email"
        >
          <p className="text-gray-500 font-normal text-sm">test@test.com</p>
        </ContactRadio>

        <ContactRadio
          onChange={() => setSelectedContact("other account")}
          checked={selectedContact === "other account"}
          label="Send to alternative account"
        >
          {selectedContact === "other account" && (
            <div className="md:w-1/2 w-full relative">
              <div className="absolute top-5 left-4">
                <Message fill="none" fontSize={"20px"} stroke="#667085" />
              </div>
              <Input value={"test@test.com"} />
            </div>
          )}
        </ContactRadio>
      </div>
    </div>
  );
};
