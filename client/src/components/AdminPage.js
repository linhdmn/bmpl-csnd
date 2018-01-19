import React from 'react'
// import {Link} from 'react-router-dom'
// import {getTimeDistance} from '../constants/functions'

const Admin = (props)=>{
    // console.log(props);
    if(!props.userID)
    {
        props.history.push('/login');
        return null;
    }
    if(!props.role){
        props.history.push('/login');
        return null;
    }
    
    


    return(
        <p>
            adminpage
        </p>
    )
}
export default Admin
