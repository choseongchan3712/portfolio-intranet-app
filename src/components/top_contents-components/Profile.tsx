import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 40px;
  height: 40px;
  background-color: gray;
  border-radius: 40px;
`;

const Profile = (): JSX.Element => {
  return (
    <Link to={"#"}>
      <Container></Container>
    </Link>
  );
};

export default Profile;
