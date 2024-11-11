import React from 'react';
import './Status.css';
import Card from '../Card/Card';
import Backlog from './Backlog.svg';
import todo from './todo.svg';
import ip from './ip.png';

function Status({ ordering, status, datas }) {
  let sortedDatas = [...datas];
  if (ordering === "Priority") {
    sortedDatas.sort((a, b) => a.priority - b.priority);
  } else if (ordering === "Title") {
    sortedDatas.sort((a, b) => a.title.localeCompare(b.title)); 
  }

  return (
    <div className="status-group">
      {/* Status Header */}
      <div className="header">
        <div className="left-part">
          <span className="symbol">
            {status === "Backlog" ? (
              <img src={Backlog} alt="Backlog Icon" />
            ) : status === "Todo" ? (
              <img src={todo} alt="Todo Icon" />
            ) : (
              <img src={ip} style={{ height: "17px" }} alt="In Progress Icon" />
            )}
            {status}
          </span>
          <div>3</div>
        </div>
        <div className="right">
          <div>+</div>
          <div>⋯</div>
        </div>
      </div>
      <div className="cards">
        {sortedDatas.map((ticket) => (
          <div className="card-section" key={ticket.id}>
            <Card data={ticket} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Status;
