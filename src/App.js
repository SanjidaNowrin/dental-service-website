import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Header from "./components/Header/Header";
import AuthProvider from "./contexts/AuthProvider";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import PrivateRoute from "./route/PrivateRoute";
import About from "./pages/About";
import Dentists from "./pages/Dentist/Dentists";
import Contact from "./pages/Contact/Contact";

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
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/dentist">
              <Dentists></Dentists>
            </Route>
            <PrivateRoute path="/detail/:serviceId">
              <Details></Details>
            </PrivateRoute>

            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
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
