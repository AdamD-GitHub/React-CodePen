const {Button, AppBar, Typography, Toolbar, Paper} = MaterialUI; 

const element = <Paper><AppBar position="static">
<Typography variant="h5" >
My First Nav Bar
</Typography>
<Toolbar>
<Button variant="outlined"
color="inherit" href="https://www.centriq.com">Button 1</Button>
<Button variant="outlined"
color="inherit" href="https://www.google.com">Button 2</Button>
  </Toolbar>
</AppBar></Paper>; 

ReactDOM.render(element, document.querySelector("#root"));
