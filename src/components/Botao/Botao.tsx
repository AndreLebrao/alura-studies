import React from "react";
import style from "./Botao.module.scss";
// class component
//props as attribute
// class Botao extends React.Component<{ texto: string }> {
//   render() {
//     return <button className={style.botao}>{this.props.texto}</button>;
//   }
// }

// class component
//props as children
class Botao extends React.Component<{
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?:()=>void
}> {
  render() {
    const { type = "button", onClick } = this.props;
    return (
      <button onClick={onClick} type={type} className={style.botao}>
        {this.props.children}
      </button>
    );
  }
}
export default Botao;
