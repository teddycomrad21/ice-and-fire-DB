export default () => ({
    infoContainer: {
        background: '#C2B9D9',
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '25%'
    },
    logoContainer: {
        display: 'flex',

        '& > svg': {
            width: 50,
            height: 50
        }
    },
    heading: {
        color: '#4B4A49',
        fontSize: 26,
        margin: 0
    },
    info: {
        color: '#4B4A49',
        fontSize: 14,
        marginLeft: 10
    }
});