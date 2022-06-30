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
h1,h2,h3,h4,h5,h6{
  font-weight: bold;
}
h1{
  font-size:1.4em;
}
h2{
  font-size:1.3em;
}
h3{
  font-size:1.2em;
}
h4{
  font-size:1em;
}
h5{
  font-size:20em;
}


`;
export default GlobalStyle;
