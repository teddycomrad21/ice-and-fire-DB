export default () => ({
    randomCharacter: {
        background: '#C2B9D9',
        borderRadius: 5,
        display: 'flex',
        padding: [20, 20, 20, 40],
        width: '70%'
    },
    titleContainer: {
        display: 'flex',

        '& > svg': {
            width: 50,
            height: 50
        }
    },
    title: {
        color: '#4B4A49',
        fontSize: 24,
        margin: 0
    },
    characterInfo: {
        display: 'flex',
        flexDirection: 'column',
        width: '30%',
        position: 'relative',

        '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 35,
            width: '2px',
            height: '100%',
            backgroundColor: '#321189',
            opacity: 0.2
        }
    },
    charInfoList: {
        margin: 0,
        width: 230,
        paddingLeft: 20
    },
    charInfoItem: {
        color: '#4B4A49',
        fontSize: 16
    },
    booksContainer: {
        marginLeft: 50,
        width: '70%'
    },
    booksGrid: {
        display: 'flex',
        width: 700
    },
    bookContainer: {
        height: 100,
        width: 100,
        border: '1px solid black',
        margin: 5
    },
    bookTitle: {
        color: '#4B4A49',
        fontSize: 10
    }
});