import "./skills.scss";

export default function Skills(){
    return(
        <div className = {"skills"} id={"skills"}>
            <h1>Skills</h1>
            <div className={"wrapper"}>
                <h2>Languages</h2>
                <ul>
                    <li>
                        <img src={"assets/js.png"} alt={""}/>
                        <span>JavaScript</span>
                    </li>
                    <li>
                        <img src={"assets/python.png"} alt={""}/>
                        <span>Python</span>
                    </li>
                    <li>
                        <img src={"assets/cpp.png"} alt={""}/>
                        <span>C++</span>
                    </li>
                    <li>
                        <img src={"assets/c.png"} alt={""}/>
                        <span>C</span>
                    </li>
                    <li>
                        <img src={"assets/lua.png"} alt={""}/>
                        <span>Lua</span>
                    </li>
                </ul>
            </div>
            <div className={"wrapper"}>
                <h2>Tools</h2>
                <ul>
                    <li>
                        <img src={"assets/react.png"} alt={""}/>
                        <span>React</span>
                    </li>
                    <li>
                        <img src={"assets/sass.png"} alt={""}/>
                        <span>SASS</span>
                    </li>
                    <li>
                        <img src={"assets/docker.png"} alt={""}/>
                        <span>Docker</span>
                    </li>
                    <li>
                        <img src={"assets/ubuntu.png"} alt={""}/>
                        <span>Ubuntu</span>
                    </li>
                    <li>
                        <img src={"assets/html.png"} alt={""}/>
                        <span>HTML</span>
                    </li>
                    <li>
                        <img src={"assets/css.png"} alt={""}/>
                        <span>CSS</span>
                    </li>
                </ul>
            </div>

        </div>
    )
}