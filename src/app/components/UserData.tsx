import React from 'react'
import UserCard from './UserCard';

function  UserData() {
    let name  =  "Muneeb Usmani";
    let profession = "Frontend Developer";
    let salary = "65000";

  return (
    <>
<UserCard n={name} p={profession} s={salary}/>
    </>
)
}

export default UserData