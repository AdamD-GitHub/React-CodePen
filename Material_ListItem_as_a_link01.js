const {List, ListItem, ListItemText, ListItemIcon, Typography} = MaterialUI; 
// Place after this -----

const element = <> 
<Typography variant="h6">Cars</Typography>
<List dense style={{ maxWidth: "20rem", backgroundColor: "coral" }}>
<ListItem style={{ maxHeight: "3rem"}} button component="a" href='https://www.audiusa.com/models/audi-e-tron'>
<ListItemIcon style={{color:'white'}}><i className="material-icons md-48">directions_car</i> </ListItemIcon>
<ListItemText primary="Audi e-tron" /> </ListItem>
<ListItem style={{ maxHeight: "3rem"}} button component="a" href='https://www.hyundaiusa.com/kona-electric/index.aspx'>
<ListItemIcon><i className="material-icons md-48">directions_car</i></ListItemIcon>
<ListItemText primary="Hyundai Kona" /> </ListItem> </List> </>;

// Place before this -----
ReactDOM.render(element, document.querySelector("#root"));
