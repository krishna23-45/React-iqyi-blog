import { Button } from "@material-ui/core";
import { Spa } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Feature from "../img/featured-lg.jpg";
import Postg from "../img/latest.jpg";

const Container = styled.div`
  margin: 40px 60px 0;
  display: flex;
  gap: 20px;
`;

const Left = styled.div`
  flex-basis: 65%;

  display: flex;
  position: relative;
`;

const Img = styled.img`
  display: block;
  width: 100%;

  height: 80vh;
  margin-left: auto;
  margin-right: auto;
  border-radius: 9px;

  transition: all 0.5s ease-in;
  &:hover {
    transform: scale(1.03);
  }
`;

const Overlay = styled.div`
  position: absolute;
  border-radius: 9px;

  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100;
  width: 100%;
  height: 80vh;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.9;
  }
`;

const Intro = styled.div`
  position: absolute;
  z-index: 100;

  margin-top: 35vh;
  margin-left: 40px;
`;
const Tags = styled.a`
  color: white;
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
const Title = styled.p`
  font-family: sans-serif, Roboto;
  color: white;
  width: 85%;
  margin-top: 20px;
  font-size: 35px;
  font-weight: bolder;
`;

const Test = styled.div`
  margin-top: 20px;
  display: flex;
  color: #fffefe;
  font-weight: bold;
`;
const Author = styled.p`
  font-size: 20px;
`;
const Date = styled.p`
  font-size: 20px;
`;

const Right = styled.div`
  flex-basis: 35%;
  border: solid 1px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
`;

const Span = styled.span`
  padding: 0px 20px 0px 20px;
`;
const RWrapper = styled.div`
  margin-top: 30px;
  font-family: sans-serif, poppins;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Tav = styled.div`
  display: flex;
`;
const Tabs = styled.a`
  color: white;
  width: 100%;
  font-size: 18px;
  border-radius: 20px;
  display: inline-block;
  padding: 12px 50px;
  line-height: 1;
  left: 20px;
  top: 20px;
  z-index: 1;
  margin-left: 20px;
  background-color: #6e72fc;
  background-image: linear-gradient(315deg, #6e72fc 0%, #ad1deb 74%);
  background-size: 200% auto;
  transition: all 0.3s ease-in-out;
`;
const RT = styled.a`
  color: #616161;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 18px;
  border-radius: 20px;
  display: inline-block;
  padding: 12px 50px;
  line-height: 1;
  left: 20px;
  top: 20px;
  z-index: 1;
  margin-left: 20px;

  background-image: linear-gradient(315deg, #e9e9f6 0%, #fdffff 74%);
  background-size: 200% auto;
  transition: all 0.3s ease-in-out;
`;

const Posts = styled.div`
  margin-top: 10px;
  display: flex;
  margin: 30px 0px 0px 54px;
  align-items: center;
  justify-content: center;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(27, 26, 26, 0.1);
`;

const Postimg = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;

const Posttitle = styled.p`
  font-weight: bold;
  width: 90%;
`;

const Postdate = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: #8d8787;
  margin-top: 5px;
`;

const Gt = styled.div`
  display: flex;

  justify-content: space-between;

  flex-direction: column;
  margin-left: 20px;
`;

const Break = styled.hr`
  margin: 20px 20px 10px 50px;
  color: rgba(0, 0, 0, 0.001);
  opacity: 0.3;
`;

function IntroSection() {
  return (
    <>
      <Container>
        <Left>
          <Img className="hello" src={Feature} />

          <Overlay></Overlay>
          <Intro>
            <Tags>Finance</Tags>
            <Title>
              Things you should avoid while investing to the stock markets as a
              beginner
            </Title>

            <Test>
              <Author>Techy Coder</Author>
              <Span>.</Span>
              <Date> 30 May 2021</Date>
            </Test>
          </Intro>
        </Left>

        <Right>
          <RWrapper>
            <Tav>
              <Tabs>Popular</Tabs>
              <RT>Recent</RT>
            </Tav>

            <Posts>
              <Postimg src={Postg} />

              <Gt>
                <Posttitle>
                  Bitcoin price is raise Bitcoin price is raise asdfsdfsad asdf
                  asdf fasdfas asdf
                </Posttitle>
                <Postdate>24 May 2021</Postdate>
              </Gt>
            </Posts>

            <Posts>
              <Postimg src={Postg} />

              <Gt>
                <Posttitle>
                  Bitcoin price is raise Bitcoin price is raise asdfsdfsad asdf
                  asdf fasdfas asdf
                </Posttitle>
                <Postdate>24 May 2021</Postdate>
              </Gt>
            </Posts>

            <Posts>
              <Postimg src={Postg} />

              <Gt>
                <Posttitle>
                  Bitcoin price is raise Bitcoin price is raise asdfsdfsad asdf
                  asdf fasdfas asdf
                </Posttitle>
                <Postdate>24 May 2021</Postdate>
              </Gt>
            </Posts>

            <Posts>
              <Postimg src={Postg} />

              <Gt>
                <Posttitle>
                  Bitcoin price is raise Bitcoin price is raise asdfsdfsad asdf
                  asdf fasdfas asdf
                </Posttitle>
                <Postdate>24 May 2021</Postdate>
              </Gt>
            </Posts>
          </RWrapper>
        </Right>
      </Container>
    </>
  );
}

export default IntroSection;
