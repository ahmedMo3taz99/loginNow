import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html,
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
q,
em,
img,
small,
strong,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend {
  border: 0;
  outline: 0;
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  font-size: 62.5%;
  font-family: var(--font-plex), 'Arial', sans-serif;
    direction: rtl;


}

body {
  line-height: 1;
  font-size: 62.5%;
  background-color: #000c11;

}

ol,
ul {
  list-style: none;
}
:focus {
  outline: 0;
}
input,
textarea {
  margin: 0;
  outline: 0;
}
textarea {
  overflow: auto;
  resize: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* End Reset */

/* html5 */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
nav,
section {
  display: block;
}

*,
*::after,
*::before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


/* Default Font Styles
______________________*/
body,
input,
select,
textarea {
  font-family: "IBM Plex Sans Arabic", sans-serif;
  font-size: 1.8rem;
  line-height: 1.5;
}



/* Headings
______________________*/
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "IBM Plex Sans Arabic", sans-serif;
  margin-bottom: 1rem;
}
h1 {
  font-size: 5.4rem;
}
h2 {
  font-size: 5.4rem;
}
h3 {
  font-size: 2rem;
}



/* Links
______________________*/ 
a {
  text-decoration: none;
}
/* p, blockquote, address
______________________*/
p {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}


/* Lists
______________________*/
ol,
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style-type: none;
}



/* Roots */
:root {
  --dark-blue: #002431;
  --dark-color-light: #003a4a;
  --dark-color-lighter: #005066;
  --dark-color-dark: #001821;
  --dark-color-darker: #000c11;
  --dark-color-opacity-50: rgba(0, 36, 49, 0.5);
  --dark-color-opacity-20: rgba(0, 36, 49, 0.2);
  --dark-color-opacity-10: rgba(0, 36, 49, 0.1);


  --bright-green: #3bd22d;
  --primary-color-light: #5dd946;
  --primary-color-lighter: #7fe05f;
  --primary-color-dark: #2ba024;
  --primary-color-darker: #1f751b;
  --primary-color-opacity-50: rgba(59, 210, 45, 0.5);
  --primary-color-opacity-20: rgba(59, 210, 45, 0.2);
  --primary-color-opacity-10: rgba(59, 210, 45, 0.1);


  --white: #ffffff;
  --white-color-dark: #f5f5f5;
  --white-color-darker: #ebebeb;
  --white-color-opacity-90: rgba(255, 255, 255, 0.9);
  --white-color-opacity-70: rgba(255, 255, 255, 0.7);
  --white-color-opacity-50: rgba(255, 255, 255, 0.5);
  --white-color-opacity-20: rgba(255, 255, 255, 0.2);
  --white-color-opacity-10: rgba(255, 255, 255, 0.1);


  --grey-light: #8a9199;
  --grey-medium: #556169;
  --grey-dark: #334249;

  

}
img {
  max-width: 100%;
  display: block;
}




/* Layout 
______________________*/
.container {
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
}
.rtl {
  direction: rtl;
}
.ltr {
  direction: ltr;
}


`;

export default GlobalStyles;

export const devices = {
  phone: "(max-width: 600px)",
  tabPort: "(max-width: 900px)",
  tabLand: "(max-width: 1600px)",
  bigDesktop: "(max-width: 1950px)",
};
