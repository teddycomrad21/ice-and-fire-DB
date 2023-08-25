export default () => ({
    characterInfo: {
        background: '#C2B9D9',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        padding: 20,
        border: '1px solid #321189',
        marginBottom: 5,
        borderRadius: 5
    },
    titleContainer: {
        display: 'flex',
        justifyContent: 'center',

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
    charInfoList: {
        margin: 0,
        width: 230
    },
    charInfoItem: {
        color: '#4B4A49',
        fontSize: 16
    },
    active: {
        filter: 'brightness(80%)'
    }
});