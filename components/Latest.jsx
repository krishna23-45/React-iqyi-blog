import React from "react";
import Postg from "../img/latest.jpg";
import styled from "styled-components";
import Authi from "../img/other/author-sm.jpg";
import Editor from "../img/posts/editors-lg.jpg";
import corona from "../img/posts/wid-1.jpg";

const Wrapper = styled.div`
  margin: 30px 60px 0;
`;

const Container = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 20px;
`;

const Right = styled.div`
  flex-basis: 35%;
  height: auto;

  border: 1px solid rgba(0, 0, 0, 0.08);
`;

// left side
const Left = styled.div`
  flex-basis: 65%;
  height: auto;
  border: 1px solid rgba(0, 0, 0, 0.08);
`;

const Left1 = styled.div`
  display: flex;
  gap: 25px;
`;

const Left2 = styled.div`
  display: flex;
  flex-direction: column;
`;
const Wrap = styled.div`
  margin: 10px 20px;
  display: flex;

  gap: 30px;
`;

const Auth = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;
const Imgcont = styled.img`
  width: 300px;
  border-radius: 10px;
`;

const Topinfo = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: center;
`;

const Lowerdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

const Lefttitle = styled.h1`
  margin-top: 15px;
  font-size: 19px;
  word-spacing: 6px;
  font-family: Roboto;
  color: #000000;
`;

const Leftdes = styled.p`
  margin-top: 15px;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: #404549;
`;

const LeftLower = styled.div``;

// end

const Divtitle = styled.h1`
  font-family: poppins;
  font-weight: bold;
  font-size: 25px;
  color: #10131f;
`;

const Authname = styled.p`
  font-size: 12px;
  color: #616060;
  font-weight: 500;
  font-family: poppins;
`;

const Sep = styled.span`
  font-size: 20px;
  font-weight: bold;
  margin: 0px 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
`;

const Tagname = styled.p`
  font-size: 12px;
  color: #616060;
  font-weight: 500;
  font-family: poppins;
`;

const Date = styled.p`
  font-size: 12px;
  color: #616060;
  font-weight: 500;
  font-family: poppins;
`;

const Rwapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Rtitle = styled.h2`
  margin-top: 40px;
  font-family: Roboto;
  letter-spacing: 1px;
  color: #1b2024;
`;

const Rdes = styled.p`
  margin-top: 10px;
  font-family: poppins;
  color: #424242;
`;

const Rinput = styled.input`
  margin-top: 20px;
  padding: 10px 70px;
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 20px;

  &::placeholder {
    text-align: center;
    font-family: Roboto;
    font-weight: 500;
    font-size: 15.5px;
    outline: none;
  }
  &:focus {
    color: #ad1deb;
  }
`;

const Rbutton = styled.a`
  margin-top: 7px;
  padding: 10px 100px;
  background: #ad1deb;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  font-family: Roboto;
`;

const Rlower = styled.p`
  font-size: 14px;
  color: #424242;
  margin-top: 20px;
  font-family: sans-serif Roboto;
`;

const TestDiv = styled.div`
  position: relative;
  margin: 20vh 20px 0px;
`;

const Tags = styled.a`
  color: white;
  z-index: 5;
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
const Limg = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
`;

const Bicon = styled.i``;
const ItrW = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

const Itr = styled.div`
  margin-top: 0px;
  display: flex;
  margin-left: -10px;
  align-items: center;
`;

const Ltitle = styled.p`
  margin-top: 15px;
  font-size: 20px;
  font-family: poppins;
  font-weight: 500;
`;

const Dt = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dtil = styled.h1``;

const Latest = () => {
  return (
    <>
      <Wrapper>
        <Divtitle>Latest News</Divtitle>
        <Container>
          <Left>
            <Wrap>
              <Left1>
                <Imgcont src={Postg} />
              </Left1>

              <Left2>
                <Topinfo>
                  <Auth src={Authi} />
                  <Lowerdiv>
                    <Authname>Techy Coder</Authname>
                    <Sep>.</Sep>
                    <Tagname>Trending</Tagname>
                    <Sep>.</Sep>
                    <Date>26 May 2021</Date>
                  </Lowerdiv>
                </Topinfo>

                <Lefttitle>
                  360-seater plane flies to Dubai from Mumbai with only 1
                  Passenger
                </Lefttitle>

                <Leftdes>
                  This is Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Modi, iure.
                </Leftdes>

                <LeftLower></LeftLower>
              </Left2>
            </Wrap>

            <Wrap>
              <Left1>
                <Imgcont src={Postg} />
              </Left1>

              <Left2>
                <Topinfo>
                  <Auth src={Authi} />
                  <Lowerdiv>
                    <Authname>Techy Coder</Authname>
                    <Sep>.</Sep>
                    <Tagname>Trending</Tagname>
                    <Sep>.</Sep>
                    <Date>26 May 2021</Date>
                  </Lowerdiv>
                </Topinfo>

                <Lefttitle>
                  360-seater plane flies to Dubai from Mumbai with only 1
                  Passenger
                </Lefttitle>

                <Leftdes>
                  This is Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Modi, iure.
                </Leftdes>

                <LeftLower></LeftLower>
              </Left2>
            </Wrap>

            <Wrap>
              <Left1>
                <Imgcont src={Postg} />
              </Left1>

              <Left2>
                <Topinfo>
                  <Auth src={Authi} />
                  <Lowerdiv>
                    <Authname>Techy Coder</Authname>
                    <Sep>.</Sep>
                    <Tagname>Trending</Tagname>
                    <Sep>.</Sep>
                    <Date>26 May 2021</Date>
                  </Lowerdiv>
                </Topinfo>

                <Lefttitle>
                  360-seater plane flies to Dubai from Mumbai with only 1
                  Passenger
                </Lefttitle>

                <Leftdes>
                  This is Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Modi, iure.
                </Leftdes>

                <LeftLower></LeftLower>
              </Left2>
            </Wrap>

            <Wrap>
              <Left1>
                <Imgcont src={Postg} />
              </Left1>

              <Left2>
                <Topinfo>
                  <Auth src={Authi} />
                  <Lowerdiv>
                    <Authname>Techy Coder</Authname>
                    <Sep>.</Sep>
                    <Tagname>Trending</Tagname>
                    <Sep>.</Sep>
                    <Date>26 May 2021</Date>
                  </Lowerdiv>
                </Topinfo>

                <Lefttitle>
                  360-seater plane flies to Dubai from Mumbai with only 1
                  Passenger
                </Lefttitle>

                <Leftdes>
                  This is Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Modi, iure.
                </Leftdes>

                <LeftLower></LeftLower>
              </Left2>
            </Wrap>

            <Wrap>
              <Left1>
                <Imgcont src={Postg} />
              </Left1>

              <Left2>
                <Topinfo>
                  <Auth src={Authi} />
                  <Lowerdiv>
                    <Authname>Techy Coder</Authname>
                    <Sep>.</Sep>
                    <Tagname>Trending</Tagname>
                    <Sep>.</Sep>
                    <Date>26 May 2021</Date>
                  </Lowerdiv>
                </Topinfo>

                <Lefttitle>
                  360-seater plane flies to Dubai from Mumbai with only 1
                  Passenger
                </Lefttitle>

                <Leftdes>
                  This is Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Modi, iure.
                </Leftdes>

                <LeftLower></LeftLower>
              </Left2>
            </Wrap>
            <Left2></Left2>
          </Left>
          <Right>
            <Rwapper>
              <Rtitle>Newsletter</Rtitle>
              <Rdes>Join 50,000 subscribers</Rdes>
              <Rinput type="text" placeholder="Email address..." />
              <Rbutton>Sign Up</Rbutton>
              <Rlower>By signing up, you agree to our Privacy policy</Rlower>
            </Rwapper>

            <TestDiv>
              <Tags>Covid-19</Tags>
              <Limg src={corona} />

              <Ltitle>10 Things to do for being safe of corona</Ltitle>
              <Itr>
                <ItrW>
                  <Authname>Techy Coder</Authname>
                  <Sep>.</Sep>
                  <Date> 05 Jun 2021</Date>
                </ItrW>
              </Itr>
            </TestDiv>
          </Right>
        </Container>
      </Wrapper>
    </>
  );
};

export default Latest;
