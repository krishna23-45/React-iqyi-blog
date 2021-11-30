import React from "react";
import Editor from "../img/posts/editors-lg.jpg";
import Editor1 from "../img/posts/tren-lg-1.jpg";
import Editor2 from "../img/posts/tren-lg-2.jpg";
import Authi from "../img/other/author-sm.jpg";
import Postg from "../img/latest.jpg";
import Postg1 from "../img/posts/editor1.jpg";
import Postg2 from "../img/posts/editor2.jpg";
import Postg3 from "../img/posts/editor3.jpg";

import styled from "styled-components";

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

const RWrapper = styled.div`
  margin-top: 30px;

  font-family: sans-serif, poppins;
`;

const Left = styled.div`
  flex-basis: 65%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 10px;

  display: flex;
  justify-content: center;
  gap: 20px;
  padding-bottom: 30px;
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
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  position: relative;
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
  top: 57%;

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

const Right = styled.div`
  flex-basis: 35%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  display: flex;
  margin-top: -20vh;
  flex-direction: column;
  align-items: center;
`;
const Bicon = styled.i``;
const Container1 = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 20px;
`;
const Botdiv = styled.div`
  height: 100vh;
  flex-basis: 65%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 14px;
  height: auto;
`;

const Botdiv1 = styled.div`
  flex-basis: 35%;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  background-color: #ffffff;
  color: #292929;
  height: 85vh;
`;
const test = styled.div`
  margin-top: 40px;

  height: 100vh;
  background-color: red;
`;
const Iop = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Posts = styled.div`
  margin-top: 40px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(27, 26, 26, 0.1);
`;

const Postimg = styled.img`
  width: 110px;

  height: 110px;
  border-radius: 50%;
`;

const Posttitle = styled.p`
  font-weight: 500;

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

const Gt = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 20px;
`;

const Tav = styled.h1`
  font-size: 40px;
  font-family: Roboto;
  color: #0a0a0a;
`;

const Tav1 = styled.h1`
  font-size: 30px;
  font-family: Roboto;
  text-align: center;
`;

const Eouter = styled.div`
  margin: 40px 40px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0.04);
`;

const Einner = styled.div``;

const Ename = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Etopic = styled.p``;

const Earrow = styled.i`
  margin-left: 10px;
  font-weight: bold;
  font-size: 20px;
`;
const Enu = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

const Enum = styled.p`
  margin-left: 20px;
  font-weight: bold;
  font-size: 20px;
`;

function Trending() {
  return (
    <>
      <Wrapper>
        <DivTitle> Trending</DivTitle>
        <Container>
          <Left>
            <Left1>
              <Tags>Finance</Tags>
              <Limg src={Editor1} />
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
              <Tags>Inspiration</Tags>
              <div>
                <Limg src={Editor2} />
                <Button>
                  <Bicon className="fas fa-search"></Bicon>
                </Button>
              </div>

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
            </Left2>
          </Left>

          <Right>
            <RWrapper>
              <Tav>Popular Post</Tav>

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
                  <Posttitle>
                    Bitcoin price is raise Bitcoin price is raise
                  </Posttitle>
                  <Postdate>24 May 2021</Postdate>
                </Gt>
              </Posts>

              <Posts>
                <Postimg src={Postg1} />

                <Gt>
                  <Posttitle>
                    Bitcoin price is raise Bitcoin price is raise
                  </Posttitle>
                  <Postdate>24 May 2021</Postdate>
                </Gt>
              </Posts>

              <Posts>
                <Postimg src={Postg2} />

                <Gt>
                  <Posttitle>
                    Bitcoin price is raise Bitcoin price is raise
                  </Posttitle>
                  <Postdate>24 May 2021</Postdate>
                </Gt>
              </Posts>
            </RWrapper>
          </Right>
        </Container>

        <Container1>
          <Botdiv>
            <Iop>
              <Posts>
                <Postimg src={Postg1} />

                <Gt>
                  <Posttitle>3 ways to remove dark spots naturally</Posttitle>
                  <Postdate>24 May 2021</Postdate>
                </Gt>
              </Posts>

              <Posts>
                <Postimg src={Editor1} />

                <Gt>
                  <Posttitle>3 ways to remove dark spots naturally</Posttitle>
                  <Postdate>24 May 2021</Postdate>
                </Gt>
              </Posts>

              <Posts>
                <Postimg src={Postg1} />

                <Gt>
                  <Posttitle>3 ways to remove dark spots naturally</Posttitle>
                  <Postdate>24 May 2021</Postdate>
                </Gt>
              </Posts>

              <Posts>
                <Postimg src={Postg1} />

                <Gt>
                  <Posttitle>3 ways to remove dark spots naturally</Posttitle>
                  <Postdate>24 May 2021</Postdate>
                </Gt>
              </Posts>

              <Posts>
                <Postimg src={Editor2} />

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
            </Iop>
          </Botdiv>

          <Botdiv1>
            <RWrapper>
              <Tav1>Explore Topic</Tav1>
              <Eouter>
                <Einner>
                  <Ename>
                    <Earrow className="fas fa-arrow-right"></Earrow>
                    <Enum>Tect</Enum>
                  </Ename>
                </Einner>

                <div>
                  <Enu>(23)</Enu>
                </div>
              </Eouter>

              <Eouter>
                <Einner>
                  <Ename>
                    <Earrow className="fas fa-arrow-right"></Earrow>
                    <Enum>Tect</Enum>
                  </Ename>
                </Einner>

                <div>
                  <Enu>(23)</Enu>
                </div>
              </Eouter>

              <Eouter>
                <Einner>
                  <Ename>
                    <Earrow className="fas fa-arrow-right"></Earrow>
                    <Enum>Tect</Enum>
                  </Ename>
                </Einner>

                <div>
                  <Enu>(23)</Enu>
                </div>
              </Eouter>

              <Eouter>
                <Einner>
                  <Ename>
                    <Earrow className="fas fa-arrow-right"></Earrow>
                    <Enum>Tect</Enum>
                  </Ename>
                </Einner>

                <div>
                  <Enu>(23)</Enu>
                </div>
              </Eouter>

              <Eouter>
                <Einner>
                  <Ename>
                    <Earrow className="fas fa-arrow-right"></Earrow>
                    <Enum>Tect</Enum>
                  </Ename>
                </Einner>

                <div>
                  <Enu>(23)</Enu>
                </div>
              </Eouter>

              <Eouter>
                <Einner>
                  <Ename>
                    <Earrow className="fas fa-arrow-right"></Earrow>
                    <Enum>Tect</Enum>
                  </Ename>
                </Einner>

                <div>
                  <Enu>(23)</Enu>
                </div>
              </Eouter>
            </RWrapper>
          </Botdiv1>
        </Container1>
      </Wrapper>
    </>
  );
}

export default Trending;
