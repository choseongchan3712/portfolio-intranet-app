import styled from "styled-components";
import { fontSize } from "../../GlobalStyled";

const Container = styled.div`
font-size: ${fontSize.toptittle};
font-weight: 700;
`;

const Welcome = ():JSX.Element => {
  return <Container>User_1 님 환영합니다</Container>;
};

export default Welcome;