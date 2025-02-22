import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { format } from "date-fns";

const TaskBoard = () => {
  const queryClient = useQueryClient();

  const categories = [
    { title: "To-Do", status: "todo" },
    { title: "In Progress", status: "in-progress" },
    { title: "Done", status: "done" },
  ];

  const {
    data: tasks,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      try {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/tasks`);
        return data;
      } catch (error) {
        toast.error("Something went wrong.");
        console.log(error);
      }
    },
  });

  const updateTaskStatus = useMutation({
    mutationFn: async ({ id, newStatus }) => {
      await axios.patch(`${import.meta.env.VITE_API_URL}/tasks/${id}`, {
        category: newStatus,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task status updated!");
    },
    onError: () => {
      toast.error("Failed to update task status.");
    },
  });

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>{error.message}</p>;

  return (
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 p-4 min-h-[calc(100vh-14.5rem)]">
      {categories.map((category) => (
        <div
          key={category.status}
          className="bg-gray-100 p-4 rounded-lg shadow-md"
        >
          <h2 className="text-xl font-bold mb-4 text-center">
            {category.title}
          </h2>
          <div className="space-y-4">
            {tasks
              .filter((task) => task.category === category.status)
              .map((task) => (
                <div key={task._id} className="bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-sm">{task._id}</h3>
                  </div>
                  <h4 className="font-bold">{task.title}</h4>
                  <p className="text-sm text-gray-600">{task.description}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    Task Date: {format(new Date(task.date), "Pp")}
                  </p>
                  <select
                    className="mt-2 p-2 border rounded w-full"
                    value={task.category}
                    onChange={(e) =>
                      updateTaskStatus.mutate({
                        id: task._id,
                        newStatus: e.target.value,
                      })
                    }
                  >
                    {categories.map((cat) => (
                      <option key={cat.status} value={cat.status}>
                        {cat.title}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;
