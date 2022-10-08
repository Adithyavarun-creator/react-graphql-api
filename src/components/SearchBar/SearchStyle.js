import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-direction: column;

  .input-div {
    display: flex;
    flex-direction: row;
    row-gap: 1px;
    align-items: center;
  }

  .input {
    height: 50px;
    border-radius: 10px;
    border: 1px solid black;
    width: 100%;
  }

  .btn {
    padding: 10px 24px;
    text-align: center;
    font-size: 16px;
    font-weight: bolder;
    background-color: black;
    color: white;
    border-radius: 8px;
  }

  ul {
    list-style: disc;
  }
  li {
    font-size: 25px;
    font-weight: bold;
  }

  .result-title {
    font-size: 29px;
    color: green;
    text-align: center;
    font-weight: bold;
  }

  .no-data {
    text-align: center;
    font-size: 20px;
    color: red;
  }
`;
