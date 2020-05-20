import React from 'react';

const Friend = props => {
    return (
        //renders movie card
            <div className='friend-card'>
                <h3>Name: {props.friend.name}</h3>
                <h4>Age: {props.friend.age}</h4>
                <h4>Email: {props.friend.email}</h4>
                <button onClick={() => props.deleteFriend(props.friend.id)}> Delete</button>
            </div>


    )
}

export default Friend