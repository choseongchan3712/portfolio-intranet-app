import styled from "styled-components";
import { colorStyle } from "../GlobalStyled";
import NavButton from "./header_Components/NavButton";
import { headerMenuList } from "../list";

const Container = styled.div`
  position: absolute;
  z-index: 990;
  top: 0;
  left: 0;
  width: 270px;
  height: 100vh;
  background-color: ${colorStyle.mainPurple};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavWrap = styled.div`
  position: relative;
  z-index: 991;
`;

const Header = (): JSX.Element => {

  return (
    <Container>
      <NavWrap>
        {headerMenuList.map((data, index) => (
          <NavButton
            key={index}
            menu={data[0]}
            className={data[1]}
          />
        ))}
      </NavWrap>
    </Container>
  );
};

export default Header;
