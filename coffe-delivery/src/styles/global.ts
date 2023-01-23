import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Roboto', sans-serif;
}
html,
body{ 
    background:var(--background);
    color: var(--white);
    /* height:calc(100vh - 86px); */

}


header{
    font-family: 'Baloo 2', sans-serif;
}


#root{
    height:100vh;

    --yellow-dark: #C47F17;
    --yellow: #DBAC2C;
    --yellow-light:#F1E9C9;
    --purple-dark:#4B2995;
    --purple:#8047F8;
    --purple-light:#EBE5F9;
    --base-title:#272221;
    --base-subtitle:#403937;
    --base-text:#574F4D;
    --base-label:#8D8686;
    --base-hover:#D7D5D5;
    --base-button:#E6E5E5;
    --base-input:#EDEDED;
    --base-card:#F3F2F2;
    --background:#FAFAFA;
    --white:#FFFFFF;
}

body,input,button{
    font-family: 'Roboto', sans-serif;
    font: 16px;
    font-weight: normal;
}

h1, h2, h3, h4, h5, h6{
    font-weight: 700;
    font-family: 'Baloo 2';

}

button{
    cursor: pointer
}

.blankContainer{
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
}

`;
