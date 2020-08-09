import React, { Fragment } from 'react'

const Formulario = () => {
    return (
        <Fragment>
            <h2>Crear cita</h2>

            <form action="">
                <label htmlFor="">Nombre Mascota</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre de Mascota"
                />
                <label htmlFor="">Nombre Dueño</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre del Dueño de Mascota"
                />
                <label htmlFor="">Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                />
                <label htmlFor="">Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                />
                <label htmlFor="">Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agregar Cita
                </button>
            </form>
        </Fragment>
    )
}

export default Formulario
