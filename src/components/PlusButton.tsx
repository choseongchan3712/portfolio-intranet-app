import styled from "styled-components";
import { colorStyle } from "../GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalculator,
  faList,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";

const Container = styled.div`
  position: absolute;
  z-index: 800;
  bottom: 30px;
  right: 30px;
  .calculate {
    position: absolute;
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

  const clickHandler = () => {
    if (isClick === false) {
      setIsClick(true);
    } else {
      setIsClick(false);
    }
  };

  return (
    <Container>
      <motion.div
        className="calculate"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: isClick ? -45 : 0, opacity: isClick ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <FontAwesomeIcon icon={faCalculator} />
      </motion.div>
      <motion.div
        className="todo"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: isClick ? -90 : 0, opacity: isClick ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        <FontAwesomeIcon icon={faList} />
      </motion.div>
      <motion.div
        className="calendar"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: isClick ? -135 : 0, opacity: isClick ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
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
    </Container>
  );
};

export default PlusButton;
