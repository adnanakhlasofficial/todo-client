import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section
      className="min-h-[calc(100vh-8rem)] !bg-no-repeat !bg-cover !bg-center text-white flex justify-center items-center flex-col gap-4"
      style={{
        background: `linear-gradient(180deg, rgba(0,0,0,0.7) 100%, rgba(0,0,0,0.7) 100%), url('/images/banner.jpg')`,
      }}
    >
      <div className="text-center space-y-2 max-w-lg">
        <h2 className="text-2xl font-bold">Stay Organized, Stay Productive</h2>
        <p>
          Manage your tasks effortlessly and stay on top of your goals.
          Organize, prioritize, and get things done with ease!
        </p>
      </div>
      <div>
        <button className="px-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition cursor-pointer font-semibold">
          <Link to="/add-task">Get Started</Link>
        </button>
      </div>
    </section>
  );
};

export default Banner;
