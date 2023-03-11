import { Search, ShoppingCartOutlined, MailIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { styled as style } from "@mui/material/styles";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import { GlobalInfo } from "../App";

const StyledBadge = style(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  cursor: pointer;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = ({ cart }) => {
  const navigate = useNavigate();
  const { cartValue } = useContext(GlobalInfo);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={() => navigate("/")}>GHOP LOCAL</Logo>
        </Center>
        <Right>
          <MenuItem onClick={() => navigate("/register")}>REGISTER</MenuItem>
          <MenuItem onClick={() => navigate("/login")}>SIGN IN</MenuItem>
          <MenuItem onClick={() => navigate("/cart")}>
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={cartValue} color="secondary">
                <ShoppingCartIcon />
              </StyledBadge>
            </IconButton>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
