import React from "react";
import styled from "styled-components";
import i1 from "../img/insta/insta-1.jpg";

import i2 from "../img/insta/insta-2.jpg";

import i3 from "../img/insta/insta-3.jpg";

import i4 from "../img/insta/insta-4.jpg";

import i5 from "../img/insta/insta-5.jpg";

import i6 from "../img/insta/insta-6.jpg";

const Wrapper = styled.div`
  margin: 100px 60px 0;
  position: relative;
`;
const Con = styled.div``;
const Conm = styled.div`
  display: flex;
  gap: 6px;
`;
const Conimg = styled.img`
  object-fit: cover;
  width: 196px;
  border-radius: 10px;
`;

const Til = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Tilp = styled.a`
  position: absolute;
  top: 40%;
  margin-top: 7px;
  padding: 10px 60px;
  background: #ad1deb;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  font-family: Roboto;
`;

const Yy = styled.hr`
  margin-top: 30px;
  opacity: 0.5;
  margin-bottom: 20px;
`;

function Insta() {
  return (
    <>
      <Wrapper>
        <Conm>
          <Con>
            <Conimg src={i1} />
          </Con>

          <Con>
            <Conimg src={i2} />
          </Con>

          <Con>
            <Conimg src={i3} />
          </Con>

          <Con>
            <Conimg src={i4} />
          </Con>

          <Con>
            <Conimg src={i5} />
          </Con>

          <Con>
            <Conimg src={i6} />
          </Con>
        </Conm>

        <Til>
          <Tilp>@idealab on instagram</Tilp>{" "}
        </Til>

        <Yy />
      </Wrapper>
    </>
  );
}

export default Insta;
