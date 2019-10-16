import React, { useState} from 'react';
import Form from './Form'
import TeamList from "./TeamList" 

export default function AddMemmber() {
    const [teamList, setTeamList] = useState([]);
    const addToMemberList = (member) =>{
        setTeamList([...teamList, member])
    }


    return (
        <div>
            <Form addToMemberList = {addToMemberList}/>
            <div className = "all-members">
            {teamList.map((ele) => 
                <TeamList member = {ele} />
            )}
            </div>
        </div>
    )
}
