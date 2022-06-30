import styled from "styled-components";

export default styled.article`
  .myCard {
    width: 20vw;
    height: 60vh;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;
  }
  .imgCard {
    height: 35%;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 1rem;
  }
  img {
    height: 15vh;
    width: 15vh;
    border: 2px solid black;
    border-radius: 100%;
  }
  .available {
    width: 1rem;
    height: 1rem;
    border: 1px solid black;
    border-radius: 100%;
    background-color: red;
    display: block;
    position: absolute;
    bottom: 0;
    margin-bottom: 2.3rem;
  }
  .Cardinfo {
    h3,
    h4 {
      margin: 0;
    }
  }
  .mail {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20%;
  }
  .info {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
  }
  ul {
  }
  li {
    list-style: none;
    text-align: center;
    padding: 0.7rem;

    img {
      width: 3rem;
      height: 3rem;
    }
  }
  @media screen and (max-width: 700px) {
    .myCard {
      width: 80vw;
      height: 70vh;
    }
  }
`;
