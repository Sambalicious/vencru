import { paymentCards } from "@/utils/dummy";
import { ContainerHeader, PaymentCard } from "../molecules";

export const CardDetails = () => {
  return (
    <div className="border-y border-solid border-gray-200 py-5">
      <div className="mb-5">
        <ContainerHeader
          title="Card details"
          subTitle="Select default payment method"
        />
      </div>

      {paymentCards?.map(item => (
        <PaymentCard
          key={item.id}
          cardType={item.type}
          expiry={item.expiryDate}
          makeDefault={() => {}}
          edit={() => {}}
          cardNumberSuffix={item.cardNumber}
          icon={item.icon}
        />
      ))}
    </div>
  );
};
