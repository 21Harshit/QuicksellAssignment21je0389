import React, { useState, useEffect } from 'react';

function Apt() {
  const [data, setData] = useState([]); // State to hold API results
  const [groupedData, setGroupedData] = useState(null); // State to hold grouped data

  useEffect(() => {
    // Fetch data from API
    const fetchData = async () => {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const result = await response.json();
      setData(result.tickets); // Store API results in state
    };

    fetchData();
  }, []);

  // Function to group data by userId
  const groupByUserId = () => {
    const grouped = data.reduce((acc, post) => {
      const { userId } = post;
      if (!acc[userId]) {
        acc[userId] = []; // Create an array if userId doesn't exist in accumulator
      }
      acc[userId].push(post); // Add post to the correct group
      return acc;
    }, {});

    setGroupedData(grouped); // Store grouped data in state
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Posts</h1>
      {/* Button to trigger the grouping */}
      <button onClick={groupByUserId} style={{ marginBottom: '20px' }}>
        Group by User ID
      </button>

      {/* Display grouped data if exists, otherwise show original data */}
      {groupedData ? (
        Object.keys(groupedData).map((userId) => (
          <div key={userId} style={{ marginBottom: '30px' }}>
            <h2>User ID: {userId}</h2>
            <ul>
              {groupedData[userId].map((post) => (
                <li key={post.id}>
                  <strong>{post.title}</strong>
                  <p>{post.body}</p>
                </li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <ul>
          {data.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Apt;
