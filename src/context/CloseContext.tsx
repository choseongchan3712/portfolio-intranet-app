import { createContext } from "react";

interface CloseContextType {
  isClose: boolean;
  setIsClose: (value:boolean) => void;
}

export const CloseContext = createContext<CloseContextType | null>(null);