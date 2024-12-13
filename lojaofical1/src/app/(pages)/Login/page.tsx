/* eslint-disable @next/next/no-img-element */
import React from 'react';
import './Login.css'; 

export default function page() {

  const handleLogin = async (e:React.FormEvent) => {
    e.preventDefault();
    setError('');


    try {
      alert('Login realizado com sucesso!');

      navigate('/home');
    } catch (error) {
      console.error('Erro ao tentar fazer login:', error);
      setError('Erro ao tentar fazer login. Tente novamente.');
    }
  };

 
  return (
    <div className='alignment'>
      <div className='main'>
        <div className="login-container">
          <div className="login-card">
            <form onSubmit={handleLogin}>
              <img src={"/img/logo.jpg"} alt="" />
              <h2>Seja bem-vindo</h2>
              {/* {error && <p className="error">{error}</p>} */}

              <input
                type="text"
                id="username"
                name="username"
                placeholder='Username:'
                required
              />

              <input
                type="password"
                id="password"
                name="password"
                placeholder='Senha:'
                required
              />
              <button className='login_button' type="submit">Entrar</button>

              <p className="switch-text">
                Não tem conta?{' '}
                <button
                  type="button"
                  className="switch-button"
                >
                  Criar conta
                </button>
              </p>
            </form>
            
          </div>
          <img className='imagem' src={"/flor.png"} alt="" />
        </div>
      </div>
    </div>
  );
};

