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
  
  return (
    // <div style={{ display: 'flex', justifyContent: 'space-between' }} >
    //   {/* No Priority Column */}

    //   <div  class="card" >
    //   <div style={header}>No priority</div>
    //     {noPriorityTasks.map(task => (
    //        <div class="show">
    //        <div style={{
    //          display: 'flex',
    //          justifyContent: 'space-between',
    //          alignItems: 'center',
    //          marginBottom: '4px'
    //        }}>
    //          <div style={{
    //            fontWeight: 'bold',
    //            paddingLeft:'4px',
    //            fontSize:'8px',
    //            color: '#333'
    //          }}>
    //            {task.id}
    //          </div>
    //          <div style={{
    //            width: '24px',
    //            height: '24px',
    //            borderRadius: '50%',
    //            backgroundColor: '#c4c4c4',
    //            display: 'flex',
    //            justifyContent: 'center',
    //            alignItems: 'center',
    //            fontSize: '8px',
    //            fontWeight: 'bold',
    //            color: 'white'
    //          }}>
    //            AS
    //          </div>
    //        </div>
     
    //        <div style={{
    //          fontSize: '12px',
    //          fontWeight: 'bold',
    //          marginBottom: '4px',
    //          color: '#000',
    //          paddingLeft:'15px',
    //          paddingRight: '12px'
    //        }}>
    //          {task.title}
    //        </div>
     
    //        <div style={{
    //          fontSize: '10px',
    //          color: 'grey',
    //          backgroundColor: '#f1f3f5',
    //          marginLeft:'10px',
    //          padding:'2px',
    //          borderRadius: '4px',
    //          textAlign: 'left',
    //          display: 'inline-block'
    //        }}>
    //          {task.tag}
    //        </div>
    //      </div>
    //     ))}
    //   </div>

    //   {/* Urgent Priority Column */}
    //   <div class="card">
    //     <div style={header}>Urgent</div>
    //     {urgentTasks.map(task => (
    //       <div class="show">
    //       <div style={{
    //         display: 'flex',
    //         justifyContent: 'space-between',
    //         alignItems: 'center',
    //         marginBottom: '4px'
    //       }}>
    //         <div style={{
    //           fontWeight: 'bold',
    //           paddingLeft:'4px',
    //           fontSize:'8px',
    //           color: '#333'
    //         }}>
    //           {task.id}
    //         </div>
    //         <div style={{
    //           width: '24px',
    //           height: '24px',
    //           borderRadius: '50%',
    //           backgroundColor: '#c4c4c4',
    //           display: 'flex',
    //           justifyContent: 'center',
    //           alignItems: 'center',
    //           fontSize: '8px',
    //           fontWeight: 'bold',
    //           color: 'white'
    //         }}>
    //           AS
    //         </div>
    //       </div>
    
    //       <div style={{
    //         fontSize: '12px',
    //         fontWeight: 'bold',
    //         marginBottom: '4px',
    //         color: '#000',
    //         paddingLeft:'15px',
    //         paddingRight: '12px'
    //       }}>
    //         {task.title}
    //       </div>
    
    //       <div style={{
    //         fontSize: '10px',
    //         color: 'grey',
    //         backgroundColor: '#f1f3f5',
    //         marginLeft:'10px',
    //         padding:'2px',
    //         borderRadius: '4px',
    //         textAlign: 'left',
    //         display: 'inline-block'
    //       }}>
    //         {task.tag}
    //       </div>
    //     </div>
    //     ))}
    //   </div>

    //   {/* High Priority Column */}
    //   <div class="card">
    //   <div style={header}>High</div>
    //     {highPriorityTasks.map(task => (
    //      <div class="show">
    //      <div style={{
    //        display: 'flex',
    //        justifyContent: 'space-between',
    //        alignItems: 'center',
    //        marginBottom: '4px'
    //      }}>
    //        <div style={{
    //          fontWeight: 'bold',
    //          paddingLeft:'4px',
    //          fontSize:'8px',
    //          color: '#333'
    //        }}>
    //          {task.id}
    //        </div>
    //        <div style={{
    //          width: '24px',
    //          height: '24px',
    //          borderRadius: '50%',
    //          backgroundColor: '#c4c4c4',
    //          display: 'flex',
    //          justifyContent: 'center',
    //          alignItems: 'center',
    //          fontSize: '8px',
    //          fontWeight: 'bold',
    //          color: 'white'
    //        }}>
    //          AS
    //        </div>
    //      </div>
   
    //      <div style={{
    //        fontSize: '12px',
    //        fontWeight: 'bold',
    //        marginBottom: '4px',
    //        color: '#000',
    //        paddingLeft:'15px',
    //        paddingRight: '12px'
    //      }}>
    //        {task.title}
    //      </div>
   
    //      <div style={{
    //        fontSize: '10px',
    //        color: 'grey',
    //        backgroundColor: '#f1f3f5',
    //        marginLeft:'10px',
    //        padding:'2px',
    //        borderRadius: '4px',
    //        textAlign: 'left',
    //        display: 'inline-block'
    //      }}>
    //        {task.tag}
    //      </div>
    //    </div>
    //     ))}
    //   </div>

    //   {/* Medium Priority Column */}
    //   <div class="card">
    //   <div style={header}>Medium</div>
    //     {mediumPriorityTasks.map(task => (
    //     <div class="show">
    //     <div style={{
    //       display: 'flex',
    //       justifyContent: 'space-between',
    //       alignItems: 'center',
    //       marginBottom: '4px'
    //     }}>
    //       <div style={{
    //         fontWeight: 'bold',
    //         paddingLeft:'4px',
    //         fontSize:'8px',
    //         color: '#333'
    //       }}>
    //         {task.id}
    //       </div>
    //       <div style={{
    //         width: '24px',
    //         height: '24px',
    //         borderRadius: '50%',
    //         backgroundColor: '#c4c4c4',
    //         display: 'flex',
    //         justifyContent: 'center',
    //         alignItems: 'center',
    //         fontSize: '8px',
    //         fontWeight: 'bold',
    //         color: 'white'
    //       }}>
    //         AS
    //       </div>
    //     </div>
  
    //     <div style={{
    //       fontSize: '12px',
    //       fontWeight: 'bold',
    //       marginBottom: '4px',
    //       color: '#000',
    //       paddingLeft:'15px',
    //       paddingRight: '12px'
    //     }}>
    //       {task.title}
    //     </div>
  
    //     <div style={{
    //       fontSize: '10px',
    //       color: 'grey',
    //       backgroundColor: '#f1f3f5',
    //       marginLeft:'10px',
    //       padding:'2px',
    //       borderRadius: '4px',
    //       textAlign: 'left',
    //       display: 'inline-block'
    //     }}>
    //       {task.tag}
    //     </div>
    //   </div>
    //     ))}
    //   </div>

    //   {/* Low Priority Column */}
    //   <div class="card">
    //   <div style={header}>Low</div>
    //     {lowPriorityTasks.map(task => (
    //      <div class="show">
    //      <div style={{
    //        display: 'flex',
    //        justifyContent: 'space-between',
    //        alignItems: 'center',
    //        marginBottom: '4px'
    //      }}>
    //        <div style={{
    //          fontWeight: 'bold',
    //          paddingLeft:'4px',
    //          fontSize:'8px',
    //          color: '#333'
    //        }}>
    //          {task.id}
    //        </div>
    //        <div style={{
    //          width: '24px',
    //          height: '24px',
    //          borderRadius: '50%',
    //          backgroundColor: '#c4c4c4',
    //          display: 'flex',
    //          justifyContent: 'center',
    //          alignItems: 'center',
    //          fontSize: '8px',
    //          fontWeight: 'bold',
    //          color: 'white'
    //        }}>
    //          AS
    //        </div>
    //      </div>
   
    //      <div style={{
    //        fontSize: '12px',
    //        fontWeight: 'bold',
    //        marginBottom: '4px',
    //        color: '#000',
    //        paddingLeft:'15px',
    //        paddingRight: '12px'
    //      }}>
    //        {task.title}
    //      </div>
   
    //      <div style={{
    //        fontSize: '10px',
    //        color: 'grey',
    //        backgroundColor: '#f1f3f5',
    //        marginLeft:'10px',
    //        padding:'2px',
    //        borderRadius: '4px',
    //        textAlign: 'left',
    //        display: 'inline-block'
    //      }}>
    //        {task.tag}
    //      </div>
    //    </div>
    //     ))}
    //   </div>
    // </div>

