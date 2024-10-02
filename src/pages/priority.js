import React, { useState, useEffect } from 'react';



const Papp = () => {
  const [noPriorityTasks, setNoPriorityTasks] = useState([]);
  const [urgentTasks, setUrgentTasks] = useState([]);
  const [highPriorityTasks, setHighPriorityTasks] = useState([]);
  const [mediumPriorityTasks, setMediumPriorityTasks] = useState([]);
  const [lowPriorityTasks, setLowPriorityTasks] = useState([]);

  useEffect(() => {
    // Fetch data from the provided API
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => {
        // Filter tasks based on priority
        setNoPriorityTasks(data.tickets.filter(task => task.priority === 0));
        setUrgentTasks(data.tickets.filter(task => task.priority === 4));
        setHighPriorityTasks(data.tickets.filter(task => task.priority === 3));
        setMediumPriorityTasks(data.tickets.filter(task => task.priority === 2));
        setLowPriorityTasks(data.tickets.filter(task => task.priority === 1));
      });
  }, []);

  // Inline styles
  const header={
    fontSize:'12px',
    margin: '4px',
    padding:'2px',
    color: 'black',
    fontWeight: 'bold',
  }
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '2px',
  };

  const priorityColumnStyle = {
    flex: '1',
    minWidth: '10px',
    margin: '2px',
    padding: '2px',
    backgroundColor: '#c4c4c4',
    display: 'flex',
    flexDirection: 'column',
  };

  const taskCardStyle = {
    margin: '2px 0',
    padding: '2px',
    backgroundColor: 'white',
    borderRadius: '4px',
  };

  const taskTitleStyle = {
    fontSize: '10px',
    margin: '0 0 4px',
  };

  const taskUserStyle = {
    fontSize: '10px',
                fontWeight: 'bold',
                marginBottom: '4px',
                color: '#000'
  };

  const taskStatusStyle = {
    fontSize: '8px',
                color: '#6c757d',
                backgroundColor: '#f1f3f5',
                padding: '4px 8px',
                borderRadius: '4px',
                textAlign: 'left',
                display: 'inline-block'
  };

  return (
    <div style={containerStyle}>
      {/* No Priority Column */}

      <div style={priorityColumnStyle}>
      <div style={header}>No priority</div>
        {noPriorityTasks.map(task => (
          <div style={taskCardStyle} key={task.id}>
            <h3 style={taskTitleStyle}>{task.id}</h3>
            <p style={taskUserStyle}>{task.title}</p>
            <span style={taskStatusStyle}>{task.tag}</span>
          </div>
        ))}
      </div>

      {/* Urgent Priority Column */}
      <div style={priorityColumnStyle}>
        <div style={header}>Urgent</div>
        {urgentTasks.map(task => (
          <div style={taskCardStyle} key={task.id}>
            <h3 style={taskTitleStyle}>{task.id}</h3>
            <p style={taskUserStyle}>{task.title}</p>
            <span style={taskStatusStyle}>{task.tag}</span>
          </div>
        ))}
      </div>

      {/* High Priority Column */}
      <div style={priorityColumnStyle}>
      <div style={header}>High</div>
        {highPriorityTasks.map(task => (
         <div style={taskCardStyle} key={task.id}>
         <h3 style={taskTitleStyle}>{task.id}</h3>
         <p style={taskUserStyle}>{task.title}</p>
         <span style={taskStatusStyle}>{task.tag}</span>
       </div>
        ))}
      </div>

      {/* Medium Priority Column */}
      <div style={priorityColumnStyle}>
      <div style={header}>Medium</div>
        {mediumPriorityTasks.map(task => (
        <div style={taskCardStyle} key={task.id}>
        <h3 style={taskTitleStyle}>{task.id}</h3>
        <p style={taskUserStyle}>{task.title}</p>
        <span style={taskStatusStyle}>{task.tag}</span>
      </div>
        ))}
      </div>

      {/* Low Priority Column */}
      <div style={priorityColumnStyle}>
      <div style={header}>Low</div>
        {lowPriorityTasks.map(task => (
         <div style={taskCardStyle} key={task.id}>
         <h3 style={taskTitleStyle}>{task.id}</h3>
         <p style={taskUserStyle}>{task.title}</p>
         <span style={taskStatusStyle}>{task.tag}</span>
       </div>
        ))}
      </div>
    </div>
  );
};

export default Papp;
