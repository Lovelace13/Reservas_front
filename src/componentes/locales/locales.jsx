import locales from '../hoteles.json';
import { LocalesCard } from './LocalesCard';
import estilo from "../../assets/css/Locales.module.css";

export function LocalesGrid() {
  return (
    <ul className={estilo.localesGrid}>
      {locales.map((local) => (
        <LocalesCard key={local._id} hotel={local}></LocalesCard>
      ))}
    </ul>
  );
}