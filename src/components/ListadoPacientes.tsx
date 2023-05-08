import { Key, useEffect } from 'react';
import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}: {pacientes:any,setPaciente:any,eliminarPaciente:any}) => {


  useEffect( () => {
    if (pacientes.length > 0 ){
      console.log('Nuevo paciente')
    } 
  }, [pacientes]);

    return (
      <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
        <>
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="mt-5 text-xl mb-10 text-center">
        Administra tus {''}
        <span className="text-indigo-600 font-bold text-xl">Pacientes y Citas</span>
      </p>

      { pacientes.map( (paciente: { id: Key | null | undefined; }) => (
        
        <Paciente 
          key={paciente.id}
          paciente={paciente}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />

      ))}

</>


      ) : (
          <>
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="mt-5 text-xl mb-10 text-center">
              Comienza agregando pacientes {''}
              <span className="text-indigo-600 font-bold text-xl">y aparecerán en este lugar</span>
            </p>
          
          
          </>
      )}


      </div>

      
    )
  }
  
  export default ListadoPacientes