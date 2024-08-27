import React, { useState } from 'react';
function App() {
  const [image, setImage] = useState('https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg');  // Initialize state with the word 'Hello'
  const [caption, setCaption] = useState("Cute dog don't be afraid");  // Initialize state with the word 'Hello'

  const toggle = () => {
    // Use an if statement to toggle between the words 'Hello' and 'Goodbye'
    if (image === 'https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg') {
      setImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSVdVzgFiOFLXyhq4OwGT8ac16t6JAtHjRoQ&s');
      setCaption('RARGHHHHHH!!!!!');
    } else {
      setImage('https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_square.jpg');
      setCaption("Cute dog don't be afraid");
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Display the current image */}
      <img src={image} style={{ width: '50%', maxWidth: '500px' }} />
      {/* Display the current caption */}
      <p>{caption}</p>
      {/* Button to toggle the image and caption */}
      <button onClick={toggle} style={{ marginTop: '20px' }}>Boop its nose</button>
    </div>
  );
}

export default App;
