import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getTasks, reset } from '../features/tasks/taskSlice'
import TaskItem from './TaskItem'
import Spinner from './Spinner'
import { useNavigate } from 'react-router-dom'

const TaskList = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { tasks, isLoading, isError, message } = useSelector(state => state.tasks)

    useEffect(() => {
        if (isError) console.log(message)
        dispatch(getTasks())
        return () => dispatch(reset())
    }, [navigate, isError, message, dispatch])

    return (
        isLoading ? <Spinner /> : (
            <section className='content'>
                {tasks.length === undefined && (
                    <div className='tasks'>
                        {tasks.tasks.map(task => <TaskItem key={task._id} task={task} />)}
                    </div>
                )}
                
                {console.log(tasks.length)}
            </section>
        )
    )
}

export default TaskList