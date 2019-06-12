import React from 'react';
import './friendlist.css'

const Friendlist= (props) => {
    return (
        <div className="mycard">
            <h1>Name: {props.mylist.name}</h1>
            <h2>Age: {props.mylist.age}</h2>
            <h2>Email: {props.mylist.email}</h2>
        </div>
    )

}


export default Friendlist;