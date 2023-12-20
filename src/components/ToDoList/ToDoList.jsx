import './ToDoList.css'
import { useState } from 'react';
import { FaTrash } from "react-icons/fa";

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleAddTask = (event) => {
        event.preventDefault();
        if (newTask.trim() !== '') {
            setTasks([...tasks, { text: newTask, concluida: false }]);
            setNewTask('');
            alert("Tarefa cadastrada com sucesso!") 
        }else{
            alert("O campo nome não foi preenchido corretamente") 
        }
    };

    const handleToggleTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].concluida = !updatedTasks[index].concluida;
        setTasks(updatedTasks);
    };

    const handleDeleteTask = (index) => {
        if (!tasks[index].concluida) {
            const updatedTasks = [...tasks];
            updatedTasks.splice(index, 1);
            setTasks(updatedTasks);
        }
        alert("Tarefa excluída com sucesso!")
    };

    return (
        <>
            <section className='section-todolist'>

                <div className="content container">
                    <form className='input-button'>
                        <input value={newTask} onChange={handleInputChange} required placeholder='Escreva o que deseja fazer...' type="text" />
                        <button onClick={handleAddTask}>Cadastrar tarefa</button>
                    </form>

                    <div className='items'>
                        {tasks.map((task, index) => (
                            <div key={index} className={`task ${task.concluida ? 'concluida' : ''}`}>
                                <input
                                    type='checkbox'
                                    checked={task.concluida}
                                    onChange={() => handleToggleTask(index)}
                                />
                                <span className='titulo'>{task.text}</span>
                                {!task.concluida && (
                                    <FaTrash className='delete-icon' onClick={() => handleDeleteTask(index)}/>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    );
}
export default ToDoList;