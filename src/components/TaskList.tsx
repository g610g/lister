import TodoItem from "./TodoItem";
import { useTodoListStore } from "@/utils/store";
export default function TaskList() {
  const list = useTodoListStore((state) => state.list);
  console.log(list);
  return (
    <div className="space-y-[1rem] mt-3 flex overflow-auto flex-col max-h-[400px] pr-8">
      {list.map((todo, index) => (
        <div key={todo.id}>
          <TodoItem id={index} title={todo.title} />
        </div>
      ))}
    </div>
  );
}
