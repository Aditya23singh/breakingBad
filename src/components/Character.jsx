import { Card, makeStyles, Tooltip, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    img: {
        height: 300,
        width: '100%',
        objectFit: 'cover'
    }
})

const Character = ({ item }) => {
    console.log(item);
    const classes = useStyle();
    return (
        <Card>
            <Tooltip title={
                    <>
                        <Typography>Name:  {item.name}</Typography>
                        <Typography>date of birth: {item.birthday}</Typography>
                        <Typography>Status: {item.status}</Typography>
                        <Typography>Nickname: {item.nickname}</Typography>
                        <Typography>Real Name: {item.portrayed}</Typography>
                    </>
                }
            
                arrow placement="top">
                <img src={item.img} className={classes.img} alt = "character" />
            </Tooltip>
        </Card>
    )
}

export default Character;