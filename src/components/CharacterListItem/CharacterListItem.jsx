import React, { useRef } from 'react';
import { ReactComponent as Male } from '../../images/male.svg';
import { ReactComponent as Female } from '../../images/female.svg';
import { createUseStyles } from 'react-jss';

import styles from './characterListItem.styles';

const useStyles = createUseStyles(styles);

const CharacterListItem = ({ char, handleCharacterClick, isActive }) => {
    const classes = useStyles();
    const { name, gender, born, died, culture, id } = char;
    const isMale = gender === 'Male';
    const charRef = useRef();

    return (
        <button
            id={id}
            ref={charRef}
            onClick={() => handleCharacterClick(id)}
            className={`${isActive ? classes.active : classes.character}`}
        >
            <div className={classes.characterInfo}>                    
                <div className={classes.titleContainer}>
                    <h3 className={classes.title}>{name}</h3>
                    {isMale ? <Male /> : <Female />}
                </div>
                <ul className={classes.charInfoList}>
                    <li className={classes.charInfoItem}>
                        <span>Gender: </span>
                        <span>{gender}</span>
                    </li>
                    <li className={classes.charInfoItem}>
                        <span>Born: </span>
                        <span>{born}</span>
                    </li>
                    <li className={classes.charInfoItem}>
                        <span>Died: </span>
                        <span>{died}</span>
                    </li>
                    <li className={classes.charInfoItem}>
                        <span>Culture: </span>
                        <span>{culture}</span>
                    </li>
                </ul>
            </div>
        </button>
    );
};

export default CharacterListItem;