import React, { useState } from "react";
import  "../style/voting.css";
import Felix from "../img/felix.jpg";
import mene from "../img/mene k.jpg";
import charls from "../img/charle.jpg"
import amarachi from "../img/godsafe.jpg";
import nabele from "../img/nabele.jpg";
import my_G from "../img/my-G2.jpg";
import lastborn from "../img/last-born.jpg"
// import last _born from "../img/last-born.jpg";
import APC from "../img/logos/apc.jpg";
import APGA from "../img/logos/apga.png";
import ADC from "../img/logos/adc.jpg";
import PDP from "../img/logos/pdp.png";
import APM from "../img/logos/apm.jpg";
import LP from "../img/logos/lp.jpg";
import NNPP from "../img/logos/nnpp.jpg";
import SDP from "../img/logos/sdp.jpg";
import YPP from "../img/logos/ypp.png";
import { useNavigate } from "react-router-dom";
import Navigation from "./Navigation";



const person = [
    {
        name:"Felix",
        id: 1,
        imgSrc: Felix,
        party: "APC",
        logo: APC 
    },
    {
        name:"Charles",
        id: 2,
        imgSrc: charls,
        party: "PDP", 
        logo: PDP,
    },
    {
        name:"Godsafe",
        id: 3,
        party: "LP",
        imgSrc: amarachi,
        logo: LP
    },
    {
        name:"Mene",
        id: 4,
        party:  "YPP",
        imgSrc: mene,
        logo : YPP
    },
    {
        name:"Aabe ",
        id: 5,
        imgSrc: nabele,
        party : "APGA",
        logo : APGA,
    },
    {
        name:"Dornu",
        id: 6,
        imgSrc: mene,
        party : "NNPP",
        logo : NNPP,
    },
    {
        name:"GoodLuck",
        id: 7,
        imgSrc: lastborn,
        logo : ADC,
        party :  "ADC",
    },
    {
        name:"Gideon",
        id: 8,
        party : "SDP",
        imgSrc: my_G,
        logo : SDP
    },
    {
        name:"BRIGHT",
        id: 9,
        party : "APM",
        imgSrc: mene,
        logo :APM
    },
]


const Vote = ({name, img, id, party, selected, logo, onChange}) =>{
    return(
        <div className="vote">
                <div className="personal-div">
                   <div className="personalIm-Box">
                        <img src={img} alt="images" className="personalimg"/>
                        <span>{name}</span>
                    </div>
                   <span className="party">{party}</span>
                    <span> <img src={logo}  alt="logo" className="logo"/></span>
                    <div className="name-text">
                            <input
                            type="radio"
                            id={`candidate-${id}`}
                            name="candidate"
                            value={id}
                            checked={selected===id}
                            onChange={() => onChange(id)}
                            />
                        <label htmlFor={`candidate-${id}`}>
                            </label>
                    </div>
               </div>
        </div>
    )
}
const Voting = () =>{ 
    const [selectedCandidate, setSelectedCandidate] = useState(null);
    const navigate = useNavigate();


    const handleExit = ()=>{
        navigate("/")
    }

    const handleSelection =(id)=>{
        setSelectedCandidate(id)
    }

    const handleVote = () => {

        navigate("/Thanks")

    };


    return(
        <div className="voting-container">
                <Navigation />
            <div className="personal-card">
                 <div className="close-btn">
                <button onClick={handleExit} className="exit-button ">
                       x
                    </button>
                </div>
                 <h2>presidential candidate</h2>
                 {person.map((user) =>(
                <div className="vote"  key={user.id} >
                    <Vote
                        name={user.name}
                        party={user.party}
                        img={user.imgSrc}
                        id={user.id}
                        logo={user.logo}
                        selected ={selectedCandidate}
                        onChange={handleSelection}
                    />
                </div>
            
                ))}
                    {selectedCandidate ? <div className="vote-btn"><button className="btn" onClick={handleVote}>vote</button></div> : "select a candidate" }
            
            </div>
        </div>
    );
}; 
export default Voting;