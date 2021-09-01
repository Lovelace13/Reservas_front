import { Link, Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { LocalesGrid } from './locales/locales';
import { } from '../assets/css/App.css';

export function LandingPage(){
  return (
    <Router>  
      {/* className="App-header"  */}
      <header className="App-header">
        <img 
          src={"https://e7.pngegg.com/pngimages/196/980/png-clipart-logo-airbnb-brand-product-air-text-trademark.png"}
          width={100}
          height={100} />
        <Link to="/home">
          <h1 class="Titulo">Reservar espacios</h1>
        </Link>
      </header>
      <main>
        <ul>
          <li>Registrar</li>
          <Link to="/hoteles">
            <li>Espacios diponibles</li>
          </Link>
          <li>Reservar</li>
        </ul>
        <div>
          <Switch>
            <Route path="/hoteles">
              <LocalesGrid></LocalesGrid>
            </Route>
          </Switch>
        </div>
      </main>
    </Router>  
  );
}