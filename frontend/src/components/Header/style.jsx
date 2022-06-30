import styled from "styled-components";

export default styled.header`
  background: #153650;
  border-radius: 30px;
  width: 80%;
  height: 20vh;
  box-sizing: border-box;
  text-align: center;
  margin: 2rem auto;

  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #fff;
    padding: 2rem 15rem 0 0;
  }

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 58px;
    color: #e79759;
    text-transform: uppercase;
    font-family: var(--title-font);
    padding-left: 10rem;
  }
`;
