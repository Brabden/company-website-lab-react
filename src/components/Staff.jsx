const Staff = () => {
  const staffList = [
    { name: "Person A", role: "CEO", pic: "../placeholderbusiness.png"},
    { name: "Person B", role: "CTO", pic: "../placeholderbusiness.png" },
    { name: "Person C", role: "CFO", pic: "../placeholderbusiness.png" },
  ];

  return (
    <div className="spacer">
      <h1>Meet Our Staff!</h1>
      <ul className="staff-list">
        {staffList.map((member, index) => (
          <li key={index}>
            <img className="staff-pic" src={member.pic}></img>
            <h2 class="staff-desc">{member.name} - {member.role}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Staff;
