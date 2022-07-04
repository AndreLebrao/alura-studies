import React, { useState } from "react";
import Formulario from "../components/Formulario/Formulario";
import Lista from "../components/Lista/Lista";
import style from "./App.module.scss";
import Cronometro from "../components/Cronometro/Cronometro";
import { ITarefa } from '../types/tarefas';

function App() {
  const [tarefas, setTarefas] = useState<Array<ITarefa>>([]);

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Lista tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
