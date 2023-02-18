import { BadgeStatus } from "@/components/atoms";
import { FC, ReactElement, SVGProps } from "react";

export interface IData {
  name: string;
  id: number;
}
export interface TabListProps {
  id: number;
  label: string;
}

export interface PaymentCardProps {
  id: number;
  expiryDate: string;
  icon: ReactElement;
  cardNumber: number;
  type: "Master card" | "Visa";
}

export interface TableBodyProps {
  invoice: string;
  amount: number;
  date: string;
  status: BadgeStatus;
  id: number;
}

export interface SidebarData {
  id: number;
  icon: FC<SVGProps<SVGSVGElement>>;
  label: string;
  count?: number;
}
