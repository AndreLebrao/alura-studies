import React from "react";

// class component
class Botao extends React.Component {
  render() {
    const backgroundColor = "green";
    const isActive = false;
    const styles = {
        backgroundColor: isActive ? "green" : "red"
    };
    return (
      <button
        style={styles}
      >
        Botão
      </button>
    );
  }
}
export default Botao;
