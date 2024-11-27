import styled from "styled-components";
import { MiniFunctionType } from "../type";
import Calculator from "./mini_function_components/Calculrator";
import Todo from "./mini_function_components/Todo";
import Calendar from "./mini_function_components/Calender";
import { motion } from "framer-motion";
import { useContext } from "react";
import { CloseContext } from "../context/CloseContext";

const Container = styled.div`
  position: absolute;
  z-index: 700;
  bottom: 0;
  right: 0;
  width: 500px;
  min-height: calc(100vh - 140px);
  .motion_box {
    width: 100%;
    height: 100%;
  }
`;

const MiniFunction = ({
  isCalculate,
  isTodo,
  isCalendar,
}: MiniFunctionType): JSX.Element => {
  const { isClose } = useContext(CloseContext)!;

  console.log(isClose);
  console.log(isCalculate);
  console.log(isCalendar);
  console.log(isTodo);

  return (
    <Container>
      <motion.div
        animate={{ x: isClose ? 500 : 0, opacity: isClose ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="motion_box"
      >
        {isClose ? null : isCalculate ? <Calculator /> : null}
        {isClose ? null : isTodo ? <Todo /> : null}
        {isClose ? null : isCalendar ? <Calendar /> : null}
      </motion.div>
    </Container>
  );
};

export default MiniFunction;
