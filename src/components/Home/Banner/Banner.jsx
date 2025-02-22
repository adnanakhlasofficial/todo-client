const Banner = () => {
  return (
    <section
      className="min-h-[75vh] !bg-no-repeat !bg-cover !bg-center text-white flex justify-center items-center flex-col gap-4"
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
    </section>
  );
};

export default Banner;
