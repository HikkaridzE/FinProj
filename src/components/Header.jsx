import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { Context } from '..'

function Header() {
  const { store } = useContext(Context)
  return (
    <header>
      <div>
        <img width={30} height={30} src='/assets/svg/bicycle-logo.svg' alt="Иконка сайта"></img>
        <h3>FindHelper</h3>
      </div>
      <Link to="/">
        <button type="button" className="btn btn-dark">Главная</button>
      </Link>
      {store.isAuth ? (
        <>
          <button  className="btn btn-success">{store.user.email}</button>
          <Link to="/">
            <button onClick={() => store.logout()} type="button" className="btn btn-dark">Выйти</button>
          </Link>
        </>
      ) : (
        <>
          <Link to="/login">
            <button type="button" className="btn btn-dark">Логин</button>
          </Link>
          <Link to="/registration">
            <button type="button" className="btn btn-dark">Регистрация</button>
          </Link>
        </>
      )}
    </header>
  )
}

export default Header
