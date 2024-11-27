import styled from "styled-components";
import { colorStyle } from "../GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faList,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import MiniFunction from "./MiniFunction";
import { CloseContext } from "../context/CloseContext";

const Container = styled.div`
  position: fixed;
  z-index: 800;
  bottom: 30px;
  right: 30px;
  .calculate {
    position: absolute;
    z-index: 801;
    /* bottom: 55px; */
    left: 5px;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: ${colorStyle.mainRed};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: ${colorStyle.mainWhite};
    }
  }
  .todo {
    position: absolute;
    z-index: 801;
    /* bottom: 100px; */
    left: 5px;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: ${colorStyle.mainGreen};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: ${colorStyle.mainWhite};
    }
  }
  .calendar {
    position: absolute;
    z-index: 801;
    /* bottom: 145px; */
    left: 5px;
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: ${colorStyle.mainYellow};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: ${colorStyle.mainWhite};
    }
  }
  .plus_button {
    position: relative;
    z-index: 801;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: ${colorStyle.mainPurple};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    .plusIcon {
      color: ${colorStyle.mainWhite};
      font-size: 25px;
    }
  }
`;

const PlusButton = (): JSX.Element => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [isCal, setIsCal] = useState<boolean>(false);
  const [isToDo, setIsToDo] = useState<boolean>(false);
  const [isCalendar, setIsCalendar] = useState<boolean>(false);
  const {isClose, setIsClose} = useContext(CloseContext)!;

  const clickHandler = ():void => {
    if (isClick === false) {
      setIsClick(true);
    } else {
      setIsClick(false);
    }
  };

  const calHandler = ():void => {
    if (isCal === false && isToDo === false && isCalendar === false && isClose === true) {
      setIsCal(true);
      setIsClose(false);
    } else if (isCal === false && (isToDo || isCalendar === true)) {
      setIsCal(true);
      setIsToDo(false);
      setIsCalendar(false);
    }
    setIsClick(false);
  };

  const todoHandler = ():void => {
    if (isCal === false && isToDo === false && isCalendar === false && isClose === true) {
      setIsToDo(true);
      setIsClose(false);
    } else if (isToDo === false && (isCal || isCalendar === true)) {
      setIsToDo(true);
      setIsCal(false);
      setIsCalendar(false);
    }
    setIsClick(false);
  };

  const calendarHandler = ():void => {
    if (isCal === false && isToDo === false && isCalendar === false && isClose) {
      setIsToDo(true);
      setIsClose(false);
    } else if (isCalendar === false && (isCal || isToDo === true)) {
      setIsCalendar(true);
      setIsCal(false);
      setIsToDo(false);
    }
    setIsClick(false);
  };

  useEffect(()=>{
    if(isClose === true) {
      setIsCal(false);
      setIsCalendar(false);
      setIsToDo(false)
    }
  }, [isClose]);



  return (
    <Container>
      <motion.div
        className="calculate"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: isClick ? -45 : 0, opacity: isClick ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        onClick={calHandler}
      >
        <FontAwesomeIcon icon={faCalculator} />
      </motion.div>
      <motion.div
        className="todo"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: isClick ? -90 : 0, opacity: isClick ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        onClick={todoHandler}
      >
        <FontAwesomeIcon icon={faList} />
      </motion.div>
      <motion.div
        className="calendar"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: isClick ? -135 : 0, opacity: isClick ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        onClick={calendarHandler}
      >
        <FontAwesomeIcon icon={faCalendar} />
      </motion.div>
      <motion.div
        className="plus_button"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        onClick={clickHandler}
      >
        <FontAwesomeIcon icon={faPlus} className="plusIcon" />
      </motion.div>
      <MiniFunction isCalculate={isCal} isTodo={isToDo} isCalendar={isCalendar}/>
    </Container>
  );
};

export default PlusButton;
