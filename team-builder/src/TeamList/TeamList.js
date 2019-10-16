import React from 'react'


export default function TeamList(props) {
    return (
        <div key = "props.member.email" className = "memberCard">
            <h2>{`${props.member.fname}  ${props.member.lname}`}</h2>
            <p>{props.member.role}</p>
            <p>{props.member.gender}</p>
            <p>{props.member.email}</p>
            <button>Edite</button>
        </div>
    )
}