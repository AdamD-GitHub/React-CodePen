/* Avitars from 
https://material-ui.com/components/avatars/
*/
const {Typography, Paper, Button, List, ListItem, Avatar, ListItemText} = MaterialUI;
// Place after this -----

const element = <> <Typography variant="h6">Cars</Typography>
<List dense style={{ maxWidth: "20rem"}}>
<ListItem button>
<Avatar style={{marginRight:'.5rem'}}><i className="material- icons md-12">directions_car</i></Avatar>
<ListItemText primary="Audi e-tron" /></ListItem>
<ListItem button>
<Avatar style={{fontSize:'.8rem', marginRight:'.5rem',
color:'red'}}>HK</Avatar>
<ListItemText primary="Hyundai Kona" /></ListItem>
<ListItem button>
<Avatar
src='https://d3g9pb5nvr3u7.cloudfront.net/sites/539a28913f3c0
fd71ed4e43c/-1406957656/256.png'
style={{marginRight:'.5rem'}}></Avatar>
<ListItemText primary="Tesla Model 3" />
</ListItem></List></>;

// Place before this -----
ReactDOM.render(element, document.querySelector("#root"));

