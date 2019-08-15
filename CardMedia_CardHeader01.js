/* CardHeader and CardMedia from 
https://material-ui.com/api/card-header/
https://material-ui.com/api/card-media/
*/
const {Typography, Button, Card, CardMedia, CardContent, CardActions, CardHeader, Avatar,IconButton} = MaterialUI;
// Place after this -----

const element= <><Card style={{ maxWidth:"20rem" }}>
<CardHeader
avatar={<Avatar>SL</Avatar>}
action={<IconButton><i className="material-icons md-12">beach_access</i></IconButton>}
title="Sea Life"
subheader="September 14, 2016"/>
        
<CardMedia style={{ height: 0, padding: '40% 80%'}} image="https://airplantstore.com/wp-content/uploads/2018/10/IMG_2968-e1539744704333.jpg"
title="shells"/>
<CardContent>
<Typography gutterBottom variant="headline"
component="h2">Unicorn Shells</Typography>
<Typography component="p">Marine snails having a
prominent spine on the lip of the shell</Typography>
</CardContent>
<CardActions><Button size="small"
color="primary">Go to Topic</Button></CardActions>
</Card></>;

// Place before this -----
ReactDOM.render(element, document.querySelector("#root"));

