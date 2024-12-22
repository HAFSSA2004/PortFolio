import React, { useState } from 'react';
import './style.css';

export default function FormulaireProfile({ AjouterP }) {
  const [nom, setNom] = useState('');
  const [age, setAge] = useState('');
  const [profession, setProfession] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!image) {
      alert('Veuillez télécharger une image.');
      return;
    }

    const newP = { nom, age, profession, image: URL.createObjectURL(image) };
    AjouterP(newP);

    setNom('');
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
    <div className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
      <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-lg" style={{ width: '100%', maxWidth: '500px' }}>
        <div className="mb-3">
          <label className="form-label">Nom :</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setNom(e.target.value)}
            value={nom}
            placeholder="Entrez le nom"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Âge :</label>
          <input
            type="number"
            className="form-control"
            onChange={(e) => setAge(e.target.value)}
            value={age}
            placeholder="Entrez l'âge"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Profession :</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setProfession(e.target.value)}
            value={profession}
            placeholder="Entrez la profession"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image :</label>
          <input
            type="file"
            className="form-control"
            onChange={handleImageChange}
          />
        </div>
        <div className="d-grid p-0">
          <input type="submit" style={{backgroundColor:'blue',border:'none',padding:'5px',color:'white',borderRadius:'5px',fontSize:'20px',fontFamily:'sans-serif'}} value='  Add Profil' name="" id="" />
        </div>
      </form>
    </div>
  );
}
