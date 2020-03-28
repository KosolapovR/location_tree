import React from 'react';
import Header from "./app/view/Header";
import Content from "./app/view/Content";
import s from './app.module.css';

function App() {
    return (
        <div className={s.wrapper}>
            <Header/>
            <Content/>
        </div>
    );
}

export default App;
