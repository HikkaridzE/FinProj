import React, { useContext } from 'react'
import { Context } from '../index'
import { Link } from 'react-router-dom'


const Main = () => {
  const { store } = useContext(Context)
  return (
    <main className=" container container-main">
      {store.isAuth ? (
        <>
          <Link to="/newcase">
            <button type="button" className="btn btn-danger btn-lg btn-block">
              Заявить о краже
            </button>
          </Link>
          <Link to="/cases">
            <button type="button" className="btn btn-danger btn-lg btn-block">
              Сообщения о кражах
            </button>
          </Link>
          <Link to="/officers">
            <button type="button" className="btn btn-danger btn-lg btn-block">
              Ответственные сотрудники
            </button>
          </Link>
        </>
      ) : (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text">
              Добро пожаловать на сайт по поиску велосипедов! Подать заявку можно по кнопке снизу.
             </p>
             <p>
              Сделать запрос о краже велосипеда возможно и без авторизации на сайте
             </p>
            <Link to="/newcase">
              <button type="button" className="btn btn-danger btn-lg btn-block">
                Заявить о краже
              </button>
            </Link>
           </div>
         </div>
      )}
      <div>
       <img className="d-block w-100" src="/assets/img/kraja_one.jpg" alt="" />
       <div class="card">
        <div class="card-body">
         <li>После получение запроса о пропаже, наш сервис начинает работу в считанные минуты</li>
        </div>
      </div>
      <img className="d-block w-100" src="/assets/img/kraja_two.jpg" alt="" />
       <div class="card">
        <div class="card-body">
          <li>Сотрудники связываются с нашими клиентами и помогают в любое время дня</li>
          <li>Любая новая информация о вашем велосипеде, будет передана сотруднику и после чего он сразу сообщит её нашему клиенту</li>
        </div>
      </div>
      <img className="d-block w-100" src="/assets/img/kraja_three.jpg" alt="" />
       <div class="card">
        <div class="card-body">
          <li>Мы гарантируем что найдем ваш велосипед в считанные сроки</li>
          <li>Если же вы останетесь разочарованны нашим сервисом, то мы вернем вам деньги</li>
        </div>
      </div>
      </div>
    </main>
  )
}

export default Main
