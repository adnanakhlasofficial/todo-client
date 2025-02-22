import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const AddTask = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const taskInfo = {
      ...data,
      date: new Date(),
      category: "todo",
      user: { name: user?.displayName, email: user?.email },
    };
    console.log("Task Added:", taskInfo);
    // Save task to backend or local storage (if needed)
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/tasks`, taskInfo);
      toast.success("Task added successfully.");
      navigate("/task-board");
    } catch (error) {
      toast.error("Something went wrong.");
      console.log(error);
    }
  };
  return (
    <section className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add New Task</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block font-medium">Title</label>
          <input
            type="text"
            {...register("title", {
              required: "Title is required",
              maxLength: { value: 50, message: "Max length exceeded" },
            })}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block font-medium">Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer"
        >
          Add Task
        </button>
      </form>
    </section>
  );
};

export default AddTask;
