import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@font-face {
  font-family: 'SFProDisplay';
  src: local('SFProDisplay'), url(../fonts/SFProDisplay.ttf) format('truetype');
}

#root {
  width: 100%;
  height: 100%;
}

* {
  margin: 0;
  box-sizing: border-box;
  outline: 0;
  font-family: 'SFProDisplay', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  background: #fffdfb;
  -ms-overflow-style: none;
  scrollbar-width: none;
  :-webkit-scrollbar {
    display: none;
  }
  button {
    cursor: pointer;
  }

  .pagination {
  width: 80%;
  height: 40px;
  list-style: none;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  padding: 0;
}

.pagination a {
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #697488;
  border-radius: 2px;
  
}


.page-active a{
  background: #02537a;
  color: #FFFFFF;
}

.next-page path:hover {
  fill: #1EA4CE;
}
.prev-page path:hover {
  fill: #1EA4CE;
}

}
`;
