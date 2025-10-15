import { useEffect } from "react";
import gifLoading from '../assets/Pulse-1s-284px.svg'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAsync } from "../features/todos/todoSlicer";
import Toastify from 'toastify-js'

const DataTablePage = () => {
  const { todos, loading, error } = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAsync())
  }, []);

  useEffect(() => {
    if (error) {
      Toastify({
        text: error.message,
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#FF0000",
        },
      }).showToast();
    }
  }, [error])

  if (loading) {
    return (
      <>
        <section className="flex justify-center items-center" >
          <img src={gifLoading} />
        </section>
      </>
    );
  }


  return (
    <section className="flex flex-col gap-4 rounded bg-gray-100 p-4">
      <p className="text-2xl font-bold">DataTable Page</p>

      {todos?.length > 0 && !error && (
        <table className="border-1 border border-emerald-400">
          <thead>
            <tr>
              <th className="border border-emerald-400 py-4">id</th>
              <th className="border border-emerald-400">userId</th>
              <th className="border border-emerald-400">title</th>
              <th className="border border-emerald-400">completed</th>
            </tr>
          </thead>
          <tbody>
            {todos?.map((todo) => (
              <tr key={todo.id}>
                <td className="border border-emerald-400 py-2 text-center">
                  {todo.id}
                </td>
                <td className="border border-emerald-400 text-center">
                  {todo.userId}
                </td>
                <td className="border border-emerald-400">{todo.title}</td>
                <td className="border border-emerald-400">
                  {todo.completed ? "Completed" : "Not Completed"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default DataTablePage;
