// import logo from '../assets/img/logo.svg';
import { } from '../assets/css/App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LandingPage } from './landingPage';
import Local from './locales/localDetail'

//import Login from './Login';

function App() {
  return (
    //className="App"
    <Router>    
      {/* className="App-header"  */}
      <header className="App-header">
        <img 
          src={"https://e7.pngegg.com/pngimages/196/980/png-clipart-logo-airbnb-brand-product-air-text-trademark.png"}
          width={100}
          height={100} />
        <Link to="/">
          <h1 class="Titulo">Reservar espacios</h1>
        </Link>
      </header>
      <main>
        {/* <LocalesGrid></LocalesGrid> */}
        <Switch>
          <Route path="/">
            <LandingPage></LandingPage>
          </Route>
          <Route path="/local/:localId">
            <Local local=":localId"></Local>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
