export default () => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: 750,
        overflow: 'hidden',
        margin: '0 auto'
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
    cards: {
        display: 'flex',
        transition: 'transform 0.3s ease-in-out'
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: 200,
        height: 120,
        color: '#4B4A49',
        backgroundColor: '#C2B9D9',
        margin: [0, 5, 0, 5],
        borderRadius: 5,

        '& > svg': {
            width: 25,
            height: 25
        }
    },
    bookTitle: {
        fontSize: 15,
        margin: 0
    },
    bookInfo: {
        margin: 0
    },
    arrow: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 30,
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        color: '#1F1F1F',
        cursor: 'pointer',
        userSelect: 'none',
        borderRadius: 10
    },
    arrowLeft: {
        left: 0
    },
    arrowRight: {
        right: 0
    }
});