import { Link, Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { LocalesGrid } from './locales/locales';

export function LandingPage(){
  return (
    <Router>  
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
    </Router>  
  );
}