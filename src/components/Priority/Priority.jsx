import React from 'react';
import './Priority.css'
import { ReactComponent as nopri } from './No-Priority.svg';
import { ReactComponent as hp } from './hp.svg';
import { ReactComponent as mp } from './mp.svg';
import { ReactComponent as lp } from './lp.svg';
import { ReactComponent as ip } from './ip.svg';

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
    
    {p===0?(<img src={nopri}/> ):p===1?(<img src={lp}/> ):p===2?(<img src={mp}/> ):p===3?(<img src={hp}/> ):(<img src={ip}/> )}
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
