import React, {useState} from 'react'

export default function Form(props){ 
const [teamMember, setTeamMember] = useState({
    fname:'',
    lname: '',
    email: '',
    role: '',
    gender: ''
})

const onValueChange = event => {
    // if (/^[a-zA-Z]+$/.test(event.target.value)) {

        setTeamMember({
            ...teamMember,
            [event.target.name]: event.target.value
        })
    // }
}
const onFormSubmit = (eve) => {
    eve.preventDefault();
    props.addToMemberList(teamMember);
    setTeamMember({
    fname: "",
    lname: "",
    email: "",
    role: "",
    gender: ""
    })
    // alert(`submitting ${teamMember.lname}, ${teamMember.fname}`)
}
return (<div>
    
    <form onSubmit = {onFormSubmit}>
    <div> 
        <h3>Add New Member: </h3>
    </div>
    <div className = "theform">
            <label>
                First Name:
            </label> 
            <input  className = "inputtag"
                    placeholder = "First Name" 
                    onChange = {onValueChange}
                    name = "fname" 
                    value = {teamMember.fname}
                            />
            <br />
            <label> Last Name: </label>
                <input  className = "inputtag"
                        placeholder = "Last Name"
                        onChange = {onValueChange}
                        name = "lname" 
                        value = {teamMember.lname}
                
                    />
        <br />
        <label> Email: </label>
            <input  className = "inputtag" 
                    placeholder = "email"
                    onChange = {onValueChange}
                    name = "email" 
                    value = {teamMember.email}
                 />
        <br />
        <label>Role: </label>
            <input  className = "inputtag" 
                    placeholder = "role"
                    onChange = {onValueChange}
                    name = "role" 
                    value = {teamMember.role}

                 />
        <br />
        <label>Gender: </label>
        <div className = "gender">
            <input  type = "radio" name = "gender" onChange = {onValueChange}
                value = "Male"/><span> Male</span> 
                 <input  type = "radio" name = "gender" onChange = {onValueChange}
                value = "Female" /> <span>Female</span> 
                 <input  type = "radio" name = "gender" onChange = {onValueChange}
                value = "Other" /> <span>Other</span> 
                </div>
        <input id = "submit" type = "submit" value = "Add" />
        </div>
    </form>
    </div>

)
}
