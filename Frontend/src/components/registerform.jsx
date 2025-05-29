import React, { useState } from 'react';

/**
 * Componente de registro de usuario.
 * Permite crear una cuenta ingresando nombre, correo y contraseña.
 */
const RegisterForm = ({ onNavigate }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Alternar visibilidad de contraseñas
  const togglePassword = () => setShowPassword(!showPassword);
  const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí irá la lógica de registro (se conectará al backend después)
    alert('Registro enviado');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear cuenta</h2>

      {/* Campo para nombre completo */}
      <div>
        <label htmlFor="name">Nombre completo:</label>
        <input type="text" id="name" name="name" required />
      </div>

      {/* Campo para correo electrónico */}
      <div>
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" required />
      </div>

      {/* Campo para contraseña con botón de mostrar/ocultar */}
      <div>
        <label htmlFor="password">Contraseña:</label>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            required
          />
          <button type="button" onClick={togglePassword}>
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>
      </div>

      {/* Campo para confirmar contraseña con botón de mostrar/ocultar */}
      <div>
        <label htmlFor="confirmPassword">Confirmar contraseña:</label>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            id="confirmPassword"
            name="confirmPassword"
            required
          />
          <button type="button" onClick={toggleConfirmPassword}>
            {showConfirmPassword ? '🙈' : '👁️'}
          </button>
        </div>
      </div>

      {/* Botón de registro */}
      <button type="submit">Registrarse</button>

      {/* Enlace para volver al login */}
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
          ¿Ya tienes cuenta? Inicia sesión
        </button>
      </div>
    </form>
  );
};

export default RegisterForm;

/**
 * Este componente permite a los usuarios registrarse con nombre, correo y contraseña.
 * Usa `onNavigate` para cambiar a la vista de login.
 */
