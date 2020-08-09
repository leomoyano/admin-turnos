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
    const handleChange = e => {
        setCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }

    //Extraer los valores
    const {mascota, propietario, fecha, hora, sintomas} = cita;

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
                    value={mascota}
                />
                <label htmlFor="">Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre del Dueño de Mascota"
                    onChange={handleChange}
                    value={propietario}
                />
                <label htmlFor="">Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />
                <label htmlFor="">Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />
                <label htmlFor="">Sintomas</label>
                <textarea
                    className="u-full-width"
                    name="sintomas"
                    onChange={handleChange}
                    value={sintomas}
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
