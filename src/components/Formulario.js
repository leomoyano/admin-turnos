import React, { Fragment, useState } from 'react'

const Formulario = () => {

    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''

    })


    //Para actualizar estado de inputs
    const handleChange = () => {
        console.log('Escribiendo...');
    }

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
                    onChange={handleChange}
                />
                <label htmlFor="">Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del Dueño de Mascota"
                    onChange={handleChange}
                />
                <label htmlFor="">Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                />
                <label htmlFor="">Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                />
                <label htmlFor="">Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={handleChange}
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
