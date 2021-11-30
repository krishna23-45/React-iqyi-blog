import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;
//
const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 60px 0;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.h2`
  font-family: Poppins;
  font-size: 30px;
`;
const LiMenu = styled.ul`
  font-family: Poppins, Roboto;
  list-style: none;
  color: #65546d;
  display: flex;
  align-items: center;
  padding-left: 70px;
`;
const LiList = styled.li`
  margin-right: 40px;
`;

//
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RiMenu = styled.ul``;
const RiList = styled.li``;

const RiIcon = styled.div`
  display: flex;
  padding-right: 40px;
  align-items: center;
`;

const Short = styled.div`
  margin-right: 20px;
`;

const Button = styled.button`
  color: #fff;
  border: 0;
  border-radius: 50%;
  background-color: #6e72fc;
  background-image: linear-gradient(315deg, #6e72fc 0%, #ad1deb 74%);
  background-size: auto 200%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 37px;
  line-height: 39px;
  text-align: center;
  vertical-align: middle;
  width: 37px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;
  outline: none;
  margin-right: 20px;
  &:hover {
    background-position: bottom center;
  }
`;

const Bicon = styled.i``;

const Tic = styled.i`
  padding-right: 20px;
  font-size: 19px;
  color: #202649;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-position: bottom center;
    color: #ad1deb;
    opacity: 0.9;
  }
`;

function Navbar() {
  return (
    <>
      <Wrapper>
        <Nav>
          <Left>
            <Logo>Tech Crunch</Logo>

            <LiMenu>
              <LiList>Home</LiList>
              <LiList>Latest</LiList>
              <LiList>Trending</LiList>
              <LiList>About Us</LiList>
              <LiList>Contact</LiList>
            </LiMenu>
          </Left>

          <Right>
            <RiIcon>
              <Tic className="fab fa-facebook-square"></Tic>
              <Tic className="fab fa-twitter"></Tic>
              <Tic className="fab fa-pinterest"></Tic>
              <Tic className="fab fa-instagram-square"></Tic>
              <Tic className="fab fa-youtube"></Tic>
            </RiIcon>

            <Short>
              <Button>
                <Bicon className="fas fa-search"></Bicon>
              </Button>
              <Button>
                <Bicon className="fas fa-bars"></Bicon>
              </Button>
            </Short>
          </Right>
        </Nav>
      </Wrapper>
    </>
  );
}

export default Navbar;
