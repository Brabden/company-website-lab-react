const ContactUs = () => {
    const contactInfo = {
        phone: "(123) 456-7890",
        email: "interesting@company.com",
        address: "123 Muffin Lane, Muffinville"
    };
    return (
        <div className="spacer">
            <h1>Contact Us</h1>
            <img className="office-image" src="https://cdn.sanity.io/images/uqxwe2qj/production/62db3c671745e98cb27690dff96f8033d2bb7f35-2048x1010.jpg"></img>
            <p>Phone: {contactInfo.phone}</p>
            <p>Email: {contactInfo.email}</p>
            <p>Address: {contactInfo.address}</p>
        </div>
    );
};

export default ContactUs;