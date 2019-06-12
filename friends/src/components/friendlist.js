import React from 'react';
import { directive } from '@babel/types';

const Friendlist= (props) => {
    return (
        <div>
            {props.friends.name}
            {props.friends.age}
            {props.friends.email}

        </div>
    )

}


export default Friendlist;