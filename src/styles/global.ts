import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0
}
body {
  background: linear-gradient(to right, #1e3a8a, #2563eb 75%);
  color: #fff;
  -webkit-font-smoothing: antialiased;
}
body, input, button {
  font-family: 'Poppins', serif;
  font-size: 16px;
}
`;
