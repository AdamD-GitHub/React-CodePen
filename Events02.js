/*must have the event (e), but you can have anything else after it.
*/
const {Button} = MaterialUI; 

const element = <Button variant="contained"
color="primary" onClick={(e) =>
this.handleClick(e, 'abc', 123)}>Log 3
things</Button>;
handleClick = (e, arg1, arg2) =>
{console.log(e, arg1, arg2);};

ReactDOM.render(element, document.querySelector("#root"));
