const {TextField, Paper} = MaterialUI;

const today = new Date();
const tomorrow = new
Date(today.getTime()+1000*60*60*24);
const element= <> <Paper style={{padding:10,
margin:10}}>
<form noValidate>
<TextField id="date" label="Due date" type="date"
defaultValue={tomorrow.toISOString().slice(0,10)}
InputLabelProps={{shrink: true, }}/>
</form>
</Paper> </>;

ReactDOM.render(element, document.querySelector("#root"));
