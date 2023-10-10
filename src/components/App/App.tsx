import GlobalStyle from "../../styles/global";
import { Router } from "react-router";
import Routes from "../../routes";

import { createBrowserHistory } from "history";
import Navbar from "../Navbar";
import { Container } from "./styles";

export default function App() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Container>
        <Navbar />
        <Routes />
      </Container>
      <GlobalStyle />
    </Router>
  );
}
