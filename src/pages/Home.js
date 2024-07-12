import React, { useEffect, useState } from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const [text, setText] = useState(' Building Networks ');

    useEffect(() => {
        const textLoad = () => {
            setTimeout(() => {
                setText(' Building Networks ');
            }, 0);
            setTimeout(() => {
                setText(' Make Referrals Easy ');
            }, 4000);
            setTimeout(() => {
                setText(' Connect. Refer. Grow. ');
            }, 8000);
        };

        textLoad();
        const interval = setInterval(textLoad, 20000);

        return () => clearInterval(interval);
    }, []);


    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <section>
            <div className="container">
                <span className="text first-text">FindRef...</span>
                <span className="text sec-text">{text}</span>
            </div>
            <div className='options'>
                <div className="search-div">
                    <div class="cont">
                        <input type="text" id="box" placeholder="Search Referral..." class="search__box"/>
                        <i class="fas fa-search search__icon" id="icon" onclick="toggleShow()"></i>
                    </div>
                </div>
                <div className="login-div">
                    <button class="button">
                        <span class="button-text" onClick={handleLoginClick}>Login</span>
                        <div class="fill-container"></div>
                    </button>
                </div>
            </div>
            <div className='air air1'></div>
            <div className='air air2'></div>
            <div className='air air3'></div>
            <div className='air air4'></div>
        </section>
    );
};

export default Home;
