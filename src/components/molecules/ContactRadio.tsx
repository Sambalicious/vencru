import { ReactNode } from "react";
import { Radio } from "../atoms";

interface ContactRadioProps {
  children: ReactNode;
  label: string;
  checked: boolean;
  onClick: () => void;
}
export const ContactRadio = ({
  children,
  label,
  onClick,
  checked,
}: ContactRadioProps) => {
  return (
    <div className="my-3">
      <Radio label={label} checked={checked} onClick={onClick} />
      <div className="pl-5">{children} </div>
    </div>
  );
};
