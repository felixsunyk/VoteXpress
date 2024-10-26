import React, { useState } from "react";
import "../style/voting.css";
import Felix from "../img/felix.jpg";
import mene from "../img/mene k.jpg";
import amarachi from "../img/godsafe.jpg";
import { useNavigate } from "react-router-dom";



const person = [
    {
        name:"Felix",
        id: 1,
        imgSrc: Felix,
        text: "sometext" 
    },
    {
        name:"Godsafe",
        id: 2,
        imgSrc: amarachi,
        text: "sometext"
    },
    {
        name:"Mene",
        id: 3,
        imgSrc: mene,
        text:"some text"
    }
]


const Vote = ({name, text, img, id, selected, onChange}) =>{
    return(
        <div className="vote">
                <div className="personal-div">
                    <div className="name-text">
                        <input 
                        type="radio" 
                        name="candidate"
                        value={id}
                        checked={selected===id}
                        onChange={() => onChange(id)}
                        /> 
                        <span>{name}</span>
                        <p>{text}</p>
                    </div>
                   <img src={img} alt="images" className="img"/>
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

        const selectedCandidateName = person.find((user) => 
        user.id === selectedCandidate)?.name;
        navigate("/Thanks", { state: { name: selectedCandidateName, position: "president" } });
    };


    return(
        <div className="personal-card">
             <div className="close-btn">
            <button onClick={handleExit} className="exit-button ">
                   x
                </button>
            </div>
             <h1>president</h1>
             {person.map((user) =>( 
            <div className="vote"  key={user.id} >
                <Vote  
                    name={user.name} 
                    text={user.text}
                    img={user.imgSrc} 
                    id={user.id}
                    selected ={selectedCandidate}
                    onChange={handleSelection}
                />
            </div>
             
            ))}

                {selectedCandidate ? <div className="vote-btn"><button className="btn" onClick={handleVote}>vote</button></div> : "select a candidate"}
           
        </div>
    );
}; 
export default Voting;