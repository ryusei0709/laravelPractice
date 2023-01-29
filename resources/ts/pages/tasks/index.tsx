import React from "react";
// export defaultの場合{}外す
import TaskInput  from "./components/Taskinput";
import TaskList  from "./components/Tasklist" 
// import TaskList


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

    return (
        <>
            <TaskInput />
            <TaskList />
        </>
    )
}

export default TaskPage