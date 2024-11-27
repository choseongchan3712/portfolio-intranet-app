import { ReactNode } from "react";

interface ChildrenType {
  children: ReactNode;
};

export default ChildrenType;

export interface MiniFunctionType {
  isCalculate: boolean;
  isTodo: boolean;
  isCalendar: boolean;
}