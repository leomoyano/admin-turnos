import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  //Array de Citas
  const [citas, setCitas] = useState([]);

  //Funcion para tomar citas actuales y agregar nueva
  const crearCita = cita => {
    setCitas([
      ...citas,
      cita
    ]);
  }

  //Funcion que elimina una cita por su ID
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    setCitas(nuevasCitas);
  }

  //Mensaje condicional
  const titulo = citas.length ? "Administra tus citas" : "No hay citas";

  return (
    <Fragment>
      <div className="App">
        <h1>Administrador de Pacientes</h1>
        <div className="container">
          <div className="row">
            <div className="one-half column">
              <Formulario 
                crearCita={crearCita}
              />
            </div>
            <div className="one-half column">
              <h2>{titulo}</h2>
              {citas.map(cita => (
                <Cita 
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
