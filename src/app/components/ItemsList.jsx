import React from 'react';
import s from './itemsList.module.css';

function ItemsList({items, handleCLick, active, ...props}) {
    return (
        <ul className={s.root} style={{'marginTop': `${props.position * 29}px`}}>
            {items.map((el, i) =>
                <li
                    className={(active === i) ? s.item_active : s.item}
                    key={el.id}
                    onClick={() => {
                        handleCLick(i)
                    }}
                    onMouseEnter={() => {
                        handleCLick(i)
                    }}
                >
                    {el.title}
                </li>
            )}
        </ul>
    );
}

export default ItemsList;