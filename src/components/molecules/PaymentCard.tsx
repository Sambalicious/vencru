import { Radio } from "../atoms";
import { Visa } from "../Icons";

export const PaymentCard = () => {
  return (
    <div className="flex justify-between items-center rounded-lg bg-primary-50">
      <div className="flex gap-2">
        <Visa />
        <div>
          <p>Visa ending in 1234</p>
          <p>Expiry 06/24</p>
          <div className="flex gap-1">
            <p>Se</p>
            <p></p>
          </div>
        </div>
      </div>
      <Radio />
    </div>
  );
};
