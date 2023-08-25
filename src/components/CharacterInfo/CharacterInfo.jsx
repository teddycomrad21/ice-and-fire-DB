import React from 'react';
import { createUseStyles } from 'react-jss';
import { ReactComponent as Blank } from '../../images/blank.svg';
import { ReactComponent as Male } from '../../images/male.svg';
import { ReactComponent as Female } from '../../images/female.svg';

import styles from './characterInfo.styles';

const useStyles = createUseStyles(styles);

const CharacterInfo = ({ character, activeCharacterId }) => {
    const classes = useStyles();
    const { name, gender, born, died, culture } = character;
    const isMale = gender === 'Male';

    return (
        <div className={classes.characterInfoContainer}>
            {!activeCharacterId ? (
                <div className={classes.svgContainer}><Blank /></div>
            ) : (
                <div className={classes.characterInfo}>
                    {isMale ? <Male /> : <Female />}
                    <h3 className={classes.title}>{name}</h3>
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
            )}
        </div>
    );
};

export default CharacterInfo;