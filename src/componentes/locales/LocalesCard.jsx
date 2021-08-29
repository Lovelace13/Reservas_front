import estilo from "../../assets/css/Locales.module.css";
import brussellas from '../../assets/img/hoteles/brussellas.jpg';
import loja from '../../assets/img/hoteles/loja.jpg';
import murali from '../../assets/img/hoteles/murali.jpg';
import villa97 from '../../assets/img/hoteles/villa97.jpg';
import garzota from '../../assets/img/hoteles/garzota.jpg';
import ramada from '../../assets/img/hoteles/ramada.jpg';
import perla from '../../assets/img/hoteles/perla.jpg';
import versalles from '../../assets/img/hoteles/versalles.jpg';
import marin from '../../assets/img/hoteles/casamarin.jpg';
import villamaria from '../../assets/img/hoteles/villamaria.jpg';


import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Local from './localDetail'
export function LocalesCard({ hotel }) {
  var rutas = '';
  switch(hotel._id){
    case 11:
      rutas = brussellas;
      break;
    case 17:
      rutas = loja;
      break;
    case 6:
      rutas = villa97;
      break;
    case 5:
      rutas = garzota;
      break;
    case 7:
      rutas = perla;
      break;
    case 15:
      rutas = ramada;
      break;
    case 4:
      rutas = versalles;
      break;
    case 10:
      rutas = marin;
      break;
    case 8:
      rutas = villamaria;
      break;
    default:
      rutas = murali;
  }
  // const rutas = brussellas; //'../assets/img/hoteles' + hotel.path;
  //console.log(rutas);
  // const pathImg = require(ruta);
  return (
    <li className={estilo.localCard}>
      <Link to={"/local/"+hotel._id}>
        <img className={estilo.localImage}
          width={200}
          height={300}
          src={rutas} 
          alt={hotel.name} 
        />
      </Link>
      <div>
        {hotel.name}
        {hotel.description}
      </div>
    </li>
    );
}
