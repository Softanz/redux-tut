import React from 'react'
const User = (props)=>{
    console.log(props);
    return (
        <div>
            <h1> User Component</h1>
            <h2>Name: {props.name}</h2>
            <h2>Age: {props.age}</h2>
            <h2>Email: {props.email}</h2>
        </div>
    )
}

export default User;