import { Check } from "../Icons";

interface BadgeProps {
  text: string;
}

export const Badge = ({ text }: BadgeProps) => {
  return (
    <div className="bg-green-100 px-4 py-1 w-max flex items-center gap-1  rounded-2xl  ">
      <Check fontSize={"12px "} fill="none" stroke="#027A48" />
      <p className="text-success-700 font-normal text-xs">{text}</p>{" "}
    </div>
  );
};
