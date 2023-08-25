import React, { useState, useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import GotService from '../../services/gotService';
import CharactersList from '../CharactersList/CharactersList';
import CharacterInfo from '../CharacterInfo/CharacterInfo';

import styles from './mainSection.styles';

const useStyles = createUseStyles(styles);

const MainSection = () => {
    const classes = useStyles();
    let gotService = new GotService();

    const [singleCharacter, setSingleCharacter] = useState({});
    const [characters, setCharacters] = useState([]);
    const [activeCharacterId, setActiveCharacterId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const showContent = !(loading || error);

    function onError() {
        setError(true);
        setLoading(false);
    }

    const handleCharacterClick = (id) => {
        setLoading(true);
        if (activeCharacterId === id) {
            setActiveCharacterId(null);
            setSingleCharacter({});
            setLoading(false);
        } else {
            setActiveCharacterId(id);

            gotService.getCharacter(id)
                .then(response => setSingleCharacter(response))
                .catch(onError)
                .finally(setLoading(false));
        }
    };

    useEffect(() => {
        gotService.getAllCharacters()
            .then(response => setCharacters(response))
            .catch(onError)
            .finally(setLoading(false));
    }, []);

    return (
        <div className={classes.container}>
            <CharactersList
                characters={characters}
                activeCharacterId={activeCharacterId}
                handleCharacterClick={handleCharacterClick}
                errorMessage={errorMessage}
                spinner={spinner}
                showContent={showContent}
            />
            <CharacterInfo
                character={singleCharacter}
                activeCharacterId={activeCharacterId}
            />
        </div>
    );
};

export default MainSection;