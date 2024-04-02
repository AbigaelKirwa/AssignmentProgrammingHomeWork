import {createContext, useContext, useReducer, useState}from 'react'

let nextId = 3;
const initialTasks = [
    { id: 0, text: 'Viru Keskus', done: true },
    { id: 1, text: 'Old Town', done: false },
    { id: 2, text: 'Narva Mnt', done: false }
]

const TasksContext = createContext(null)
const TasksDispatchContext = createContext(null)

function TasksProvider({children}){
    const [tasks, dispatch] = useReducer(
        tasksReducer,
        initialTasks
    )

    return(
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    )
}

function useTasks(){
    return useContext(TasksContext)
}

function useTasksDispatch(){
    return useContext(TasksDispatchContext)
}

function tasksReducer(tasks, action){
    switch(action.type){
        case 'added': {
            return [...tasks, {
                id:action.id,
                text:action.text,
                done:false
            }]
        }
        case 'changed':{
            return(tasks.map((t)=>{
                if (t.id === action.task.id){
                    return action.task
                }
                else{
                    return t
                }
            })
        )}
        case 'deleted':{
            return tasks.filter(t=> t.id !== action.id)
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

//add task
function AddTask({onAddTask}){
    const [text, setText] = useState('')
    const dispatch = useTasksDispatch()
    return(
        <>
            <input 
                placeholder='Add tasks'
                value={text}
                onChange={(e)=>{setText(e.target.value)}}
            />
            <button onClick={()=>{
                setText('')
                dispatch({
                    type:'added',
                    id:nextId++,
                    text:text
                })
            }}
                
            >
                Add Button
            </button>
        </>
    )
}

//display task list
function TaskList(){
    const tasks = useTasks();
    console.log(tasks)
    return (
        <ul style={{listStyle:"none"}}>
        {tasks.map((task) => (
            <li key={task.id}>
                <Task task={task} />
            </li>
        ))}
        </ul>
    );
}

//task function
function Task({task}){
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useTasksDispatch()
    let taskContent;
    if(isEditing){
       taskContent= (
        <>
        <input
            value={task.text}
            onChange={e=>{dispatch({
                    type:'changed',
                    task:{
                        ...task,
                        text:e.target.value
                    }
                })
            }}
        />
        <button onClick={()=>{setIsEditing(false)}}>Save</button>
        </>
       );
    } else{
        taskContent=(
            <>
                {task.text}
                {console.log(task.text)}
                <button onClick={()=>setIsEditing(true)}>Edit</button>
            </>
        )
    }

    return(
        <label>
            <input
                type='checkbox'
                checked={task.done}
                onChange={(e)=>{
                    dispatch({
                        type:"changed",
                        task:{
                            ...task, 
                            done:e.target.checked
                        }
                    })
                }}
            />
            {taskContent}
            <button onClick={()=>{
                dispatch({
                    type:'deleted',
                    id:task.id
                })
            }}>Delete</button>
        </label>
    )

}



const ReducerAndContext = () => {
  return (
    <div>
        <TasksProvider>
            <h1>Day in Tallinn</h1>
            <AddTask/>
            <TaskList/>
        </TasksProvider>
    </div>
  )
}

export default ReducerAndContext