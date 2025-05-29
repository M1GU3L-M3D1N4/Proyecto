import React, { useState } from 'react'; // Importamos React y useState para manejar estados

function LoginForm() {
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

      {/* Enlaces adicionales */}
      <div style={{ marginTop: '10px' }}>
        <a href="#">¿Olvidaste tu contraseña?</a><br />
        <a href="#">¿No tienes cuenta? Regístrate</a>
      </div>
    </form>
  );
}

export default LoginForm;
// Este componente LoginForm es un formulario de inicio de sesión simple que incluye:
// - Campos para correo electrónico y contraseña.  