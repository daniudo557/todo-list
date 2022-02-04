import { BrowserRouter } from "react-router-dom";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";
import Router from "./components/Router/Router";
import Wrapper from "./components/Wrapper";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Appbar />
      <Wrapper>
        <Router />
      </Wrapper>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
