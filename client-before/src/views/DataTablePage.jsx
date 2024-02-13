import { useEffect, useState } from "react";
import gifLoading from '../assets/Pulse-1s-284px.svg'
import axios from 'axios'

const DataTablePage = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false)

  const fetchTodos = async () => {
    try {
      setLoading(true) // pending
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos");

      setTodos(data); // success
    } catch (error) {
      console.log(error); // gagal
    } finally {
      setLoading(false)// success
    }
  };

  useEffect(() => {
    fetchTodos()
  }, []);

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

      {todos?.length > 0 && (
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
