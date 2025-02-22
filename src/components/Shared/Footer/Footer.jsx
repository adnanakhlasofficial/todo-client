const Footer = () => {
  return (
    <section className="container mx-auto p-4 text-center">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-blue-700">Planify</span>. All rights reserved.
      </p>
    </section>
  );
};

export default Footer;
