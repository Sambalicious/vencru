import { Visa } from "@/components/Icons";
import {
  IData,
  PaymentCardProps,
  TableBodyProps,
  TabListProps,
} from "../types";

export const tabList: TabListProps[] = [
  { id: 1, label: "My details" },
  { id: 2, label: "Profile" },
  { id: 3, label: "Password" },
  { id: 4, label: "Team" },
  { id: 5, label: "Plan" },
  { id: 6, label: "Billing" },
  { id: 7, label: "Notification" },
  { id: 8, label: "Integrations" },
  { id: 9, label: "API" },
];

export const paymentCards: PaymentCardProps[] = [
  {
    id: 1,
    cardNumber: 1290,
    type: "Master card",
    expiryDate: "02/35",
    icon: <Visa fontSize={"50px"} fill="none" />,
  },
  {
    id: 2,
    cardNumber: 1234,
    type: "Visa",
    expiryDate: "01/25",
    icon: <Visa fontSize={"50px"} fill="none" />,
  },
];

export const tableHeadData: IData[] = [
  { id: 1, name: "Invoice" },
  { id: 2, name: "Amount" },
  { id: 3, name: "Date" },
  { id: 4, name: "Status" },
  { id: 5, name: "Users on plan" },
];

export const tableBodyData: TableBodyProps[] = [
  {
    id: 1,
    invoice: "Basic Plan – Dec 2022",
    amount: 10.0,
    date: "Dec 1, 2022",
    status: "Paid",
  },
  {
    id: 2,
    invoice: "Basic Plan – Dec 2022",
    amount: 10.0,
    date: "Dec 1, 2022",
    status: "Paid",
  },
  {
    id: 3,
    invoice: "Basic Plan – Dec 2022",
    amount: 10.0,
    date: "Dec 1, 2022",
    status: "Paid",
  },
];
