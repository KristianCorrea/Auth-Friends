import React from 'react'
import {Link} from 'react-router-dom'

const Home = props => {
    return(
        <div>
            <h1>Time to check on your Friends List</h1>
            <Link to="/login">
                <button>Login</button>
            </Link>
        </div>
    )
}

export default Home;