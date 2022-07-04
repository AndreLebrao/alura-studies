import { ITarefa } from "../../types/tarefas";
import Item from "./Item/Item";

import style from "./Lista.module.scss";

function Lista({ tarefas }: { tarefas: Array<ITarefa> }) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
