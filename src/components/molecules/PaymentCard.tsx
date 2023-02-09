import { ReactElement } from "react";
import { Button, Radio } from "../atoms";
interface PaymentCardProps {
  cardType: "Master card" | "Visa";
  expiry: string;
  makeDefault: () => void;
  edit: () => void;
  cardNumberSuffix: number;
  icon: ReactElement;
  checked: boolean;
}
export const PaymentCard = ({
  cardType,
  expiry,
  makeDefault,
  edit,
  cardNumberSuffix,
  icon,
  checked,
}: PaymentCardProps) => {
  return (
    <div
      className={`flex justify-between py-2 px-3 my-3 items-start  rounded-lg bg-white ${
        checked ? "border border-solid border-primary-300 bg-primary-50" : ""
      }`}
    >
      <div className="flex gap-2">
        <div>{icon}</div>
        <div>
          <p
            className={`font-normal text-sm text-gray-700 ${
              checked ? " text-primary-600" : ""
            }`}
          >
            {`${cardType} ending in ${cardNumberSuffix}`}
          </p>
          <p
            className={`text-gray-500 font-normal text-sm ${
              checked ? " text-primary-600" : ""
            }`}
          >
            Expiry {`${expiry}`}{" "}
          </p>
          <div className="flex mt-3 mb-2 gap-2">
            <Button
              onClick={makeDefault}
              className={`text-gray-500 ${checked ? "text-primary-600" : ""}`}
              variant="ghost"
            >
              Set as default
            </Button>
            <Button
              onClick={edit}
              className="text-primary-700 font-medium text-sm"
              variant="ghost"
            >
              Edit
            </Button>
          </div>
        </div>
      </div>
      <Radio checked={checked} onClick={makeDefault} />
    </div>
  );
};
