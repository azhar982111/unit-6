import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background: grey;
  color: white;
  padding: 20px;
`;

const StyledLink = styled(Link)`
  color: white;
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <StyledLink to="/">HOME</StyledLink>
      <StyledLink to="/login">LOGIN</StyledLink>
      <StyledLink to="/bookings">BOOKINGS</StyledLink>
    </NavbarWrapper>
  );
};

export default Navbar;
