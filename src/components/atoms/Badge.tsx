import { FC, SVGProps } from "react";
import { Check } from "../Icons";

interface BadgeProps {
  text: BadgeStatus;
}

export type BadgeStatus = "Paid" | "Cancelled";

export const Badge = ({ text }: BadgeProps) => {
  const badgeIcon: Record<BadgeStatus, FC<SVGProps<SVGSVGElement>>> = {
    Paid: Check,
    Cancelled: Check,
  };
  const Icon = badgeIcon[text];
  return (
    <div className="flex items-center gap-1 px-4 py-1 bg-green-100 w-max rounded-2xl ">
      <div>
        <Icon fontSize={"12px "} fill="none" stroke="#027A48" />{" "}
      </div>
      <p className="text-xs font-normal text-success-700">{text}</p>{" "}
    </div>
  );
};
