/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SingUp.css';


const SignUp = () => {
    const [cadastro, setCadastro] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e:React.FormEvent) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!cadastro.username || !cadastro.password) {
            setError('Por favor, preencha todos os campos.');
            return;
        }

        try {
            if (error) {
            setError('Erro ao criar conta: Verifique se o username já existe.');
            return;
            }

            setSuccess('Conta criada com sucesso!');
            setCadastro({ username: '', password: '' });
            setTimeout(() => navigate('/'), 2000);
        } catch (error) {
            console.error('Erro ao tentar cadastrar a conta:', error);
            setError('Erro inesperado. Tente novamente');
        }
    };


  return (
    <div className='alignment'>
      <div className='main'>
        <div className="singUp-container">
          <div className="singUp-card">
            <form onSubmit={handleSignUp}>
              <img src={'/img/user.png'} alt="" />
              <h2>Criar Conta</h2>
              {error && <p className="error">{error}</p>}
              {success && <p className="success">{success}</p>}

              <input
                type="text"
                id="username"
                name="username"
                value={cadastro.username}
                placeholder='Username:'
                required
              />

              <input
                type="password"
                id="password"
                name="password"
                value={cadastro.password}
                placeholder='Senha:'
                required
              />
              <button className='sing_button' type="submit">Registrar</button>
              <p className="s-text">
                Já tem conta?{' '}
                <button
                  type="button"
                  className="s-button"
                  onClick={() => navigate('/')}
                >
                  Fazer login
                </button>
              </p>
            </form>
            
          </div>
          <img className='imagem' src={"/img/flor.png"} alt="ada" />
        </div>
      </div>

    </div>
  );
};

export default SignUp;
