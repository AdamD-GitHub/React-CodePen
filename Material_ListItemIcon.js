/* Text from 
https://material-ui.com/api/list-item-icon/
*/
const {List, ListItem, ListItemText, ListItemIcon} = MaterialUI; 
// Place after this -----

const element = <List style={{ maxWidth: "20rem", backgroundColor: "coral" }}>
<ListItem button>
<ListItemIcon>
<i className="material-icons md-48">account_circle</i>
</ListItemIcon>
<ListItemText primary="Primary person" />
</ListItem>
<ListItem button>
<ListItemText secondary="Next person" />
<ListItemIcon>
<i className="material-icons md-48">account_box</i>
</ListItemIcon>
</ListItem></List>;

// Place before this -----
ReactDOM.render(element, document.querySelector("#root"));
