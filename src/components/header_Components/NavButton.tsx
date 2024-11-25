import styled from "styled-components";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { colorStyle, fontSize } from "../../GlobalStyled";
import { useEffect, useRef, useState } from "react";

const Container = styled.div`
margin-bottom: 10px;
  a {
    text-decoration: none;
  }

  .menu_button {
    &.active {
      background-color: ${colorStyle.mainWhite} !important; 
      color: ${colorStyle.mainPurple} !important;
    }
    width: 180px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${fontSize.navButton};
    color: ${colorStyle.mainWhite};
    border-radius: 90px;
    font-weight: 700;
  }
`;

interface PropsType {
  menu: string;
  className: string;
}

const NavButton = ({ menu, className }: PropsType): JSX.Element => {
  const location = useLocation();
  const buttonRef = useRef<HTMLDivElement>(null);
  const [nowLocation, setNowLocation] = useState<string>(location.pathname);

  useEffect(() => {
    setNowLocation(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    if (buttonRef.current?.classList.contains(`${nowLocation}`.slice(1))) {
      buttonRef.current.querySelector(".menu_button")?.classList.add("active");
    } else if (!buttonRef.current?.classList.contains(`${nowLocation}`.slice(1)) && buttonRef?.current?.querySelector(".menu_button")?.classList.contains("active")) {
      buttonRef.current.querySelector(".menu_button")?.classList.remove("active");
    }
  }, [nowLocation]);

  return (
    <Container className={className} ref={buttonRef}>
      <Link to={className}>
        <motion.div
          className="menu_button"
          transition={{ type: "spring", stiffness: 200 }}
          whileHover={{
            backgroundColor: `${colorStyle.mainWhite}`,
            color: `${colorStyle.mainPurple}`,
            scale: 1.1,
          }}
          whileTap={{
            backgroundColor: `${colorStyle.mainWhite}`,
            color: `${colorStyle.mainPurple}`,
            scale: 1,
          }}
        >
          {menu}
        </motion.div>
      </Link>
    </Container>
  );
};

export default NavButton;
