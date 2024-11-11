import { useState } from 'react';
import "./Header.scss";
import Home from "../../Pages/Home.jsx";
import AboutUs from "../../Pages/AboutUs.jsx"
import Articles from "../../Pages/Articles.jsx";
import Services from "../../Pages/Services.jsx";
import Clients from "../../Pages/Clients.jsx";
import Contacts from "../../Pages/Contacts.jsx";
import Faq from "../../Pages/Faq.jsx";
import Bid from "../../Pages/Bid.jsx";

export default function Header(props) {

  const [ content, setContent ] = useState(<Home></Home>)

  function handleClick(type) {
    setContent(type)
  }

  return (
    <>
      <header className="header">
      <img src="https://img.freepik.com/free-photo/close-up-businessman-with-digital-tablet_1098-549.jpg?ga=GA1.1.1284052089.1726738623&semt=ais_hybrid" />
      <div className="header-inner">
        <h1><a href="">EMS</a></h1>
        <div className="sidebar">
            <span>
            <p onClick={() => handleClick(<Home></Home>)}>Главная</p>
            <p onClick={() => handleClick(<AboutUs></AboutUs>)}>О нас</p>
            <p onClick={() => handleClick(<Services></Services>)}>Услуги</p>
            <p onClick={() => handleClick(<Articles></Articles>)}>Статьи</p>
            <p onClick={() => handleClick(<Clients></Clients>)}>Клиенты</p>
            <p onClick={() => handleClick(<Contacts></Contacts>)}>Контакты</p>
            <p onClick={() => handleClick(<Bid></Bid>)}>Онлайн заявка</p>
            <p onClick={() => handleClick(<Faq></Faq>)}>Частые вопросы</p>
            </span>
        </div>
      </div>
    </header>
    { content }
    </>
  );
}
