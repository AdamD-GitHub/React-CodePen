/* Dividers from 
https://material-ui.com/api/divider/
*/
const {Typography, Paper, Button, List, ListItem, Avatar, ListItemText, Divider} = MaterialUI;
// Place after this -----

const element = <> <Typography variant="h4">Cars</Typography>
<Divider />
<List style={{ maxWidth: "20rem" }}>
<ListItem button ><ListItemText inset primary="Audi e- tron" /></ListItem>
<Divider variant='inset' />
<ListItem button><ListItemText primary="Hyundai Kona"
/></ListItem>
<Divider variant='middle' />
<ListItem button><ListItemText primary="Tesla Model 3"
/></ListItem>
<Divider /> </List></>;

// Place before this -----
ReactDOM.render(element, document.querySelector("#root"));
