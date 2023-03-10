import React, { useState } from "react";
import { Task } from "../../types/Task";
import { useUpdateDoneTask, useUpdateTask, useDeleteTask } from "../../queries/TaskQuery";
import { toast } from "react-toastify";

type Props = {
    task: Task
}

const TaskItem: React.VFC<Props> = ({ task }) => {

    const updateDoneTask = useUpdateDoneTask();
    const updateTask = useUpdateTask();

    const deleteTask = useDeleteTask();

    const [editTitle, setEditTitle] = useState<string | undefined>(undefined);

    const handleToggleEdit = () => {
        setEditTitle(task.title);
    }

    const handleOnkey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (['Escape', 'Tab'].includes(e.key)) {
            setEditTitle(undefined);
        }
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditTitle(e.target.value);
    }

    const handleUpdate = (e:any) => {
        e.preventDefault();

        if (!editTitle) {
            toast.error('タイトルを入力してください');
            return
        }

        const newTask = { ...task }
        newTask.title = editTitle;

        updateTask.mutate({
            id: task.id,
            task: newTask
        });

        setEditTitle(undefined);

    }



    const itemInput = () => {
        return (
            <>
                <form onSubmit={handleUpdate} >
                    <input
                        type="text"
                        className="input"
                        defaultValue={editTitle}
                        onKeyDown={handleOnkey}
                        onChange={handleInputChange}
                    />
                </form>
                <button className="btn" onClick={handleUpdate}>更新</button>
            </>
        )
    }

    const itemText = () => {
        return (
            <>
                <div onClick={handleToggleEdit}>
                    <span>{task.title}</span>
                    <button className="btn is-delete" onClick={(() => deleteTask.mutate(task.id))}>
                        削除
                    </button>
                </div>
            </>
        )
    }

    return (
        <li className={task.is_done ? 'done' : ''} key={task.id}>
            <label className="checkbox-label">
                <input type="checkbox" className="checkbox-input" onClick={() => updateDoneTask.mutate(task)} />
            </label>
            {editTitle === undefined ? itemText() : itemInput()}
        </li>
    )
}

export default TaskItem;