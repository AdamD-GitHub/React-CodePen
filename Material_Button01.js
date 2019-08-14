/* Buttons from 
https://material-ui.com/api/button/
*/
const {Button} = MaterialUI;
// Place after this -----

const element = <Button variant="contained" color="primary">Hello World</Button>;

// Place before this -----
ReactDOM.render(element, document.querySelector("#root"));
