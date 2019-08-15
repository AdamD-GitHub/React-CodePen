/*console.dir creates an object and you can use any of the JS object elements.
*/
const {Button} = MaterialUI; 

const handleClick = (e) => {
  console.info("Click");
  console.dir(e.currentTarget);
  document.querySelector('#b').innerHTML ='clicked';
  }
const element = <Button id='b'
variant='contained' color='secondary'
onClick={handleClick} >Button</Button>; 

ReactDOM.render(element, document.querySelector("#root"));
