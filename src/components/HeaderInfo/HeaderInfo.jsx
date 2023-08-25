import React from 'react';
import { createUseStyles } from 'react-jss';
import { ReactComponent as CrossedSwords } from '../../images/crossedSwords.svg';

import styles from './headerInfo.styles';

const useStyles = createUseStyles(styles);

const HeaderInfo = () => {
    const classes = useStyles();
    const header = 'Game Of Thrones DB';

    return (
        <div className={classes.infoContainer}>
            <div>
                <div className={classes.logoContainer}>
                    <CrossedSwords />
                    <h1 className={classes.heading}>
                        {header}
                    </h1>
                </div>
                <span className={classes.info}>A Song of Ice and Fire Character Knowledge Base</span>
            </div>
        </div>
    );
};

export default HeaderInfo;