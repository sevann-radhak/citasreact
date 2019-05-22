import React, { Component } from 'react';
import Header from './Componentes/Header';
import AgregarCita from './Componentes/AgregarCita';
import ListaCitas from './Componentes/ListaCitas';

class App extends Component {

  state = {
    citas: []
  }

  componentDidMount() {
    const citasLS = localStorage.getItem('citas');

    if (citasLS) {
      this.setState({ citas: JSON.parse(citasLS) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem(
      'citas',
      JSON.stringify(this.state.citas)
    )
  }

  crearCita = (nuevaCita) => {
    // Tomar copia del state y le pasamos la nueva cita
    const citas = [...this.state.citas, nuevaCita];

    // Cambiar el state
    this.setState({ citas });
  }

  borrarCita = (id) => {
    console.log(id);
    // Leer el state
    const citasActuales = [...this.state.citas];

    // Borrar el registro
    const citas = citasActuales.filter(cita => cita.id !== id);

    // Cambiar el state
    this.setState({ citas });
  }

  render() {
    return (
      <div className="App">
        <Header
          titulo={'Administrador de Pacientes veterinaria'} />
        <div className="row margenes">
          <div className="col-md-6">
            <AgregarCita
              crearCita={this.crearCita} />
          </div>
          <div className="col-md-6">
            <ListaCitas
              citas={this.state.citas}
              borrarCita={this.borrarCita} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
