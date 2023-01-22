import React, { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { stat } from "original-fs";

// 型の指定
type Task = {
    id: number
    title: string
    is_done: boolean
    created_at: Date
    updated_at: Date
}

const TaskPage: React.VFC = () => {

    /*

    const [tasks, setTasks] = useState<Task[]>([]);
    // console.log(tasks);
    // return false;
    const getTasks = async () => {
        // <Task[]>取得したデータに型の指定
        // ｛｝　dataのみ取得できるようにする
        const { data } = await axios.get<Task[]>('api/tasks');
        setTasks(data)

        // const todo = fetch('http://127.0.0.1:8000/api/tasks');
        // todo.then((res) => {
        //     return res.json();
        // }).then((data) => {
        //     console.log(data)
        // });
    }

    // ページが表示された際に実行
    useEffect(() => {
        getTasks();
    },[setTasks]);

    */

    const {data:tasks , status} = useQuery('tasks', async() => {
        const { data } = await axios.get<Task[]>('api/tasks');
        return data;
    });

    console.log(status);

    if(status === 'loading') {
        return <div className="loader" />
    } else if(status === 'error') {
        return <div className="align-center">データの読み込みに失敗しました</div>
    } else if(!tasks || tasks.length < 1 ) {
        return <div className="align-center">登録されたデータがありません。</div>
    }
    
    return (
        <>
            <form className="input-form">
                <div className="inner">
                    <input type="text" className="input" placeholder="TODOを入力してください。" defaultValue="" />
                    <button className="btn is-primary">追加</button>
                </div>
            </form>
            <div className="inner">
                <ul className="task-list">
                    { tasks.map(task => (
                        <li key={task.id}>
                            <label className="checkbox-label">
                                <input type="checkbox" className="checkbox-input" />
                            </label>
                            <div><span>{ task.title }</span></div>
                            <button className="btn is-delete">削除</button>
                        </li>
                    )) }
                    <li>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" />
                        </label>
                        <div><span>新しいTODO</span></div>
                        <button className="btn is-delete">削除</button>
                    </li>
                    <li>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" />
                        </label>
                        <form><input type="text" className="input" defaultValue="編集中のTODO" /></form>
                        <button className="btn">更新</button>
                    </li>
                    <li className="done">
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" />
                        </label>
                        <div><span>実行したTODO</span></div>
                        <button className="btn is-delete">削除</button>
                    </li>
                    <li>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" />
                        </label>
                        <div><span>ゴミ捨て</span></div>
                        <button className="btn is-delete">削除</button>
                    </li>
                    <li>
                        <label className="checkbox-label">
                            <input type="checkbox" className="checkbox-input" />
                        </label>
                        <div><span>掃除</span></div>
                        <button className="btn is-delete">削除</button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default TaskPage