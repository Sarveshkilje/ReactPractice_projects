import React, { useState } from "react";
import styles from "./ToDoList.module.css";

const ToDoList = () => {
  const [task, setTask] = useState(["Eating Breakfast"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]);
      setNewTask("");
    }
  }

  function removeTask(index) {
    const updatedTask = task.filter((_, i) => i !== index);
    setTask(updatedTask);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updateTasks = [...task];
      [updateTasks[index], updateTasks[index - 1]] = [
        updateTasks[index - 1],
        updateTasks[index],
      ];
      setTask(updateTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < task.length -1) {
      const updateTasks = [...task];
      [updateTasks[index], updateTasks[index + 1]] = [
        updateTasks[index + 1],
        updateTasks[index],
      ];
      setTask(updateTasks);
    }
  }

  return (
    <div className={styles.toDoList}>
      <h1>To Do List :</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a Task..."
        />
        <button className={styles.addButton} onClick={addTask}>
          Add Task
        </button>
      </div>
      <ol>
        {task.map((task, index) => (
          <li key={index}>
            <span className={styles.text}>{task}</span>
            <button
              className={styles.deleteButton}
              onClick={() => removeTask(index)}
            >
              Delete
            </button>
            <button
              className={styles.moveButton}
              onClick={() => moveTaskUp(index)}
            >
              Up
            </button>
            <button
              className={styles.moveButton}
              onClick={() => moveTaskDown(index)}
            >
              Down
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoList;
