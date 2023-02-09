import { paymentCards } from "@/utils/dummy";
import { useState } from "react";
import { Button } from "../atoms";
import { ContainerHeader, PaymentCard } from "../molecules";

export const CardDetails = () => {
  const [defaultPaymentMethod, setDefaultPaymentMethod] =
    useState("master card");
  return (
    <div className="border-y border-solid border-gray-200 py-5 md:flex justify-between ">
      <div className="mb-5  ">
        <ContainerHeader
          title="Card details"
          subTitle="Select default payment method"
        />
      </div>

      <div className="md:w-8/12">
        {paymentCards?.map(item => (
          <PaymentCard
            key={item.id}
            cardType={item.type}
            expiry={item.expiryDate}
            checked={item.type?.toLowerCase() === defaultPaymentMethod}
            makeDefault={() =>
              setDefaultPaymentMethod(item.type?.toLowerCase())
            }
            edit={() => {}}
            cardNumberSuffix={item.cardNumber}
            icon={item.icon}
          />
        ))}

        <Button className="text-gray-500 font-medium text-sm" variant="ghost">
          {" "}
          <span className="font-medium text-lg mr-2">+</span>
          Add New Payment method
        </Button>
      </div>
    </div>
  );
};
