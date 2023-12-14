import React, { useRef, useState } from 'react'
import { useUsuario } from '../../context/UsuarioContext';
import { fetcher } from '../../utils/fetcher';
import { LoginStyled } from './Login.style';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const formRef = useRef();
    const { userLogged, setUserLogged, render, setRender } = useUsuario();
    const history = useHistory();
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            let user = await fetcher.getUser();
            if (user[0].email === email && user[0].password == password) {
                setUserLogged(true);
                history.push('/blog');
            }
            else {
                formRef.current.reset();
            }

        } catch (error) {
            console.error(error.message);
            return toast.error(`Failed to login. Username or password invalid`)

        }

    };

  return (
      <LoginStyled>
          <div className="loginContainer" >
              <div className="nameAndSubtitle">
                  <h2 className="authorName">Malu Costa</h2>
                  <h3 className="authorSubtitle">Nutricionista</h3>
              </div>
              <form onSubmit={handleLogin} ref={formRef}>
                  <div>
                      <label
                      className='Label'
                      htmlFor="email">E-mail</label>
                      <input
                          type="text"
                          name="email"
                          id="email"
                          required
                          placeholder="Seu e-mail"
                          onChange={(e) => setEmail(e.target.value)}
                          pattern='.*\S.*'></input>
                  </div>
                  <div>
                      <label
                      className='Label'
                      htmlFor="password">Senha</label>
                      <input
                          type="password"
                          name="password"
                          id="password"
                          required
                          placeholder="Sua senha"
                          onChange={(e) => setPassword(e.target.value)}
                          autoComplete="off"
                          pattern='.*\S.*'></input>
                  </div>
                  <button type='submit'>
                      <KeyIcon width={20} />
                      <span>Login</span>
                  </button>
              </form>
          </div>
      </LoginStyled>
  )
}

export default Login