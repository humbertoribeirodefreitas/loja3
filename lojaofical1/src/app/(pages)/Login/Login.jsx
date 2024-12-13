import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
import FLOR from '../img/flor.png';
import USER from '../img/user.png'
import {client} from '../../config/supabaseClient.js';

async function mongoLogin(){
  try {
    let collection = (await client.connect()).db("RedFlower").collection("Login");
    let list = collection.find({}).toArray();
    console.log(list);
  } catch (error) {
    console.error(error);
  }
}

const Login = () => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    if (!loginData.username || !loginData.password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    try {
      alert('Login realizado com sucesso!');

      navigate('/home');
    } catch (error) {
      console.error('Erro ao tentar fazer login:', error);
      setError('Erro ao tentar fazer login. Tente novamente.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='alignment'>
      <div className='main'>
        <div className="login-container">
          <div className="login-card">
            <form onSubmit={handleLogin}>
              <img src= {USER} alt="" />
              <h2>Seja bem-vindo</h2>
              {error && <p className="error">{error}</p>}

              <input
                type="text"
                id="username"
                name="username"
                value={loginData.username}
                placeholder='Username:'
                onChange={handleChange}
                required
              />

              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                placeholder='Senha:'
                onChange={handleChange}
                required
              />
              <button className='login_button' type="submit">Entrar</button>

              <p className="switch-text">
                Não tem conta?{' '}
                <button
                  type="button"
                  className="switch-button"
                  onClick={() => navigate('/signup')}
                >
                  Criar conta
                </button>
              </p>
            </form>
            
          </div>
          <img className='imagem' src={FLOR} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
