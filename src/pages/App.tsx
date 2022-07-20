import React, { useState } from "react";
import Formulario from "../components/Formulario/Formulario";
import Lista from "../components/Lista/Lista";
import style from "./App.module.scss";
import Cronometro from "../components/Cronometro/Cronometro";
import { ITarefa } from '../types/tarefas';

function App() {
  const [tarefas, setTarefas] = useState<Array<ITarefa>>([]);
  const [selecionado, setSelecionado] = useState<ITarefa>();
  function selecionaTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa=>({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));

  }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista 
      tarefas={tarefas}
      selecionaTarefa={selecionaTarefa}
       />
      <Cronometro selecionado={selecionado}/>
    </div>
  );
}

export default App;
