const {Button} = MaterialUI; 

const handleClick = () =>
{console.log('clicked');}
const element = <Button variant='contained'
color='secondary' onClick={handleClick}
>Button</Button>;

ReactDOM.render(element, document.querySelector("#root"));
