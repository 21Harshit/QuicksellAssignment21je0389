import React, { useState, useEffect } from 'react';



const header={
  fontSize:'12px',
  margin: '4px',
  padding:'2px',
  color: 'black',
  fontWeight: 'bold',
}

const StatusPage = () => {
  const [tasks, setTasks] = useState({});
  const statuses = ['Backlog', 'Todo', 'In progress', 'Done', 'Cancelled']; // Status categories

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();

        // Group tasks by status
        const groupedTasks = statuses.reduce((acc, status) => {
          acc[status] = data.tickets.filter(task => task.status === status); // Adjust 'status' based on API response
          return acc;
        }, {});

        setTasks(groupedTasks);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  },);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '2px' }}>
         
      {statuses.map(status => (
        
        <div key={status} style={{ flex: 1, margin: '2px', borderRadius: '2px', padding: '5px' }}>
        <div style={header}>{status}</div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {tasks[status]?.map(task => (
             
              <div style={{backgroundColor:'white', marginBottom:'4px',border: '1px solid #ccc', padding:'2px', borderRadius:'4px'}}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '4px'
              }}>
                <div style={{
                  fontWeight: 'bold',
                  fontSize: '10px',
                  color: '#333'
                }}>
                  {task.id}
                </div>
                <div style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: '#c4c4c4',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '6px',
                  fontWeight: 'bold',
                  color: 'white'
                }}>
                  AS
                </div>
              </div>
        
              <div style={{
                fontSize: '10px',
                fontWeight: 'bold',
                marginBottom: '4px',
                color: '#000'
              }}>
                {task.title}
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
                {task.tag}
              </div>
            </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatusPage;