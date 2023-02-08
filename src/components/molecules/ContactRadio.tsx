import { ReactNode } from "react";
import { Radio } from "../atoms";

interface ContactRadioProps {
  children: ReactNode;
  label: string;
}
export const ContactRadio = ({ children, label }: ContactRadioProps) => {
  return (
    <div className="my-3">
      <Radio label={label} checked={false} onClick={() => {}} />
      <div className="pl-5">{children} </div>
    </div>
  );
};
