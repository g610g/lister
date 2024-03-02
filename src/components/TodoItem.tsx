interface TodoItemProps {
  id: number;
  title: string;
}
export default function TodoItem({ id, title }: TodoItemProps) {
  return (
    <div key={id} className="p-3 bg-background_brown rounded-2xl">
      {title}
    </div>
  );
}
