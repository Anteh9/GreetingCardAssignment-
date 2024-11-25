import React from 'react';

const GreetingCard = ({ title, message }) => {
    return (
        <div style={{
            border: '1px solid #ccc', 
            borderRadius: '8px', 
            padding: '10px', 
            margin: '10px', 
            backgroundColor: '#f9f9f9'
        }}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    );
};

export default GreetingCard;
