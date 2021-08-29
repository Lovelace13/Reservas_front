import estilo from "../../assets/css/Locales.module.css";


export default function localDetail({local}){
  console.log(local);
  return (
    <div className={estilo.detailsContainer}>
      <div>
        <h1>{local}</h1>
      </div>
    </div>);
}