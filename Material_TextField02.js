/* Only allows user to enter 20 characters
*/

const {TextField} = MaterialUI;

const element= <> <TextField label="Brand"
placeholder="Brand" name="brand"/><br/>
<TextField label="Notes" placeholder="Notes"
name="model" helperText='write anything you like' multiline 
  inputProps={{maxlength:'20'}} />
</>;

ReactDOM.render(element, document.querySelector("#root"));
