import Botao from "../Botao/Botao";
import Relogio from './Relogio/Relogio';
import style from "./Cronometro.module.scss"

export default function Cronometro() {
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>
        Escolha um card e inicie o cronometro
        <div className={style.relogioWrapper}><Relogio/></div>
        <Botao> Começar </Botao>
      </p>
    </div>
  );
}
