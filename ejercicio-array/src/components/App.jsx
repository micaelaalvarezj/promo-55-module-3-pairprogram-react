import 'react'
import '../styles/app.css'
import { useState } from "react";


const App = () => {

  const tasks = [
    { task: "Comprar harina, jamón y pan rallado", completed: true },
    { task: "Hacer croquetas ricas", completed: true },
    { task: "Ir a la puerta de un gimnasio", completed: false },
    {
      task: "Comerme las croquetas mirando a la gente que entra en el gimnasio",
      completed: false,
    },
];

  const [renderTasks, setRenderTasks] = useState (tasks)
  const [isMacarronesChecked, setIsMacarronesChecked] = useState (false)
  const [isPatatasChecked, setIsPatatasChecked] = useState (false)
  const [isNuecesChecked, setIsNuecesChecked] = useState (false)
  const [isHuevosChecked, setIsHuevosChecked] = useState (false)
  const [isCebollaChecked, setIsCebollaChecked] = useState (false)
  const [isCervezaChecked, setIsCervezaChecked] = useState (false)


const handleMacarronesIsChecked = (ev) => {
  setIsMacarronesChecked(ev.target.checked);
  }

const handlePatatasIsChecked = (ev) => {
  setIsPatatasChecked(ev.target.checked);
  }

const handleNuecesIsChecked = (ev) => {
  setIsNuecesChecked(ev.target.checked);
  }

const handleHuevosIsChecked = (ev) => {
  setIsHuevosChecked(ev.target.checked);
  }

const handleCebollaIsChecked = (ev) => {
  setIsCebollaChecked(ev.target.checked);
  }

const handleCervezaIsChecked = (ev) => {
  setIsCervezaChecked(ev.target.checked);
  }
 
  return (
    <>
    <h1>Mi lista de tareas</h1>
    <ol>
        {renderTasks.map((task) => (
          <li className={task.completed ? "linetrough" : ""}>{task.task}</li>
        ))}
    </ol>
    <h2>Selecciona los ingredientes de la tortilla de patatas</h2>
    <form>
      <label htmlFor='Macarrones'>Macarrones</label>
      <input name="Macarrones" id="Macarrones" type="checkbox" onChange={handleMacarronesIsChecked} checked={isMacarronesChecked} />
      <label htmlFor='Patatas'>Patatas</label>
      <input name="Patatas" id="Patatas" type="checkbox" onChange={handlePatatasIsChecked} checked={isPatatasChecked} />
      <label htmlFor='Nueces'>Nueces</label>
      <input name="Nueces"id="Nueces" type="checkbox" onChange={handleNuecesIsChecked} checked={isNuecesChecked} />
      <label htmlFor='Huevos'>Huevos</label>
      <input name="Huevos" id="Huevos" type="checkbox" onChange={handleHuevosIsChecked} checked={isHuevosChecked} />
      <label htmlFor='Cebolla'>Cebolla</label>
      <input name="Cebolla" id="Cebolla" type="checkbox" onChange={handleCebollaIsChecked} checked={isCebollaChecked} />
      <label htmlFor='Cerveza'>Cerveza</label>
      <input name="Cerveza" id="Cerveza" type="checkbox" onChange={handleCervezaIsChecked} checked={isCervezaChecked} />
    </form>

    <p>{isPatatasChecked === true && isHuevosChecked === true && isCebollaChecked === true ? "Eres una persona Concebollista": "Eres un robot sin paladar"}</p>
    </>
  )
}

export default App
