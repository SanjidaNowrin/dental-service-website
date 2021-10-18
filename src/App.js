import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Header from "./components/Header/Header";
import AuthProvider from "./contexts/AuthProvider";

import Reset from "./pages/Reset";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/detail/:serviceId">
              <Details></Details>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="/reset">
              <Reset></Reset>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
