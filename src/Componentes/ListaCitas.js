import React, { Component } from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

class ListaCitas extends Component {
    render() {
        const citas = this.props.citas;

        //console.log(citas);
        // Averiguamos cuantas citas hay en el arreglo
        const mensaje = Object.keys(citas).length === 0 ? 'No hay Citas' : 'Administrador de Citas';

        return (
            <div className="card card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{mensaje}</h2>

                    <div className="lista-citas">
                        {Object.keys(this.props.citas).map(cita => (
                            <Cita
                                key={cita}
                                info={this.props.citas[cita]}
                                borrarCita={this.props.borrarCita}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

ListaCitas.propTypes = {
    citas: PropTypes.array.isRequired,
    borrarCita: PropTypes.func.isRequired
}

export default ListaCitas;
