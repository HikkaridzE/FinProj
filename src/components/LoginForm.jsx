import React, { useContext, useState } from 'react'
import { Context } from '../index'
import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { store } = useContext(Context)
  const [message, setMessage] = useState('')

  async function handleLogin(e) {
    e.preventDefault()
    await store.login(email, password)
    setMessage(store.message)
  }

  return (
    <form className="container">
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="login">
          @
        </span>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          className="form-control"
          placeholder="E-mail"
          aria-label="Username"
          aria-describedby="login"
        />
      </div>
      <div className="input-group flex-nowrap">
        <span className="input-group-text" id="password">
          **
        </span>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="form-control"
          placeholder="Пароль"
          aria-label="Username"
          aria-describedby="password"
        />
      </div>

      <div className="container">
        <Link to="/">
          <button
            onClick={handleLogin}
            type="button"
            className="btn btn-primary"
          >
            Логин
          </button>
        </Link>
        <Link to="/registration">
          <button type="button" className="btn btn-outline-primary">
            Регистрация
          </button>
        </Link>
      </div>
      <p className="container">{message}</p>
    </form>
  )
}

export default observer(LoginForm)
