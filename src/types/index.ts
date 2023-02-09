import { ReactElement, ReactNode } from "react";

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
  status: string;
  id: number;
}

export interface SidebarData {
  id: number;
  icon: ReactNode;
  label: string;
  count?: number;
}
