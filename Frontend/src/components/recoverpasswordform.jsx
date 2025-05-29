import React, { useState } from 'react';

/**
 * Componente para recuperar contraseña.
 * Permite al usuario ingresar su correo electrónico y solicitar un enlace de recuperación.
 */
const RecoverPasswordForm = ({ onNavigate }) => {
  // Estado para almacenar el correo electrónico ingresado
  const [email, setEmail] = useState('');

  // Estado para mostrar un mensaje de éxito tras enviar el formulario
  const [message, setMessage] = useState('');

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Aquí es donde se enviaría el correo al backend
    console.log('Correo enviado:', email);

    // Mostrar mensaje de éxito (esto se actualizará cuando conectemos el backend)
    setMessage('Si este correo está registrado, recibirás un enlace para recuperar tu contraseña.');

    // Limpiar el campo de entrada
    setEmail('');
  };

  return (
    <div className="recover-password-form">
      <h2>Recuperar contraseña</h2>

      {/* Formulario de recuperación */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit">Enviar instrucciones</button>
      </form>

      {/* Mostrar mensaje de confirmación si se envió correctamente */}
      {message && <p style={{ color: 'green' }}>{message}</p>}

      {/* Enlace para volver al inicio de sesión */}
      <div style={{ marginTop: '10px' }}>
        <button
          type="button"
          onClick={() => onNavigate('login')}
          style={{
            background: 'none',
            border: 'none',
            color: 'blue',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          Volver al inicio de sesión
        </button>
      </div>
    </div>
  );
};

export default RecoverPasswordForm;

/**
 * Este componente permite al usuario solicitar un enlace de recuperación de contraseña.
 * Usa `onNavigate` para volver al login u otras vistas si se desea.
 */
