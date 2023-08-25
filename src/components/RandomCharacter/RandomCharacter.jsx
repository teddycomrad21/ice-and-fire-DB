import React, { useState, useEffect } from 'react';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import BooksSection from '../BooksSection/BooksSection';
import GotService from '../../services/gotService';
import { extractIdFromUrls, processArraySequentially, mergeBooksWithCharacters } from './randomCharacter.utils';
import { ReactComponent as Male } from '../../images/male.svg';
import { ReactComponent as Female } from '../../images/female.svg';

import { createUseStyles } from 'react-jss';

import styles from './randomCharacter.styles';

const useStyles = createUseStyles(styles);

const RandomCharacter = () => {
    const classes = useStyles();
    let gotService = new GotService();

    const [char, setChar] = useState({});
    const [characterBooks, setCharacterBooks] = useState([]);
    const [allBooks, setAllBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    function onError() {
        setError(true);
        setLoading(false);
    }

    const updateChar = () => {
        const id = Math.floor(Math.random()*140 + 25); // 25-140

        gotService.getCharacter(id)
            .then((randomCharacter => {
                if (randomCharacter.books.length !== 0) {
                    processArraySequentially(extractIdFromUrls(randomCharacter.books), gotService)
                        .then(responses => {
                            setCharacterBooks(responses);
                        })
                        .catch(onError);
                }
                setChar(randomCharacter);
                setLoading(false);
            }))
            .catch(onError);
    };

    useEffect(() => {
        gotService.getAllBooks()
            .then(response => {
                setAllBooks(response);
            })
            .catch(onError);

        updateChar();
    }, []);

    useEffect(() => {
        updateChar();
        let timerId = setInterval(updateChar, 1500000);

        return () => {
            clearInterval(timerId);
        }
    }, []);

    const errorMessage = error ? <ErrorMessage/> : null;
    const spinner = loading ? <Spinner/> : null;
    const showContent = !(loading || error);

    const { name, gender, born, died, culture } = char;
    const isMale = gender === 'Male';

    console.log(allBooks);
    console.log(mergeBooksWithCharacters(allBooks, characterBooks));

    return (
        <div className={classes.randomCharacter}>
            {errorMessage}
            {spinner}
            {showContent && (
                <>
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

                    <BooksSection allBooks={mergeBooksWithCharacters(allBooks, characterBooks)} />
                </>
            )}
        </div>
    );
};

export default RandomCharacter;