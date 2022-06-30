import styled from "styled-components";

export default styled.div`
  background-color: #183650;

  .backgr {
    background-color: #fff;
    height: 100vh;
    margin: 4rem;
    width: 94vw;
    border-radius: 4rem;
    box-shadow: 4px 6px 6px 6px #212121;
    display: grid;
    grid-template-columns: 0.7fr 1.3fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      "aside header header"
      "aside cardSpace cardSpace"
      "aside cardSpace cardSpace";
  }
  .aside {
    grid-area: aside;
  }
  .header {
    grid-area: header;
  }
  .cardSpace {
    grid-area: cardSpace;
  }
`;
