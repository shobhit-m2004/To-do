import styles from './Todos.module.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


let Todos = ({ Todo, DeleteItem }) => {
  return (
    <table className={`table table-striped ${styles.T1}`}>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Task</th>
          <th scope="col">Task-Date</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {Todo.map((item, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{item.text}</td>
            <td>{item.date}</td>
            <td>
              <button
                type="button"
                className="btn btn-outline-info"
                onClick={() => DeleteItem(index)}
              >
                <i class="bi bi-trash"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Todos;
