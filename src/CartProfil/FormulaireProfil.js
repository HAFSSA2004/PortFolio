import React, { useState } from 'react';
import './style.css';

export default function ProfileForm({ addProfile }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [profession, setProfession] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!image) {
      alert('Please upload an image.');
      return;
    }

    const newProfile = { name, age, profession, image: URL.createObjectURL(image) };
    addProfile(newProfile);

    setName('');
    setAge('');
    setProfession('');
    setImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '80vh' }}>
      <h1 className="profile-title text-center">List Profils</h1> {/* Title Added */}
      
      <form onSubmit={handleSubmit} className="form-container p-4 bg-white  shadow-lg" style={{ width: '100%', maxWidth: '500px' }}>
        <div className="mb-3">
          <label className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Enter the name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Age:</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setAge(e.target.value)}
            value={age}
            placeholder="Enter the age"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Profession:</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setProfession(e.target.value)}
            value={profession}
            placeholder="Enter the profession"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image:</label>
          <input
            type="file"
            className="form-control"
            onChange={handleImageChange}
          />
        </div>
        <div className="d-grid p-0">
          <input type="submit" style={{ backgroundColor: 'blue', border: 'none', padding: '5px', color: 'white', borderRadius: '5px', fontSize: '20px', fontFamily: 'sans-serif' }} value='Add Profile' />
        </div>
      </form>
    </div>
  );
}
