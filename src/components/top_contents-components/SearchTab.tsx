import styled from "styled-components";
import { colorStyle, fontSize } from "../../GlobalStyled";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Container = styled.form`
  position: absolute;
  width: 470px;
  height: 100%;
  top: 0;
  left: 330px;
  display: flex;
  align-items: center;
  input {
    all: unset;
    width: 100%;
    height: 40px;
    background-color: ${colorStyle.mainGray};
    border-radius: 40px;
    padding: 0 20px;
    font-size: ${fontSize.searchTab};
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0);
    transition: 0.3s ease-in-out;
  }
  .searchButton {
    all: unset;
    position: absolute;
    right: 5px;
    width: 30px;
    height: 30px;
    border-radius: 35px;
    background-color: ${colorStyle.mainPurple};
    display: flex;
    align-items: center;
    justify-content: center;
    transform-origin: center;
    cursor: pointer;
    .searchIcon {
      color: ${colorStyle.mainWhite};
    }
  }
`;

const focusHandler = (e: React.FocusEvent<HTMLInputElement>) => {
  e.currentTarget.style.border= `2px solid ${colorStyle.mainPurple}`;
};

const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
  e.currentTarget.style.border= `2px solid rgba(0, 0, 0, 0)`;
};

const SearchTab = (): JSX.Element => {
  return (
    <Container>
      <input type="text" placeholder="검색" onFocus={focusHandler} onBlur={blurHandler}/>
      <motion.button className="searchButton" whileHover={{scale:1.1, backgroundColor:"#4f3d8d"}} whileTap={{scale:0.9, backgroundColor:"#695e91"}} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
      <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
      </motion.button>
    </Container>
  );
};

export default SearchTab;
