import React from 'react';
import s from './header.module.css';
import {connect} from "react-redux";
import {changeTreeMode} from "../state/actions";
import ButtonSwitch from "../components/ButtonSwitch";

function Header({changeView}) {

    const handleChange = () => {
        changeView();
    };

    return (
        <div className={s.root}>Location tree <ButtonSwitch handleChange={handleChange}/></div>
    );
}

const mapDispatchToProps = dispatch => ({
    changeView: () => {dispatch(changeTreeMode())}
});

export default connect(null, mapDispatchToProps)
(Header);