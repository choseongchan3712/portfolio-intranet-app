import styled from "styled-components";
import { colorStyle } from "../../GlobalStyled";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: absolute;
  right: 150px;
  padding: 0 35px;
  border-left: 2px solid ${colorStyle.mainGray};
  border-right: 2px solid ${colorStyle.mainGray};
  display: flex;
  align-items: center;
  justify-content: center;
  .side_menu {
    position: relative;
    width: 40px;
    height: 40px;
    background-color: ${colorStyle.mainGray};
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: ${colorStyle.mainPurple};
    font-size: 20px;
    &::after {
      content: "";
      width: 8px;
      height: 8px;
      border-radius: 5px;
      position: absolute;
      top: -1px;
      right: -1px;
      background-color: ${colorStyle.mainPurple};
    }
  }
  .alarm {
    margin-right: 25px;
  }
`;

const SideMenu = (): JSX.Element => {
  const [isAlarmActive, setIsAlarmActive] = useState<boolean>(false);
  const [isEmailActive, setIsEmailActive] = useState<boolean>(false);
  return (
    <Container>
      <Link to={"#"}>
        <motion.div
          className="alarm side_menu"
          animate={{ rotateZ: isAlarmActive ? "0deg" : "20deg" }}
          transition={{
            type: "spring",
            stiffness: 400,
            repeat: isAlarmActive ? 0 : Infinity,
            repeatType: "loop",
            repeatDelay: 0.25,
          }}
          whileHover={{ scale: isAlarmActive ? 1.2 : 1 }}
          onHoverStart={() => setIsAlarmActive(true)}
          onHoverEnd={() => setIsAlarmActive(false)}
          whileTap={{ scale: 0.9 }}
        >
          <FontAwesomeIcon icon={faBell} />
        </motion.div>
      </Link>
      <Link to={"#"}>
        <motion.div
          className="email side_menu"
          animate={{ rotateZ: isEmailActive ? "0deg" : "20deg" }}
          transition={{
            type: "spring",
            stiffness: 400,
            repeat: isEmailActive ? 0 : Infinity,
            repeatType: "loop",
            repeatDelay: 0.25,
          }}
          whileHover={{ scale: isEmailActive ? 1.2 : 1 }}
          onHoverStart={() => setIsEmailActive(true)}
          onHoverEnd={() => setIsEmailActive(false)}
          whileTap={{ scale: 0.9 }}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </motion.div>
      </Link>
    </Container>
  );
};

export default SideMenu;
