import React, { Component } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import overviewPhoto from "./overviewPhoto.jpg";
import save from "./save.svg";
import share from "./share.svg";
import mobileSave from "./mobileSave.svg";
import mobileShare from "./mobileShare.svg";

export const SectionUnderHeader = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${overviewPhoto});
  background-position: 50%;
  background-size: cover;
  width: 100%;
  height: 290px;
  padding-top: 12px;
  padding-bottom: 16px;

  @media only screen and (min-width: 1100px) {
    height: 440px;
  }

  @media only screen and (min-width: 768px) {
    height: 360px;
  }
`;

export const MobileButtons = styled.div`
  @media only screen and (min-width: 320px) {
    display: none;
  }
`;

export const MobileButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;

export const TopButtons = styled.div`
  margin-top: 4px;
  display: flex;
  justify-content: flex-end;
  @media only screen and (min-width: 320px) {
    margin-right: 8px;
  }
  @media only screen and (min-width: 768px) {
    margin-right: 75px;
  }
`;

export const BottomButton = styled.div`
  margin-top: 82px;
  display: block;
  margin-left: auto;
  margin-right: 8px;
  background-color: white;
  border: none;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  padding: 13px 16px;
  cursor: pointer;
  justify-content: flex-end;

  @media only screen and (min-width: 320px) {
    margin-left: 8px;
    margin-right: auto;
  }

  @media only screen and (min-width: 768px) {
    margin-left: 81px;
    margin-right: auto;
  }
`;

export const SocialButton = styled.button`
  background-color: white;
  display: none;
  align-items: center;
  justify-content: space-between;
  border: none;
  box-shadow: 0px 2px 4px rgba(72, 72, 72, 0.08);
  border-radius: 4px;
  padding: 13px 16px;
  cursor: pointer;
  margin-left: 16px;

  @media only screen and (min-width: 320px) {
    display: flex;
  }

  &:last-child {
    margin-left: 16px;
  }
`;

export const Img = styled.img`
  @media only screen and (min-width: 320px) {
    margin-right: 12px;
  }
`;

export const Paragraph = styled.p`
  margin: 0px;
  font-family: CircularAir-Book, sans-serif;
  font-weight: bold;
`;

export default function() {
  return (
    <SectionUnderHeader>
      <TopButtons>
        <SocialButton>
          <Img src={save} />
          <Paragraph>Save</Paragraph>
        </SocialButton>
        <SocialButton>
          <Img src={share} />
          <Paragraph>Share</Paragraph>
        </SocialButton>
        <MobileButtons>
          <MobileButton>
            <Img src={mobileShare} />
          </MobileButton>
          <MobileButton>
            <Img src={mobileSave} />
          </MobileButton>
        </MobileButtons>
      </TopButtons>
      <BottomButton>
        <Paragraph>View Photos</Paragraph>
      </BottomButton>
    </SectionUnderHeader>
  );
}
