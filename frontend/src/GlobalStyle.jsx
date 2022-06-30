import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Hind:wght@300&family=Montserrat:wght@100&display=swap');
  
:root {
  --title-font: "Montserrat", sans-serif;
  --police-font: "Hind" , sans-serif;
  --main-color: #183650;
  --h1-color: #E77620
}
body {
  font-family: var(--police-font);
  background-color:var(--main-color) ;
  height: 100vh;
}


`;
export default GlobalStyle;
