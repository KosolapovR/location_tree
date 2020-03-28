import React from 'react';
import s from './buttonSwitch.module.css'
function ButtonSwitch({handleChange}) {
    return (
        <label className={s.switch}>
            <input type="checkbox" onChange={handleChange}/>
            <span className={`${s.slider} ${s.round}`}></span>
        </label>
    );
}

export default ButtonSwitch;