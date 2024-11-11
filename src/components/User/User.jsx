import React from 'react'
import Card from '../Card/Card';
import './User.css'

function User({ordering,datas}) {
  let sortedDatas = [...datas];
  if (ordering === "Priority") {
    sortedDatas.sort((a, b) => a.priority - b.priority); 
  } else if (ordering === "Title") {
    sortedDatas.sort((a, b) => a.title.localeCompare(b.title));
  }
  const name="Aditya Yadav"
  const initials=name.split(' ').map((part)=>part.charAt(0).toUpperCase()).join("")
  return (
    <div className='main'>
    <div className='header'>
    <div className='left-part'>
    <div className='pic'>
    {initials}
    </div>
    <span>
    Anoop Sharma
    </span>
    <div>
    </div>
    3
    </div>
    <div className='right'>
    <div>+</div>
    <div>
    ⋯
    </div>
    </div>
    </div>
    
<div >
{datas.map((data, key) => (
  <div className='card-section' key={key}>
    <Card data={data} />
  </div>
))}


</div>

    </div>
   
  )
}

export default User
