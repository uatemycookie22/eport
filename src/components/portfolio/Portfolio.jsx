import {useEffect, useState} from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/PortfolioList";
import {webPortfolio, sttPortfolio} from "../data";

export default function Portfolio (){
    const [selected, setSelected] = useState("web")
    const [data, setData] = useState([])
    const list = [
        {
            id: "web",
            title: "Web App",
        },
        {
            id: "stt",
            title: "Speech to Text system",
        },

    ];

    useEffect(() => {
        switch (selected) {
            case "web":
                setData(webPortfolio);
                break;
            case "stt":
                setData(sttPortfolio);
                break;
            default:
                setData(webPortfolio);
                break;
        }
        console.log(selected)
    }, [selected])
    return(
        <div className = "portfolio" id={"portfolio"}>
            <h1>Portfolio</h1>
            <ul>
                {list.map(item=>(
                    <PortfolioList
                        id = {item.id}
                        title = {item.title}
                        active = {selected === item.id}
                        setSelected = {setSelected}
                    />
                ))}
            </ul>
            <div className={"container"}>
                {data.map((d) =>(
                    <div className={"item"}>
                        <a
                            href={d.link}
                            target={"_blank"}
                            rel="noopener noreferrer"
                        >
                            <img
                                src={d.img}
                                alt={""}
                            />
                            <h3>{d.title}</h3>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}