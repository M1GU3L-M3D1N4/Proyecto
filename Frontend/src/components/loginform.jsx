import React, { useState } from 'react'; // Importamos React y useState para manejar estados

/**
 * Formulario de inicio de sesión.
 * Permite ingresar correo y contraseña, y navegar a otros formularios (registro, recuperación).
 */
function LoginForm({ onNavigate }) {
  // Estado para manejar la visibilidad de la contraseña
  const [showPassword, setShowPassword] = useState(false);

  // Función para alternar la visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form>
      <h2>Iniciar Sesión</h2>

      {/* Campo de correo electrónico */}
      <div>
        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" name="email" required />
      </div>

      {/* Campo de contraseña con ícono para mostrar/ocultar */}
      <div>
        <label htmlFor="password">Contraseña:</label>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            style={{ marginLeft: '5px' }}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>
      </div>

      {/* Checkbox para recordar sesión */}
      <div>
        <input type="checkbox" id="remember" name="remember" />
        <label htmlFor="remember">Recordarme</label>
      </div>

      {/* Botón para enviar el formulario */}
      <button type="submit">Ingresar</button>

      {/* Enlaces adicionales para navegar a otros formularios */}
      <div style={{ marginTop: '10px' }}>
        {/* Navega al formulario de recuperación */}
        <button
          type="button"
          onClick={() => onNavigate('recover')}
          style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
        >
          ¿Olvidaste tu contraseña?
        </button>
        <br />

        {/* Navega al formulario de registro */}
        <button
          type="button"
          onClick={() => onNavigate('register')}
          style={{ background: 'none', border: 'none', color: 'blue', textDecoration: 'underline', cursor: 'pointer' }}
        >
          ¿No tienes cuenta? Regístrate
        </button>
      </div>
    </form>
  );
}

export default LoginForm;

/**
 * Este componente LoginForm permite al usuario iniciar sesión.
 * Incluye navegación hacia:
 * - Formulario de recuperación de contraseña.
 * - Formulario de registro de cuenta.
 * Recibe `onNavigate` como prop desde App.jsx para cambiar de vista.
 */
