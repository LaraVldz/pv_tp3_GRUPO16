function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li>
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none', marginRight: '1rem' }}>
        {task.text}
      </span>
      
      <button onClick={() => onToggle(task.id)}>
        Realizada
      </button>

      <button onClick={() => onDelete(task.id)} style={{ marginLeft: '0.5rem' }}>
        Eliminar
      </button>
    </li>
  );
}

export default TaskItem;
  