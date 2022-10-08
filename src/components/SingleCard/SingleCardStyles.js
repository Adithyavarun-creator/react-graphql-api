import styled from "styled-components";

export const SingleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 20px;
  column-gap: 0;

  .character-name {
    font-size: 29px;
    text-align: center;
    color: red;
  }

  .single-image {
    object-fit: cover;
    height: 500px;
    width: 100%;
  }
  .content-box {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .character-sub-name {
    font-size: 27px;
  }
  .character-sub-bold {
    font-size: 28px;
    font-weight: bolder;
    color: green;
  }
`;
