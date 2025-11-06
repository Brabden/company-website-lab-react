const CompanyHistory = () => {
  const history = {
      founded: "2015",
      headquarters: "Somewhere between innovation and imagination",
      description:
        "It all started in a tiny garage with two laptops, one half-functioning espresso machine, and a dream: to make the impossible slightly more possible (and definitely more entertaining). Our founders, after accidentally spilling coffee on their first prototype, decided to pivot—because if innovation teaches us anything, it is that every great product starts with a mistake and a good story. Over the years, we have evolved from a small startup with wild ideas into a medium-sized company with even wilder ones. We have collaborated with visionary clients—real and totally legit—across industries from AI hydration technology to quantum cat analytics. Today, our mission remains the same: To build creative, functional, and delightfully odd solutions that make people smile, think, and occasionally ask, “Wait, is that even possible?”We are proud of our team, our projects, and our ability to turn quirky ideas into real-world results. The future? Oh, we are already working on it—probably with lasers.",
    };

  return (
    <div className="spacer">
        <img className ="company-picture" src="../company-picture.png"></img>
        <div className="company-history-content">
          <h4>
            Founded: {history.founded}
          </h4>
          <h4>Headquarters: {history.headquarters}</h4>
          <p>{history.description} </p>
        </div>
        </div>
  );
};

export default CompanyHistory;
