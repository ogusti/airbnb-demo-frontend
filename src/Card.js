import styled from "styled-components";

export const TopInfo = styled.div`
  margin-top: 7px;
  text-align: left;
`;

export const Price = styled.div`
  display: inline-block;
  margin-right: 5px;
  font-size: 15px;
  font-weight: bold;
`;

export const Description = styled.p`
  display: inline;
  font-size: 15px;
  /*text-overflow: ellipsis;
  white-space: nowrap*/
`;

export const BottomInfo = styled.div`text-align: left;`;

export const Stars = styled.div`
  display: inline-block;
  margin-right: 5px;
  margin-top: 7px;
`;

export const Star = styled.img`margin: 7px 4px 0 0;`;

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
  margin-top: 8px;
  padding-bottom: 64px;
`;

export const Dot = styled.span``;

export const SubInfo = styled.span`font-size: 12px;`;

export const MiddleInfo = styled.div`
  text-align: left;
  margin-top: 7px;
`;

export const Subheading = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-size: 10px;
  text-align: left;
  margin-top: 12px;
  margin-bottom: 5px;
`;
