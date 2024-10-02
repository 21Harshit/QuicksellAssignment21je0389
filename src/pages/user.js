import React, { useState, useEffect } from 'react';

// Simulated Card component for displaying tickets
const Card = ({ name, logo, title, status }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      margin: '10px',
      padding: '10px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      {/* First Row: Name and Logo */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontWeight: 'bold', fontSize: '16px' }}>{name}</div>
        <div>{logo ? <img src={logo} alt={name} style={{ width: '30px', height: '30px' }} /> : null}</div>
      </div>
      
      {/* Second Row: Title */}
      <div style={{ marginTop: '10px', fontSize: '14px' }}>
        {title}
      </div>
      
      {/* Third Row: Footer/Status */}
      <div style={{
        marginTop: '10px',
        fontSize: '12px',
        color: '#555',
        padding: '5px 0',
        backgroundColor: '#f9f9f9',
        textAlign: 'center'
      }}>
        {status}
      </div>
    </div>
  );
};

// Main Page Component
const UserTicketsPage = () => {
  const [userTasksArray, setUserTasksArray] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
        const data = await response.json();

        // Group tasks by user in an array of arrays
        const tasksArray = [];
        data.forEach(task => {
          const userId = task.user_id; // Assuming task has a user_id property

          // Find the existing entry for the user or create a new one
          let userEntry = tasksArray.find(([id]) => id === userId);

          if (!userEntry) {
            // Create a new entry for the user if not found
            userEntry = [userId, { name: task.user, tasks: [] }];
            tasksArray.push(userEntry);
          }

          // Push the task to the user's task array
          userEntry[1].tasks.push(task);
        });

        setUserTasksArray(tasksArray);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Tickets</h1>

      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {userTasksArray.length > 0 ? (
          userTasksArray.map(([userId, userInfo]) => (
            <div key={userId} style={{ flexBasis: '19%', padding: '10px', border: '1px solid #ccc', borderRadius: '8px', marginBottom: '20px' }}>
              <h2 style={{ textAlign: 'center' }}>{userInfo.name}</h2> {/* Display user name */}
              
              {/* Display tasks in a column for each user */}
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {userInfo.tasks.map(task => (
                  <Card
                    key={task.id} // Ensure each task has a unique id
                    name={userInfo.name} // User's name
                    logo={task.logo} // Assuming task has a logo property
                    title={task.title}
                    status={task.status}
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No tasks found.</p>
        )}
      </div>
    </div>
  );
};

export default UserTicketsPage;
