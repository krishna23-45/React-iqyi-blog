import React from "react";
import styled from "styled-components";
import Editor from "../img/posts/editors-lg.jpg";
import Authi from "../img/other/author-sm.jpg";
import Postg from "../img/latest.jpg";
import Postg1 from "../img/posts/editor1.jpg";
import Postg2 from "../img/posts/editor2.jpg";
import Postg3 from "../img/posts/editor3.jpg";

const Wrapper = styled.div`
  margin: 30px 60px 0;
`;

const DivTitle = styled.h1`
  font-family: poppins;
  font-weight: bold;
  font-size: 35px;
  color: #28292c;
`;

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 20px;
`;
const Left = styled.div`
  flex-basis: 65%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 10px;

  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Left1 = styled.div`
  flex-basis: 48%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  position: relative;
`;
const Left2 = styled.div`
  flex-basis: 48%;
`;
//
const Limg = styled.img`
  display: block;
  width: 100%;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
`;

const Itr = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
`;
const Auth = styled.img`
  width: 50px;
  border-radius: 50%;
`;

const Authname = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: #222222;
  font-weight: bold;
`;
const Sep = styled.span`
  padding: 0px 10px 0px 10px;
  color: #66122e;
  font-weight: bolder;
  font-size: 20px;
`;
const Date = styled.p`
  font-family: Roboto;
  font-size: 14px;

  color: #222222;
  font-weight: bold;
`;

const Ltitle = styled.p`
  margin-top: 15px;
  font-size: 22px;
  font-family: poppins;
  font-weight: 500;
`;

const Ldes = styled.p`
  margin-top: 10px;
  font-family: Roboto;
  font-size: 15.5px;
  font-weight: 400;
`;

const Tags = styled.a`
  color: white;
  position: absolute;

  font-size: 18px;
  border-radius: 20px;
  display: inline-block;
  padding: 6px 13px;
  line-height: 1;
  left: 20px;
  top: 20px;
  z-index: 1;
  background-color: #6e72fc;
  background-image: linear-gradient(315deg, #6e72fc 0%, #ad1deb 74%);
  background-size: 200% auto;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-position: right center;
  }
`;

const ItrW = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;
const Button = styled.button`
  position: absolute;
  color: #fff;
  border: 0;
  right: 0%;
  top: 46%;

  border-radius: 50%;
  background-color: #6e72fc;
  background-image: linear-gradient(315deg, #6e72fc 0%, #ad1deb 74%);
  background-size: auto 200%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  line-height: 39px;
  text-align: center;
  vertical-align: middle;
  width: 44px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease-in-out;
  outline: none;
  margin-right: 20px;
  &:hover {
    background-position: bottom center;
  }
`;

const Bicon = styled.i``;

//
const Rimg = styled.img``;

/////
const Right = styled.div`
  flex-basis: 35%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  display: flex;
  height: 55vh;
  flex-direction: column;
  align-items: center;
`;

const Posts = styled.div`
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(27, 26, 26, 0.1);
`;

const Postimg = styled.img`
  width: 130px;
  height: 90px;
  border-radius: 10px;
`;

const Gt = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 20px;
`;

const Posttitle = styled.p`
  font-weight: 500;
  margin-top: -15px;
  width: 98%;
  font-size: 20px;
  color: #1a1a1d;
`;

const Postdate = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: #8d8787;
  margin-top: 10px;
`;
///
const WR = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const RTitle = styled.h1`
  font-size: 40px;
  font-family: Roboto;
  color: #1b3855;
`;

const RDes = styled.p`
  margin: 10px 20px 0px 20px;
  text-align: center;
  font-family: Poppins;
  line-height: 27px;
`;

const RiIcon = styled.div`
  margin-top: 30px;
  display: flex;

  align-items: center;
`;

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

function EditorPicker() {
  return (
    <>
      <Wrapper>
        <DivTitle> Editor's Pick </DivTitle>
        <Container>
          <Left>
            <Left1>
              <Tags>Finance</Tags>
              <Limg src={Editor} />
              <Button>
                <Bicon className="fas fa-search"></Bicon>
              </Button>
              <Itr>
                <Auth src={Authi} />
                <ItrW>
                  <Authname>Techy Coder</Authname>
                  <Sep>.</Sep>
                  <Date> 05 Jun 2021</Date>
                </ItrW>
              </Itr>
              <Ltitle>3 must visit Place in switzerland</Ltitle>
              <Ldes>
                This is Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo, quasi.
              </Ldes>
            </Left1>

            <Left2>
              <Posts>
                <Postimg src={Postg} />

                <Gt>
                  <Posttitle>
                    Bitcoin price is raise Bitcoin price is raise
                  </Posttitle>
                  <Postdate>24 May 2021</Postdate>
                </Gt>
              </Posts>

              <Posts>
                <Postimg src={Postg1} />

                <Gt>
                  <Posttitle>2 Policemen saved life like a hero</Posttitle>
                  <Postdate>24 May 2021</Postdate>
                </Gt>
              </Posts>

              <Posts>
                <Postimg src={Postg2} />

                <Gt>
                  <Posttitle>3 ways to remove dark spots naturally</Posttitle>
                  <Postdate>24 May 2021</Postdate>
                </Gt>
              </Posts>
              <Posts>
                <Postimg src={Postg2} />

                <Gt>
                  <Posttitle>3 ways to remove dark spots naturally</Posttitle>
                  <Postdate>24 May 2021</Postdate>
                </Gt>
              </Posts>
            </Left2>
          </Left>
          <Right>
            <WR>
              <RTitle>Idealab</RTitle>

              <RDes>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt asperiores ipsum nihil necessitatibus, excepturi
                accusantium consequuntur hic dolorem. Deserunt modi veritatis
                cupiditate iste alias. Sunt ex minima autem animi atque.
              </RDes>

              <RiIcon>
                <Tic className="fab fa-facebook-square"></Tic>
                <Tic className="fab fa-twitter"></Tic>
                <Tic className="fab fa-pinterest"></Tic>
                <Tic className="fab fa-instagram-square"></Tic>
                <Tic className="fab fa-youtube"></Tic>
              </RiIcon>
            </WR>
          </Right>
        </Container>
      </Wrapper>
    </>
  );
}

export default EditorPicker;
