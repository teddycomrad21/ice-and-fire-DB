import React from 'react';
import { createUseStyles } from 'react-jss';
import CharacterListItem from '../CharacterListItem/CharacterListItem';

import mockCharList from './characterListUtils';

import styles from './characterList.styles';

const useStyles = createUseStyles(styles);

const CharactersList = ({
    characters,
    activeCharacterId,
    handleCharacterClick,
    errorMessage,
    spinner,
    showContent
}) => {
    const classes = useStyles();

    return (
        <div className={classes.charListContainer}>
            {errorMessage}
            {spinner}

            {showContent && characters.map(char => (
                <CharacterListItem
                    char={char}
                    handleCharacterClick={handleCharacterClick}
                    isActive={char.id === activeCharacterId}
                    key={char.id}
                    id={char.id}
                />
            ))}
        </div>
    );
};

export default CharactersList;