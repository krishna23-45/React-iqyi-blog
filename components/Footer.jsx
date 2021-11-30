import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 60px 60px 0;
  padding-bottom: 5vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Copy = styled.p`
  font-family: Roboto;
`;

const Social = styled.div``;

const Right = styled.div``;

const Tg = styled.p`
  font-family: poppins;

  padding: 5px 20px;
  border-radius: 15px;
`;
const RiIcon = styled.div`
  display: flex;
  padding-right: 40px;
  align-items: center;
`;

const Tic = styled.i`
  padding-left: 15px;
`;
const Ty = styled.p`
  font-family: poppins;
  border: 1px solid rgba(0, 0, 0, 0.4);
  padding: 5px 20px;
  border-radius: 15px;
  background-color: #fafcfd;
`;
function Footer() {
  return (
    <>
      <Wrapper>
        <Copy>
          <Tg>© 2021 Idealab</Tg>
        </Copy>

        <Social>
          <RiIcon>
            <Tic className="fab fa-facebook-square"></Tic>
            <Tic className="fab fa-twitter"></Tic>
            <Tic className="fab fa-pinterest"></Tic>
            <Tic className="fab fa-instagram-square"></Tic>
            <Tic className="fab fa-youtube"></Tic>
          </RiIcon>
        </Social>

        <Ty>idealab</Ty>
      </Wrapper>
    </>
  );
}

export default Footer;
