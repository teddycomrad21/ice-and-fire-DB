import React, { useState } from 'react';
import {
    CARD_WIDTH,
    CARD_MARGIN,
    CONTAINER_WIDTH,
    formatDate,
} from './booksSection.utils';
import { ReactComponent as Checkmark } from '../../images/checkmark.svg';
import { ReactComponent as Books } from '../../images/books.svg';

import { createUseStyles } from 'react-jss';

import styles from './booksSection.styles';

const useStyles = createUseStyles(styles);

const BooksSection = ({ allBooks }) => {
    const classes = useStyles();

    const totalCards = allBooks?.length;
    const totalCardWidth = CARD_WIDTH + CARD_MARGIN * 2;

    const maxTranslateX = 0;
    const minTranslateX = -(totalCardWidth * totalCards) + CONTAINER_WIDTH;

    const [currentTranslateX, setCurrentTranslateX] = useState(0);

    const handleLeftArrowClick = () => {
        if (currentTranslateX < maxTranslateX) {
            setCurrentTranslateX(currentTranslateX + CARD_WIDTH);
        }
    };

    const handleRightArrowClick = () => {
        if (currentTranslateX > minTranslateX) {
            setCurrentTranslateX(currentTranslateX - CARD_WIDTH);
        }
    };

    return (
        <div className={classes.container}>
            <div className={classes.titleContainer}>
                <Books />
                <h3 className={classes.title}>Books</h3>
            </div>
            <div>
                <div className={classes.cards} style={{ transform: `translateX(${currentTranslateX}px)` }}>
                    {allBooks?.map(book => (
                        <div className={classes.card} key={book.id}>
                            <h4 className={classes.bookTitle}>{book.name}</h4>
                            <p className={classes.bookInfo}>{book.publisher}</p>
                            <p className={classes.bookInfo}>{formatDate(book.released)}</p>
                            <p className={classes.bookInfo}>pages: {book.numberOfPages}</p>
                            {book.checked ? <Checkmark /> : null}
                        </div>
                    ))}
                </div>
                <div className={`${classes.arrow} ${classes.arrowLeft}`} onClick={handleLeftArrowClick}>&lt;</div>
                <div className={`${classes.arrow} ${classes.arrowRight}`} onClick={handleRightArrowClick}>&gt;</div>
            </div>
        </div>
    );
};

export default BooksSection;