import "./about.scss";

export default function About(){
    return(
        <div className = {"about"} id={"about"}>
            <h1>About Me
            <h2 className={"bio"}>
                My passion for learning is what drives me each day to become proficient as a software engineer.
            </h2>
            </h1>
            <div className={"wrapper0"}>
                <div className={"left"}>
                    <ul>
                        <h3>Currently learning:</h3>
                        <li className={"bullet"}><img src={"assets/ts.png"} alt={""}/></li>
                        <li className={"bullet"}><img src={"assets/cpp.png"} alt={""}/></li>
                        <li className={"bullet"}><img src={"assets/c.png"} alt={""}/></li>
                        <li className={"bullet"}>Algorithms</li>
                        <li className={"bullet"}>System Design</li>
                    </ul>
                </div>
                <div className={"left"}>
                    <ul>
                        <h3>Planning to learn:</h3>
                        <li className={"bullet"}><img src={"assets/java.png"} alt={""}/></li>
                        <li className={"bullet"}>Backend</li>
                        <li className={"bullet"}>Database paradigms</li>
                        <li className={"bullet"}><img src={"assets/mysql.png"} alt={""}/></li>
                    </ul>

                </div>
            </div>
            <div className={"roadmap"}>
                <h2 className={"h1_2"}>Roadmap</h2>
                <div className={"wrapper1"}>
                    <h2 className={"bs"}>B.S in Computer Science (2025)</h2>
                    <h2 className={"fs"}>Fullstack development</h2>
                    <h2 className={"ml"}>Research in Machine Learning</h2>
                </div>
                <progress max={"100"} value={"10"} className={"bar"}></progress>
                <h3>Long journey ahead of me!</h3>
            </div>
        </div>
    )
}