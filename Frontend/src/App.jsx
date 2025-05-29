import React, { useState } from 'react';
import LoginForm from './components/loginform';
import RegisterForm from './components/registerform';
import RecoverPasswordForm from './components/recoverpasswordform';
import ResetPasswordForm from './components/resetpasswordform';

// ...resto del código...
/**
 * Componente principal de la aplicación.
 * Controla la vista actual: login, registro, recuperación o restablecimiento.
 */
function App() {
  // Estado para controlar qué formulario se muestra
  const [currentForm, setCurrentForm] = useState('login'); // opciones: login, register, recover, reset

  // Función que cambia de formulario
  const handleNavigate = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="app">
      {/* Mostrar el formulario según el estado actual */}
      {currentForm === 'login' && <LoginForm onNavigate={handleNavigate} />}
      {currentForm === 'register' && <RegisterForm onNavigate={handleNavigate} />}
      {currentForm === 'recover' && <RecoverPasswordForm onNavigate={handleNavigate} />}
      {currentForm === 'reset' && <ResetPasswordForm onNavigate={handleNavigate} />}
    </div>
  );
}

export default App;
