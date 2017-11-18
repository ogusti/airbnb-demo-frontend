import styled from "styled-components";

export const TopInfo = styled.div`text-align: left;`;

export const Price = styled.div`
  display: inline-block;
  margin-right: 8px;
  font-size: 15px;
  font-weight: bold;
`;

export const Description = styled.p`
  display: inline;
  font-size: 15px;
  font-weight: bold;

  /*text-overflow: ellipsis;
  white-space: nowrap*/
`;

export const About = styled.p`
  display: inline;
  font-size: 15px;
  font-family: CircularAir-Light, sans-serif;
  /*text-overflow: ellipsis;
  white-space: nowrap*/
`;

export const BottomInfo = styled.div`
  text-align: left;
  margin-top: 6px;
`;

export const Stars = styled.div`
  display: inline-block;
  margin-right: 5px;
`;

export const Star = styled.img`margin-right: 4px;`;

export const Reviews = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

export const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const Card = styled.div`margin-right: 17px;`;

export const Paragraph = styled.p`
  font-weight: bold;
  margin-left: 24px;
  @media only screen and (max-width: 400px) {
    margin-left: 12px;
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;
export const Categories = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.h3`
  font-size: 15px;
  font-weight: bold;
  text-align: left;
  margin-top: 5px;
  padding-bottom: 64px;
`;

export const Dot = styled.span``;

export const SubInfo = styled.span`font-size: 12px;`;

export const MiddleInfo = styled.div`
  text-align: left;
  font-family: CircularAir-Light, sans-serif;
`;

export const Subheading = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 10px;
  text-align: left;
  margin-top: 5px;
  margin-bottom: 0px;
`;
