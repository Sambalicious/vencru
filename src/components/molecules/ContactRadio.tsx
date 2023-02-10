import { ReactNode } from "react";
import { Radio } from "../atoms";

interface ContactRadioProps {
  children: ReactNode;
  label: string;
  checked: boolean;
  onChange: () => void;
}
export const ContactRadio = ({
  children,
  label,
  onChange,
  checked,
}: ContactRadioProps) => {
  return (
    <div className="my-3">
      <Radio label={label} checked={checked} onChange={onChange} />
      <div className="pl-5">{children} </div>
    </div>
  );
};
