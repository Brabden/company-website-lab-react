const Navbar = ({ setActiveSection }) => {
    const handleNavigation = (section) => {
        setActiveSection(section);
    };

    return (
        <nav className="navbar">
            <ul>
                <li onClick={() => handleNavigation('home')}>Home</li>
                <li onClick={() => handleNavigation('companyHistory')}>Company History</li>
                <li onClick={() => handleNavigation('pastWork')}>Past Work</li>
                <li onClick={() => handleNavigation('staff')}>Staff</li>
                <li onClick={() => handleNavigation('contactUs')}>Contact Us</li>
                <li onClick={() => handleNavigation('externalLinks')}>External Links</li>
            </ul>
        </nav>
    );
};

export default Navbar;