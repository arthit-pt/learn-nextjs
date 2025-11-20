import { useImmer } from "use-immer";
import { useCallback } from "react";

// types
import type { FormEvent } from "react";

export default function useTodo() {
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

  const handleDeleteTodo = useCallback(
    (index: number) => {
      setTodos((draft) => {
        draft.list.splice(index, 1);
      });
    },
    [setTodos]
  );

  return {
    todos,
    handleChangeTodo,
    handleAddTodo,
    handleDeleteTodo,
  };
}
