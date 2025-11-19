"use client";

import { useCallback } from "react";
import { useImmer } from "use-immer";

import type { FormEvent } from "react";

export default function ContainerTodo() {
  const [todos, setTodos] = useImmer({
    text: "",
    list: [] as string[],
  });

  const handleChangeTodo = useCallback(
    (value: string) => {
      setTodos((draft) => {
        draft.text = value;
      });
    },
    [setTodos]
  );

  const handleAddTodo = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setTodos((draft) => {
        if (draft.text.trim() === "") return;
        draft.list.push(draft.text);
        draft.text = "";
      });
    },
    [setTodos]
  );

  console.log("ContainerTodo Render");

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          value={todos.text}
          onChange={(e) => handleChangeTodo(e.target.value)}
        />
      </form>

      <ul>
        {todos.list?.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
