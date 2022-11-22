import React from 'react';
import styled from 'styled-components';
const CustomCard = styled.div`
  background-color: aliceblue;
  position: relative;
`;
const CardImageWrapper = styled.div`
  height: 400px;
  border-radius: 8px;
`;
const CardImg = styled.img`
  width: 100%;
  display: block;
  height: 100%;
  border-radius: inherit;
`;
const CardHeader = styled.h2`
  color: blue;
  ${(props) => props.danger || `red`};
`;
// Nếu như header của card có prop tên là danger thì mình sẽ có style color : red
// Cách sử dụng global style trong styled component : vào file index.js và sau đó dùng syntax
// const GlobalStyles = createGlobalStyle`
// @import url ( *linkFont)
// body {
// font-family : ....
//}
// `
const Card = ({ props }) => {
  return (
    <div>
      <CardHeader danger>This is header</CardHeader>
    </div>
  );
};

export default Card;
