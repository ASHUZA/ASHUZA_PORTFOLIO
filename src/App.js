import LoginPicture from "./components/LoginPicture/LoginPicture";
import Header from "./pages/Header";
import Cover from "./Section/Cover";
import "./scss/main.scss";
import About from "./Section/About";
import Skills from "./Section/Skills";
import Services from "./Section/Services";
import Projets from "./Section/Projets";
import Footer from "./Section/Footer";

import Mainpage from "./pages/Mainpage";
import Plusprojets  from "./pages/Plusprojets";

import Plusservices from "./pages/Plusservices";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>

<Header/>

<Route exact path="/" component={Mainpage} />
    <Route path="/Plusprojets" component={Plusprojets} />
    <Route path="/Plusservices" component={Plusservices} />

    
    </BrowserRouter>
  );
};
export default App;
