/* ListItem from 
https://material-ui.com/api/list-item/
*/
const {List, ListItem} = MaterialUI; 
// Place after this -----

const element = <><List style={{maxWidth:'20rem', backgroundColor:'hsl(15, 80%, 80%)'}}>
  <ListItem>Not clickable</ListItem>
  <ListItem divider='true'></ListItem> 
  <ListItem button>Clickable button.</ListItem>
</List>
<List component="nav">
  <ListItem button>New list in a nav</ListItem>
</List></>;

// Place before this -----
ReactDOM.render(element, document.querySelector("#root"));
