import * as api from "../../api/TaskAPI";
import { useQuery,useMutation,useQueryClient } from "react-query";
import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";

const useTask = () => {
    return useQuery('tasks', async () => api.getTasks());    
}

const useUpdateDoneTask = () => {
    const queryClient = useQueryClient();

    return useMutation(api.updateDoneTask,{
        onSuccess: () => {
            queryClient.invalidateQueries('tasks')
        },
        onError: () => {
            toast.error('更新に失敗しました。')
        }
    });
}

const useCreateTask = () => {
    const queryClient = useQueryClient();
    return useMutation(api.createTask,{
        onSuccess: () => {
            queryClient.invalidateQueries('tasks'),
            toast.success('登録に成功しました。')
        },
        // 「?.」 オブジェクトのプロパティが存在しなくてもエラーを起こさないアクセス方法
        onError: (error: AxiosError) => {
            // console.log(error.response?.data.errors);
            if(error.response?.data.errors) {
                Object.values(error.response?.data.errors).map(
                    (messages: any) => {
                        messages.map((message: string) => {
                            toast.error(message);
                            // console.log(message);
                        });
                    }
                );
            } else {
                toast.error('登録に失敗しました。')
            }
        }
    });
}

const useUpdateTask = () => {
    const queryClient = useQueryClient();
    return useMutation(api.updateTask,{
        onSuccess: () => {
            queryClient.invalidateQueries('tasks'),
            toast.success('更新に成功しました。')
        },
        // 「?.」 オブジェクトのプロパティが存在しなくてもエラーを起こさないアクセス方法
        onError: (error: AxiosError) => {
            // console.log(error.response?.data.errors);
            if(error.response?.data.errors) {
                Object.values(error.response?.data.errors).map(
                    (messages: any) => {
                        messages.map((message: string) => {
                            toast.error(message);
                            // console.log(message);
                        });
                    }
                );
            } else {
                toast.error('更新に失敗しました。')
            }
        }
    });
}

const useDeleteTask = () => {
    const queryClient = useQueryClient();
    return useMutation(api.deleteTask,{
        onSuccess: () => {
            queryClient.invalidateQueries('tasks'),
            toast.success('削除に成功しました。')
        },
        // 「?.」 オブジェクトのプロパティが存在しなくてもエラーを起こさないアクセス方法
        onError: (error: AxiosError) => {
            toast.error('削除に失敗しました。')
        }
    });
}

export {
    useTask,
    useUpdateDoneTask,
    useCreateTask,
    useDeleteTask,
    useUpdateTask
}