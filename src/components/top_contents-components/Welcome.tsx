import styled from "styled-components";
import { colorStyle, fontSize } from "../../GlobalStyled";

const Container = styled.div`
font-size: ${fontSize.toptittle};
font-weight: 700;
span {
  color: ${colorStyle.mainPurple};
  font-weight: 900;
}
`;

const Welcome = ():JSX.Element => {
  return <Container><span>수달</span> 님 환영합니다</Container>;
};

export default Welcome;