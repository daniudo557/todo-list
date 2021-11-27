import "./index.css";
import Wrapper from "./components/Wrapper";
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import Welcome from "./pages/Welcome";
import TodoDetail from "./pages/TodoDetail";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Appbar />
      <Wrapper>
        <Switch>
          <Route path="/" exact>
            <Welcome />
          </Route>
          <Route path="/todo/:id">
            <TodoDetail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Wrapper>
      <Footer />
    </>
  );
};

export default App;
