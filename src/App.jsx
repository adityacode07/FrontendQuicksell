import Nav from "./components/Nav/Nav";
import './App.css';
import { useEffect, useState } from "react";
import User from "./components/User/User";
import Status from "./components/Status/Status";
import Priority from "./components/Priority/Priority";
import axios from "axios";


function App() {
  const [displayOpen, setDisplay] = useState(false);
  const [grouping, setGrouping] = useState("Priority"); 
  const [ordering, setOrdering] = useState("Priority");
  const [TicketData, setTicketData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment");
        setTicketData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  
if(!TicketData){
return <div>loading</div>
}else{
  const data =TicketData
  data.tickets = data.tickets.map(ticket => {
    const user = data.users.find(user => user.id === ticket.userId);
    return {
      ...ticket,
      userName: user ? user.name : "Unknown"
    };
  });

  const tickets = data.tickets;

  const groupedByUser = {};
  const groupedByStatus = {};
  const groupedbyPriorities={};


tickets.forEach((ticket=>{
  if(!groupedbyPriorities[ticket.priority]){
    groupedbyPriorities[ticket.priority]=[]
  }
  groupedbyPriorities[ticket.priority].push(ticket)
}))

  tickets.forEach((ticket) => {
    if (!groupedByUser[ticket.userId]) {
      groupedByUser[ticket.userId] = [];
    }
    groupedByUser[ticket.userId].push(ticket);
  });

  tickets.forEach((ticket) => {
    if (!groupedByStatus[ticket.status]) {
      groupedByStatus[ticket.status] = [];
    }
    groupedByStatus[ticket.status].push(ticket);
  });

  return (
    <div>
      <div className="nav">
        <Nav
          displayOpen={displayOpen}
          setDisplay={setDisplay}
          grouping={grouping}
          setGrouping={setGrouping}
          ordering={ordering}
          setOrdering={setOrdering}
        />
      </div>

      {grouping === "User" ? (
        <div>
          <div className="user">
            {Object.entries(groupedByUser).map(([userId, tickets]) => (
              <User key={userId} ordering={ordering} datas={tickets} />
            ))}
          </div>
        </div>
      ) : grouping === "Status"? (
        <div>
          <div className="status">
            {Object.entries(groupedByStatus).map(([status, tickets]) => (
              <Status key={status}  ordering={ordering} status={status} datas={tickets}/>
            ))}
          </div>
        </div>
      ) : grouping === "Priority" ? (
        <div>
          <div className="status">
            {Object.entries(groupedbyPriorities).map(([priority, tickets]) => (
              <Priority key={priority} ordering={ordering} datas={tickets}/>
            ))}
          </div>
        </div>
      ):(
        <div>
          hey
        </div>
      )}
    </div>
  );}
}

export default App;
