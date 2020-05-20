import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth.js'
import Friend from './Friend.js'

const Friends=props=>{
    //state for friends from the data in the API
    const [friends, setFriends]=useState([])
    //state for id for addFriend
    const [id, setID] = useState()
    //state for form for a new friend
    const [addFriend, setAddFriends]=useState({id: id, name:'', age: '', email: ''})
    const [buttonDisabled, setButtonDisabled]= useState(true)
    //get data on render
    useEffect(()=>{
        axiosWithAuth()
        .get('/api/friends')
        .then(response=>{
            setFriends(response.data)
            setID(response.data.length+1)
        })
        .catch(error=>console.log({error}))
    },[])

    //handle formchanges and validation
    const handleChange=event=>{
        setAddFriends({
            ...addFriend, [event.target.name]: event.target.value
        })
        if(addFriend.name.length>0 && addFriend.age.length>0 && addFriend.email.length>0 ){
            setButtonDisabled(false)
        }
    }

    //deletes a selected friend through .delete request
    const deleteFriend = id =>{
        axiosWithAuth()
        .delete(`/api/friends/${id}`)
        .then(res => setFriends(res.data))
        .catch(err => console.log(err))
    }
    
    //Submits friend with .post request
    const submitFriend=event=>{
        event.preventDefault()
        axiosWithAuth()
            .post('/api/friends', addFriend)
            .then(res=>setFriends(res.data))
            .catch(err=>console.log(err))
    }
    //renders friends card and form to add friends
    return(
        <div>
            <h3>Add a Friend</h3>
            <form className='form' onSubmit={submitFriend}>
            <label htmlFor="name">
                    Name:
                <input name='name' type="text" onChange={handleChange} />
                </label>
                <label htmlFor="age">
                    Age:
                <input name='age' type="text" onChange={handleChange} />
                </label>
                <label htmlFor="name">
                    Email:
                <input name='email' type="email" onChange={handleChange} />
                </label>
                <input disabled={buttonDisabled} className='submit-friend-button' name='submit' type='submit' />
            </form>
            {friends.map(element => <Friend friend={element} setFriends={setFriends} deleteFriend={deleteFriend} key={element.id}/> )}
        </div>
    )
}

export default Friends