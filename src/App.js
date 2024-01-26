import React, { useState } from 'react';

export default function Characterstats() {
  const [character, setCharacter] = useState({
    name: 'Gandalf',
    strength: 10,
    intelligence: 18,
    charisma: 16
  });

  function handleChange(e) {
    setCharacter({
      ...character,
      [e.target.name]: e.target.value
    });
  }

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'white',  
  };

  const formContainerStyle = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '300px',
    width: '100%',
    padding: '20px',
    boxSizing: 'border-box',
    backgroundColor: '',  
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.8)', 
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
  };

  const inputStyle = {
    padding: '8px',
    margin: '8px 0',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box',
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <label style={labelStyle}>
          Strength:
          <input
            name="strength"
            value={character.strength}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Name:
          <input
            name="name"
            value={character.name}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Intelligence:
          <input
            name="intelligence"
            value={character.intelligence}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Charisma:
          <input
            name="charisma"
            value={character.charisma}
            onChange={handleChange}
            style={inputStyle}
          />
        </label>
      </div>
    </div>
  );
}
