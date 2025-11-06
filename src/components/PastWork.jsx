const PastWork = () => {
    const pastWorkText = "We've worked with so many big and totally legit companies!";

    return (
        <div className="spacer">
            <h1>Past Work</h1>
            <p>{pastWorkText}</p>
             <img className = "pastwork-image" src="../pastwork.png"></img>
            <ul className = "pastwork-list">
                <li>Project Pegasus - Built an AI-powered coffee mug that reminds you to hydrate.</li>
                <li>Operation CloudBite - Created a secure cloud solution for snack storage analytics.</li>
                <li>NeuralNomad Initiative - Designed a VR workspace for remote telepaths.</li>
                <li>Project QuantumCat - Developed a feline behavior predictor using quantum computing.</li>
                <li>Solar Spoons Ltd. - Engineered self-heating spoons powered by sunlight.</li>
                <li>EchoLoop Systems - Built a feedback engine that compliments users back... sometimes too much.</li>
                <li>Project AtlasByte - Mapped every pizza restaurant in the multiverse (still in beta).</li>
                <li>HyperHive - Automated beehive management with blockchain technology.</li>
                <li>MoonSync Media - Launched an ad campaign viewable only during lunar eclipses.</li>
                <li>Project Pinecone - Crafted biodegradable drones shaped like pinecones for forest monitoring.</li>
            </ul>
        </div>
    );
};

export default PastWork;
