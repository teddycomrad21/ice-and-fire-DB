export default () => ({
    characterInfoContainer: {
        width: '70%',
        height: 800,
        background: '#C2B9D9',
        borderRadius: 5,
        position: 'relative',
        padding: [20, 20, 20, 40],

        '& svg': {
            width: 100,
            height: 100,
            marginTop: 50
        }
    },
    svgContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    titleContainer: {
        display: 'flex'
    },
    characterInfo: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #321189',

        '& > svg': {
            width: 150,
            height: 150,
            margin: 0,
        }
    },
    title: {
        color: '#4B4A49',
        fontSize: 24,
        margin: 0
    },
    charInfoItem: {
        color: '#4B4A49',
        fontSize: 16
    }
});