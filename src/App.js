import React, { useState } from 'react';
import logoBlanco from './assets/img/logoblanco.png';
import './App.css';

const App = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setShowInfo(true);
    setSelectedButton(buttonName);
  };

  const handleReturnClick = () => {
    setShowInfo(false);
    setSelectedButton(null);
  };

  return (
    <div className={`app ${showInfo ? 'info-open' : ''}`}>
      <img src={logoBlanco} alt="Logo Blanco" className="logo" />

      <div className="buttons-container">
        {!showInfo && (
          <>
            <button className="button" onClick={() => handleButtonClick('BarrioSanJose')}>Barrio San Jose</button>
            <button className="button" onClick={() => handleButtonClick('Desamparados')}>Desamparados</button>
            <button className="button" onClick={() => handleButtonClick('Montecillos')}>Montecillos</button>
            <button className="button" onClick={() => handleButtonClick('Monserrat')}>Monserrat</button>
            <button className="button" onClick={() => handleButtonClick('Coyol')}>Coyol</button>
          </>
        )}

        {showInfo && (
          <div className="info-container">
            {selectedButton === 'Coyol' && (
              <>
                <p>Tenemos dos grupos a tu disposición:</p>

                <h3 style={{ color: '#A62928' }}>Lideres: Karen, Eli & Cristian</h3>
                <h3>Dirección:</h3> <p>Alajuela, El Coyol Urbanización La Amistad de la entrada 300 sur, 100 oeste y 25 sur. Segunda casa a la derecha portón café.</p>
                <h3>Contactos:</h3> <p>7109-3826 / 6098-1897 / 7297-3007</p>

                <h3 style={{ color: '#A62928' }}>Lideres: Randy & Stephanie</h3>
                <h3>Dirección:</h3> <p>Alajuela, El Coyol, calle Carolina, 600 metros norte del gimnasio River, Urb Bertilia el Coyol.</p>
                <h3>Contactos:</h3> <p>6486-1610 / 6420-5858</p>
              </>
            )}
            {selectedButton === 'Desamparados' && (
              <>
                <h3 style={{ color: '#A62928' }}>Lideres: Ariel & Stefany</h3>
                <h3>Dirección:</h3> <p>Alajuela, Desamparados, Residencial Cataluña, Casa 15P.</p>
                <h3>Contactos:</h3> <p>8658-5588 / 6050-2516</p>
              </>
            )}
            {selectedButton === 'BarrioSanJose' && (
              <>
                <h3 style={{ color: '#A62928' }}>Lideres: P.Joseph & P.Karen</h3>
                <h3>Dirección:</h3> <p>Alajuela, Barrio San Jose, 600mts Este de la iglesia Católica, calle Carranza, Impact Sede Alajuela.</p>
                <h3>Contactos:</h3> <p>8708-6609 / 8853-2934</p>
              </>
            )}
            {selectedButton === 'Monserrat' && (
              <>
                <h3 style={{ color: '#A62928' }}>Lideres: Brandon y Maria Laura</h3>
                <h3>Dirección:</h3> <p>Alajuela, Monserrat de Alajuela. De la entrada principal del polideportivo 200 m Sur y 25 m Oeste. Casa gris con portón negro.</p>
                <h3>Contactos:</h3> <p>8342-3304 / 8880-2479</p>
              </>
            )}
            {selectedButton === 'Montecillos' && (
              <>
                <h3 style={{ color: '#A62928' }}>Lideres: Angelica y Staicy</h3>
                <h3>Dirección:</h3> <p>Alajuela, Montecillos, Proyecto Fenix, diagonal a la Plaza de Deportes.</p>
                <h3>Contactos:</h3> <p>8470-2255 / 8492-6779</p>
              </>
            )}

            <button className="return-button" onClick={handleReturnClick}>Regresar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;