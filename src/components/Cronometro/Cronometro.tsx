import Botao from "../Botao/Botao";
import Relogio from "./Relogio/Relogio";
import style from "./Cronometro.module.scss";
import { ITarefa } from "../../types/tarefas";
import { useEffect, useState } from "react";
import { tempoParaSegundos } from "../common/utils/time";

interface props {
  selecionado: ITarefa | undefined;
}

export default function Cronometro({ selecionado }: props) {
  const [tempo, setTempo] = useState<number>();
  useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado]);
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>
        Escolha um card e inicie o cronometro
        <div className={style.relogioWrapper}>
          <Relogio tempo={tempo}/>
        </div>
        <Botao> Começar </Botao>
      </p>
    </div>
  );
}
