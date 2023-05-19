import React from "react";
import './UserList.scss'

const users = [
    {
      id:1,
      name:'batyr',
      age:15,
      active:true,
      disactive:false
    },
    {
      id:2,
      name:'adil',
      age:16,
      active:true,
      disactive:false
    },
    {
      id:3,
      name:'aziret',
      age:16,
      active:true,
      disactive:false
    },
  ]

const Users = ({ name, age, disactive,active}) => {
    const handleClick = (id) => {
      users.map(user => {
            if (user.id === id){
                return active
            }
            console.log('active');
            return user
        })
      }
    return (
        <div className="users">
            <div className="title__block">
                <p className="name">
                    {name}
                </p>
                <p className="age">
                    {age}
                </p>
            </div>
            <div className="for-status">
                    <p className="status">
                         {disactive}
                    </p>
                     <p className=" second-status">
                        {active}
                    </p>
            </div>
            <button onClick={handleClick}>
                Check Status
            </button>
        </div>
    );
}
export default Users;