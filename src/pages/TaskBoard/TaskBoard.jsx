import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { format } from "date-fns";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const TaskBoard = () => {
  const { user } = useContext(AuthContext);
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
        const { data } = await axios(
          `${import.meta.env.VITE_API_URL}/tasks?email=${user?.email}`
        );
        return data;
      } catch (error) {
        toast.error("Something went wrong.");
        console.log(error);
      }
    },
  });

  // Mutation for updating task status
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

  // Mutation for deleting a task
  const deleteTask = useMutation({
    mutationFn: async (id) => {
      await axios.delete(`${import.meta.env.VITE_API_URL}/tasks/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task deleted!");
    },
    onError: () => {
      toast.error("Failed to delete task.");
    },
  });

  const handleDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) return; // Dropped outside any valid category

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return; // No change in position
    }

    const movedTask = tasks[source.index];
    const newStatus = destination.droppableId;

    // Only update status if the task's category changes
    if (movedTask.category !== newStatus) {
      updateTaskStatus.mutate({ id: movedTask._id, newStatus });
    }
  };

  if (isLoading) return <p>Loading...</p>;

  if (isError) return <p>{error.message}</p>;

  return (
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 p-4 min-h-[calc(100vh-8rem)]">
      <DragDropContext onDragEnd={handleDragEnd}>
        {categories.map((category) => (
          <Droppable key={category.status} droppableId={category.status}>
            {(provided) => (
              <div
                className="bg-gray-100 p-4 rounded-lg shadow-md"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2 className="text-xl font-bold mb-4 text-center">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {tasks
                    .filter((task) => task.category === category.status)
                    .map((task, index) => (
                      <Draggable
                        key={task._id}
                        draggableId={task._id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-white p-4 rounded-lg shadow relative"
                          >
                            {/* Delete Button */}
                            <button
                              className="absolute top-2 right-2 text-red-500 hover:text-red-700 cursor-pointer"
                              onClick={() => deleteTask.mutate(task._id)}
                            >
                              <MdDelete size={20} />
                            </button>

                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="text-sm">{task?.user?.email}</h3>
                            </div>
                            <h4 className="font-bold">{task.title}</h4>
                            <p className="text-sm text-gray-600">
                              {task.description}
                            </p>
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
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  );
};

export default TaskBoard;
