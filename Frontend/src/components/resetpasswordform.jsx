import React, { useState } from 'react';

/**
 * Formulario para restablecer la contraseña.
 * Permite ingresar una nueva contraseña y confirmarla.
 */
const ResetPasswordForm = ({ onNavigate }) => {
  // Estados para almacenar las contraseñas y mensajes
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    // Validar que ambas contraseñas coincidan
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    // Validar longitud mínima
    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    // Aquí se enviaría la nueva contraseña al backend
    console.log('Nueva contraseña enviada:', password);

    // Mostrar mensaje de éxito
    setMessage('Tu contraseña ha sido restablecida correctamente.');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className="reset-password-form">
      <h2>Restablecer contraseña</h2>

      {/* Formulario para nueva contraseña */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password">Nueva contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Ingresa tu nueva contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirmar contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirma tu nueva contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Restablecer contraseña</button>
      </form>

      {/* Mensajes de error o éxito */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {message && <p style={{ color: 'green' }}>{message}</p>}

      {/* Botón para volver al login */}
      <div style={{ marginTop: '10px' }}>
        <button
          type="button"
          onClick={() => onNavigate('login')}
          style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
        >
          Volver al inicio de sesión
        </button>
      </div>
    </div>
  );
};

export default ResetPasswordForm;

/**
 * Este componente permite restablecer la contraseña del usuario.
 * Incluye validaciones básicas y un botón para volver al formulario de login.
 * Recibe `onNavigate` como prop desde App.jsx para cambiar de vista.
 */
