import "./contact.scss";
//import {useState} from "react";

export default function Contact(){
    /*
    const [message, setMessage] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        setMessage(true)
    }
*/
    //<input type={"text"} placeholder={"Email"}/>
    //<textarea placeholder={"Message"}></textarea>
    //{message && <span>Thank you! I'll respond soon.</span>}
    return(
        <div className={"contact"} id={"contact"}>
            <div className={"left"}>
                <img src={"assets/port3.png"} alt={""}/>
            </div>
            <div className={"right"}>
                <h2>Contact</h2>
                <form onSubmit={() => {}}>

                    <button type={"submit"}>
                        <a href="mailto: hernandezlysander22@gmail.com">Email</a>
                    </button>

                </form>
            </div>
        </div>
    )
}