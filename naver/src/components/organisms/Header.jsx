import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <Container>
        <Nav>
          <Link to="/">
            <BtnLink>메인</BtnLink>
          </Link>
          <Link to="/movie">
            <BtnLink>영화</BtnLink>
          </Link>
          <Link to="/book">
            <BtnLink>책</BtnLink>
          </Link>
        </Nav>
      </Container>
      <Outlet />
    </>
  );
};

const Container = styled.header`
  height: 60px;
  border-bottom: 1px solid #ddd;
  padding: 0 20px;
`;
const Nav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
`;

const BtnLink = styled.button`
  border: 1px solid #ddd;
  border-radius: 5px;
  background: #fff;
  padding: 8px 10px;
`;
const Link = styled(NavLink)`
  & + & {
    margin-left: 10px;
  }
  &.active {
    ${BtnLink} {
      background: royalblue;
      color: #fff;
    }
  }
`;

export default Header;
