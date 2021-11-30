import {
  ArrowLeft,
  ArrowLeftOutlined,
  ArrowRight,
  ArrowRightOutlined,
} from "@material-ui/icons";
import Feature from "../img/featured-lg.jpg";
import styled from "styled-components";

import { useState } from "react";

import { sliderItems } from "../data";

const Container = styled.div`
  width: 780px;
  margin: 30px 60px 0;
  overflow: hidden;
`;

const Left = styled.div`
  flex-basis: 65%;
`;

const Right = styled.div`
  flex-basis: 35%;
  background-color: #a36009;
`;

const Arrow = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  opacity: 0.5;
  z-index: 100;
`;

const DivAow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Divtil = styled.h1`
  font-family: poppins;
  font-weight: bold;
  font-size: 30px;
  color: #10131f;
`;

const Divw = styled.div`
  display: flex;
  gap: 5px;
  margin-right: 15px;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: 40vh;
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
  border-radius: 9px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0%;
  border-radius: 9px;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
  width: 100%;
  height: 40vh;
`;

const Intro = styled.div`
  top: 0%;
  position: absolute;
  z-index: 100;
  background-color: rebeccapurple;
  margin-top: 1vh;
  margin-left: 40px;
`;
const Tags = styled.a`
  position: absolute;
  color: white;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  border-radius: 20px;
  display: inline-block;
  padding: 6px 13px;
  line-height: 1;
  left: 20px;
  top: 18vh;
  z-index: 1;
  background-color: #6e72fc;
  background-image: linear-gradient(315deg, #6e72fc 0%, #ad1deb 74%);
`;
const Title = styled.p`
  position: absolute;
  top: 20.5vh;
  left: 20px;
  font-family: poppins;
  color: white;
  width: 88%;
  z-index: 1;
  margin-top: 20px;
  font-size: 19px;
  font-weight: bolder;
`;
const Span = styled.span`
  position: absolute;
  margin-top: -11px;
  margin-left: 6.2vw;
  color: wheat;
  z-index: 11;
  font-size: 30px;
  font-weight: bolder;
`;
const Test = styled.div`
  position: absolute;
  top: 33vh;
  left: 20px;
  margin-top: 20px;
  display: flex;
  z-index: 1;
  color: #fffefe;
  font-weight: bold;
`;
const Author = styled.p`
  color: #d2f1ff;
  margin-top: 5px;
  font-size: 13px;
  font-family: sans-serif, Roboto;
  padding-right: 20px;
`;
const Date = styled.p`
  color: #d2f1ff;
  margin-top: 5px;
  font-size: 13px;
  font-family: sans-serif, Roboto;
`;
const Sliderm = styled.div`
  display: flex;
  transition: all 1.5s ease;

  transform: translateX(${(props) => props.slideIndex * -28.5}vw);
`;
const Left1 = styled.div`
  display: flex;
  gap: 20px;
`;

const ItemContainer = styled.div`
  display: flex;
  position: relative;
  gap: 20px;
`;

const Item1 = styled.div`
  position: relative;
  width: 375px;
`;

const Item2 = styled.div`
  position: relative;
  width: 375px;
`;
const Tes = styled.div`
  width: 800px;
`;

const Intro1 = styled.div``;
function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    } else {
      setSlideIndex(slideIndex < 4 ? slideIndex + 1 : 0);
    }
  };
  return (
    <>
      <Container>
        <Left>
          <DivAow>
            <Divtil> Inspiration </Divtil>

            <Divw>
              <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
              </Arrow>
              <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
              </Arrow>
            </Divw>
          </DivAow>

          <Tes>
            <Sliderm slideIndex={slideIndex}>
              <Left1>
                <ItemContainer>
                  <Item1>
                    <Img className="hello" src={Feature} />
                    <Overlay></Overlay>
                    <Intro1>
                      <Tags>Finance</Tags>
                      <Title>
                        Things you should avoid while investing to the stock
                        markets as a beginner
                      </Title>

                      <Test>
                        <Author>Techy Coder</Author>
                        <Span>.</Span>
                        <Date> 30 May 2021</Date>
                      </Test>
                    </Intro1>
                  </Item1>

                  <Item2>
                    <Img className="hello" src={Feature} />
                    <Overlay></Overlay>
                    <Intro1>
                      <Tags>Finance</Tags>
                      <Title>
                        Things you should avoid while investing to the stock
                        markets as a beginner
                      </Title>

                      <Test>
                        <Author>Techy Coder</Author>
                        <Span>.</Span>
                        <Date> 30 May 2021</Date>
                      </Test>
                    </Intro1>
                  </Item2>
                </ItemContainer>

                <ItemContainer>
                  <Item1>
                    <Img className="hello" src={Feature} />
                    <Overlay></Overlay>
                    <Intro1>
                      <Tags>Finance</Tags>
                      <Title>
                        Things you should avoid while investing to the stock
                        markets as a beginner
                      </Title>

                      <Test>
                        <Author>Techy Coder</Author>
                        <Span>.</Span>
                        <Date> 30 May 2021</Date>
                      </Test>
                    </Intro1>
                  </Item1>

                  <Item2>
                    <Img className="hello" src={Feature} />
                    <Overlay></Overlay>
                    <Intro1>
                      <Tags>Finance</Tags>
                      <Title>
                        Things you should avoid while investing to the stock
                        markets as a beginner
                      </Title>

                      <Test>
                        <Author>Techy Coder</Author>
                        <Span>.</Span>
                        <Date> 30 May 2021</Date>
                      </Test>
                    </Intro1>
                  </Item2>
                </ItemContainer>

                <ItemContainer>
                  <Item1>
                    <Img className="hello" src={Feature} />
                    <Overlay></Overlay>
                    <Intro1>
                      <Tags>Finance</Tags>
                      <Title>
                        Things you should avoid while investing to the stock
                        markets as a beginner
                      </Title>

                      <Test>
                        <Author>Techy Coder</Author>
                        <Span>.</Span>
                        <Date> 30 May 2021</Date>
                      </Test>
                    </Intro1>
                  </Item1>

                  <Item2>
                    <Img className="hello" src={Feature} />
                    <Overlay></Overlay>
                    <Intro1>
                      <Tags>Finance</Tags>
                      <Title>
                        Things you should avoid while investing to the stock
                        markets as a beginner
                      </Title>

                      <Test>
                        <Author>Techy Coder</Author>
                        <Span>.</Span>
                        <Date> 30 May 2021</Date>
                      </Test>
                    </Intro1>
                  </Item2>
                </ItemContainer>
              </Left1>
            </Sliderm>
          </Tes>
        </Left>
      </Container>
    </>
  );
}

export default Slider;
