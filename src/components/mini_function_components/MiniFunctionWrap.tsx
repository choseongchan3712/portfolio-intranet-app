import styled from "styled-components";
import ChildrenType from "../../type";
import { colorStyle, fontSize } from "../../GlobalStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CloseContext } from "../../context/CloseContext";

const Container = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 500px;
  min-height: calc(100vh - 140px);
  padding: 60px 20px 20px 20px;
  background-color: ${colorStyle.mainWhite};
  border-radius: 20px;
  overflow: hidden;
`;

const Header = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 100%;
  height: 40px;
  background-color: ${colorStyle.mainPurple};
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${colorStyle.mainWhite};
  font-size: ${fontSize.basicTitle};
  .close_button {
    cursor: pointer;
  }
`;

const MiniFunctionWrap = ({ children }: ChildrenType): JSX.Element => {
  const {isClose, setIsClose} = useContext(CloseContext)!;
  const closeHandler = () => {
    if (isClose === false) {
      setIsClose(true);
    } else if (isClose === true) {
      setIsClose(false);
    }
  };

  return (
    <Container>
      <Header>
        <div className="name">이름</div>
        <FontAwesomeIcon
          icon={faXmark}
          className="close_button"
          onClick={closeHandler}
        />
      </Header>
      {children}
    </Container>
  );
};

export default MiniFunctionWrap;
