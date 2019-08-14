/* Text from 
https://material-ui.com/api/list-item-text/
*/
const {List, ListItem, ListItemText} = MaterialUI; 
// Place after this -----

const element = <List style={{maxWidth:'20rem', backgroundColor:'coral'}}>
<ListItem button>
<ListItemText primary = 'Primary text' secondary = {new Date().toLocaleString()} secondaryTypographyProps= {{color:'primary'}} inset/>
</ListItem> </List>;

// Place before this -----
ReactDOM.render(element, document.querySelector("#root"));
