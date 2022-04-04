import "./intro.scss";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export default function Intro(){
    return(
        <div className = "intro" id={"intro"}>
            <div className={"left"}>
                <div className={"imgContainer"}>
                    <img src={"assets/selfie0.jpg"} alt={""}/>
                </div>
            </div>
            <div className={"right"}>
                <div className={"wrapper"}>
                    <h2>Hey!</h2>
                    <h1>I'm Lysander,</h1>
                    <h3>Computer Science student at the <span>University of North Texas</span></h3>
                </div>
                <a href={"#about"}>
                    <ArrowDownwardIcon className={"arrow"} />
                </a>
            </div>
        </div>
    )
}