const {TextField} = MaterialUI;

const element= <> <TextField label="Brand"
placeholder="Brand" name="brand"/><br/>
<TextField label="Notes" placeholder="Notes"
name="model" helperText='write anything you like' multiline />
</>;

ReactDOM.render(element, document.querySelector("#root"));
