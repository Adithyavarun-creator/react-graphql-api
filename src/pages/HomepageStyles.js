import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  row-gap: 50px;
  column-gap: 60px;
  align-items: center;
  justify-content: center;

  .home-card {
    background-color: grey;
    border-radius: 18px;
    cursor: pointer;
  }

  .home-image {
    object-fit: contain;
    height: 200px;
    width: 100%;
    border-radius: 10px;
  }

  h2 {
    font-size: 22px;
    font-weight: bold;
    display: flex;
    justify-content: center;
  }
`;
