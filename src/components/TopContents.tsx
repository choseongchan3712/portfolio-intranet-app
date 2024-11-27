import styled from "styled-components";
import { colorStyle } from "../GlobalStyled";
import Welcome from "./top_contents-components/Welcome";
import SearchTab from "./top_contents-components/SearchTab";
import SideMenu from "./top_contents-components/SideMenu";
import Profile from "./top_contents-components/Profile";

const Container = styled.div`
  position: fixed;
  z-index: 990;
  top: 0;
  right: 30px;
  width: calc(100% - 330px - 80px);
  height: 90px;
  background-color: ${colorStyle.mainWhite};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0 0 20px 20px;
  padding: 0 40px;
`;

const TopContents = ():JSX.Element => {
  return <Container>
    <Welcome />
    <SearchTab />
    <SideMenu />
    <Profile />
  </Container>
};

export default TopContents;