/* Paper from 
https://material-ui.com/api/paper/
*/
const {Typography, Paper, Button} = MaterialUI;
// Place after this -----

const element = <Paper component='blockquote' elevation={20} square={true}>
        
<Typography variant='h2' gutterBottom >Paper project</Typography>
<Button variant='outlined' style={{margin: "-10px 0 5px 8px" }}>Enter</Button>
</Paper>;

// Place before this -----
ReactDOM.render(element, document.querySelector("#root"));
