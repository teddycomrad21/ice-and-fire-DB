import React from 'react';
import HeaderInfo from '../HeaderInfo/HeaderInfo';
import RandomCharacter from '../RandomCharacter/RandomCharacter';

import { createUseStyles } from 'react-jss';

import styles from './header.styles';

const useStyles = createUseStyles(styles);

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <HeaderInfo data-testid="header-info" />
            <RandomCharacter data-testid="random-character" />
        </div>
    );
};

export default Header;