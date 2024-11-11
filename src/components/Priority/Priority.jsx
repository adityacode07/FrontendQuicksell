import React from 'react';
import './Priority.css'
import hp from './hp.svg'
import ip from './ip.svg'
import mp from './mp.svg'
import lp from './lp.svg'
import Card from '../Card/Card';
function Priority({ordering, datas }) {
    const p=datas[0].priority
    let sortedDatas = [...datas];
    if (ordering === "Priority") {
      sortedDatas.sort((a, b) => a.priority - b.priority); 
    } else if (ordering === "Title") {
      sortedDatas.sort((a, b) => a.title.localeCompare(b.title)); 
    }
  return (
    <div className="status-group">
    <div className='header'>
    <div className='left-part'>
    <div>
    
    {p===0?(<div>⋯</div> ):p===1?(<img src={lp}/> ):p===2?(<img src={mp}/> ):p===3?(<img src={hp}/> ):(<img src={ip}/> )}
    </div>
    <span>
  
   
    {p===0?(<div>No priority</div>):p===1?(<div>Low</div>):p===2?(<div>Medium</div>):p===3?(<div>High</div>):(<div>Urgent</div>)}
   
    </span>
    <div>
    </div>
    </div>
    <div className='right'>
    <div>+</div>
    <div>
    ⋯
    </div>
    </div>
    </div>
      <div className="cards">
        {datas.map((ticket) => (
            <div className='card-section' key={ticket.id}>
          <Card key={ticket.id} data={ticket} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Priority;
