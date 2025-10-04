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

  return (
    <>
    <h1>Mi lista de tareas</h1>
    <ol>
        {renderTasks.map((task) => (
          <li>{task.task}</li>
        ))}
    </ol>
    </>
  )
}

export default App
