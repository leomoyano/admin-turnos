import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  //Citas en LocalStorage
  let citasIniciales = JSON.parse(localStorage.getItem('Citas'));
  if (!citasIniciales) {
    citasIniciales = [];
  }

  //Array de Citas
  const [citas, setCitas] = useState(citasIniciales);

  //UseEffect para realizar ciertas cosas cuando el State cambia
  useEffect(() => {
    if(localStorage){
      localStorage.setItem('citas', JSON.stringify(citas))
    }else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas])

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
