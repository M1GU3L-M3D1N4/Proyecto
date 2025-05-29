import React from 'react';
import LoginForm from './components/loginform'; // Importamos el componente LoginForm

function App() {
  return (
    <div>
      <h1>Pantalla de Inicio de Sesión</h1>
      <LoginForm />
    </div>
  );
}

export default App;
// Este es el componente principal de la aplicación que renderiza el formulario de inicio de sesión.
// El componente LoginForm incluye campos para el correo electrónico y la contraseña, un botón para mostrar/ocultar la contraseña, un checkbox para recordar la sesión y enlaces para recuperar la contraseña o registrarse.
// Además, el componente App incluye un título para la pantalla de inicio de sesión.
// El formulario está diseñado para ser simple y funcional, permitiendo a los usuarios iniciar sesión de manera rápida y eficiente.
// - Un botón para mostrar/ocultar la contraseña.
// - Un checkbox para recordar la sesión.
// - Enlaces para recuperar la contraseña o registrarse si no tienen cuenta.
// - Un botón para enviar el formulario.
// Este componente utiliza el estado local para manejar la visibilidad de la contraseña y proporciona una experiencia de usuario intuitiva y accesible.
