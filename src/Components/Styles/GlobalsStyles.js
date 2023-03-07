import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Variables */

:root {

--green: #33c789;  
--green-opacity: rgba(51, 199, 137, 0.25);  
--blue: #08d4e2;  
--green-opacity: hsla(155, 59%, 49%, 0.25);
--red: hsl(2, 100%, 66%);  
--text-white: #dedede; 
--black: #22262a;
--dark-gray: hsl(210, 9%, 19%);
--gray: #3e4246;

--light-gray: hsl(0, 0%, 85%);
--border: 0.2rem solid #3E4246;
--tr-am: 0.2s ease;



--text-xs: 1.2rem;
--text-sm: 1.6rem;
--text-md: 1.8rem;
--text-lg: 3.2rem;
--text-mlg: 4.6rem;
--text-xlg: 5.6rem;
}



/* Reset margins */

body,
h1,
h2,
h3,
h4,
p,
figure,
picture {
  margin: 0;
}

/* Body set up */

html {
  font-size: 62.5%;

 
}

body {
  line-height: 1.5;
  letter-spacing: 1px;
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  
}




/* Forms */

input,
button,
textarea,
select,
option {
  font: inherit;
}

h1,h2,h3,h4,h5 {
  color: var(--text-white);
}





li {
  list-style: none;
}

a {
  text-decoration: none;
  font-size: var(--text-sm);
  color: var(--text-white);
}

p {
  font-size: var(--text-sm);
  color: var(--text-white);
}

`;
