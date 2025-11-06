const Home = () => {
  const greeting =
    "Welcome to Interesting Corportation! Where we make everything interesting!";

  return (
    <>
      <div className="home-page">
        <div className="content-div">
        <h1>Home Page</h1>
        <p>{greeting}</p>
        </div>
      </div>
    </>
  );
};

export default Home;
