import React, { useState, useEffect } from 'react';


const header={
  fontSize:'12px',
  margin: '4px',
  padding:'2px',
  color: 'black',
  fontWeight: 'bold',
}

const UsersPage = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment'); // Replace this with your actual API endpoint
        const data = await response.json();

        setTickets(data.tickets);
        setUsers(data.users.filter(user => user.available)); // Filter for available users
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {users.map(user => (
          <div key={user.id} style={{flex:'1', paddingRight:'2px ',borderRadius: '4px', marginBottom: '20px' }}>
            <h2 style={header}>{user.name}</h2> {/* User name */}
            
            {/* Filter and display tickets belonging to the user */}
            <div style={{ display: 'flex', flexDirection: 'column', padding:'10px' }}>
              {tickets.filter(ticket => ticket.userId === user.id).map(ticket => (
                  <div style={{backgroundColor:'white', marginBottom:'14px',border: '1px solid #ccc', padding:'2px', borderRadius:'4px'}}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '4px'
                  }}>
                    <div style={{
                     fontWeight: 'bold',
                     paddingLeft:'4px',
                     fontSize:'8px',
                     color: '#333'
                    }}>
                      {ticket.id}
                    </div>
                    <div style={{
                       width: '24px',
                       height: '24px',
                       borderRadius: '50%',
                       backgroundColor: '#c4c4c4',
                       display: 'flex',
                       justifyContent: 'center',
                       alignItems: 'center',
                       fontSize: '8px',
                       fontWeight: 'bold',
                       color: 'white'
                    }}>
                      AS
                    </div>
                  </div>
            
                  <div style={{
                    fontSize: '12px',
                    fontWeight: 'bold',
                    marginBottom: '4px',
                    color: '#000',
                    paddingLeft:'15px',
                    paddingRight: '12px'
                  }}>
                    {ticket.title}
                  </div>
            
                  {/* Row 3: Footer */}
                  <div style={{
                    fontSize: '8px',
                    color: '#6c757d',
                    backgroundColor: '#f1f3f5',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    textAlign: 'left',
                    display: 'inline-block'
                  }}>
                    {ticket.tag} 
                  </div>
                  <div style={{
                   fontSize: '10px',
                   color: 'grey',
                   backgroundColor: '#f1f3f5',
                   marginLeft:'10px',
                   padding:'2px',
                   borderRadius: '4px',
                   textAlign: 'left',
                   display: 'inline-block'
                  }}>
                   {ticket.priority}
                  </div>
                 
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
