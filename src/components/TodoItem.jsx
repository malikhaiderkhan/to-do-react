import styles from '@/styles/TodoItem.module.css';
import PropTypes from 'prop-types';

const TodoItem = ({ itemProp, handleChange, delTodo }) => {
  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button onClick={() => delTodo(itemProp.id)}>Delete</button>
        {itemProp.title}
      </div>
    </li>
  );
};
TodoItem.propTypes = {
  itemProp: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};
export default TodoItem;