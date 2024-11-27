import { useState } from "react";
import ChildrenType from "../type";
import { CloseContext } from "./CloseContext";

const CloseProvider = ({ children }: ChildrenType) => {
  const [isClose, setIsClose] = useState<boolean>(true);
  return (
    <CloseContext.Provider value={{ isClose, setIsClose }}>
      {children}
    </CloseContext.Provider>
  );
};

export default CloseProvider;
