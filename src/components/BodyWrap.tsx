import styled from "styled-components";
import { colorStyle } from "../GlobalStyled";

const Container = styled.div`
position: relative;
z-index: 0;
width: calc(100% - 330px);
min-height: calc(100vh - 140px);
height: 100%;
padding: 140px 30px 0 300px; 
background-color: ${colorStyle.mainGray};
`;

interface PropsType {
  children: React.ReactNode;
} 

const BodyWrap = ({children}:PropsType):JSX.Element => {
  return <Container>
    {children}
  </Container>
};

export default BodyWrap;