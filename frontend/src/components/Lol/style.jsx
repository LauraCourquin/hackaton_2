import styled from "styled-components";

export default styled.article`
  .actor {
    display: inline-block;
    position: relative;
    width: 400px;
    min-width: 400px;
    height: 400px;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
    margin: 30px;
  }

  .actor-profile-img {
    height: 70%;
  }

  .actor-description-bk {
    background-image: linear-gradient(0deg, #3f5efb, #fc466b);
    border-radius: 30px;
    position: absolute;
    top: 55%;
    left: -5px;
    height: 65%;
    width: 108%;
    transform: skew(19deg, -9deg);
  }

  .second .actor-description-bk {
    background-image: linear-gradient(-20deg, #153650, #327db6);
    box-shadow: 0px 0px 24px 14px rgba(0, 0, 0, 0.81);
  }

  .actor-logo {
    height: 80px;
    width: 80px;
    border-radius: 20px;
    background-color: #fff;
    position: absolute;
    bottom: 30%;
    left: 30px;
    overflow: hidden;
    box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.7);
  }

  .actor-logo img {
    height: 100%;
  }
  .available {
    width: 1rem;
    height: 1rem;
    border: 1px solid black;
    border-radius: 100%;
    display: block;
    margin-bottom: 0.5rem;
    position: absolute;
    top: 3%;
    left: 90%;

    &.ava1 {
      background-color: rgb(0, 254, 0);
    }
    &.ava0 {
      background-color: rgb(254, 0, 0);
    }
  }
  span {
    font-size: 0;
  }
  .actor-description {
    position: absolute;
    color: #fff;
    font-weight: 900;
    left: 150px;
    bottom: 26%;
    height: 5%;
  }

  .actor-btn {
    position: absolute;
    color: #fff;
    right: 30px;
    bottom: 10%;
    padding: 10px 20px;
    border: 1px solid #fff;
  }

  .actor-date {
    position: absolute;
    color: #fff;
    left: 30px;
    bottom: 10%;
  }
  .available {
    position: absolute;
  }
  /* END CARD DESIGN */
  ul {
    display: flex;
    width: 1rem;

    li {
      list-style: none;
      text-align: center;
      padding: 0.4rem;
      font-size: 0.8em;

      img {
        width: 3rem;
        height: 3rem;
        border-radius: 100%;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
          rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
          rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      }
    }
  }
`;
