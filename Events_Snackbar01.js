const {Snackbar, Typography} = MaterialUI; 

class Sb extends React.Component {
state={open: true, message:'a message for 5 secs'};
handleClose = (e) => {
this.setState({ open: false });
};
render() {return <Snackbar style = {{width: 300,
color: 'green'}} open={this.state.open}
onClose={this.handleClose} autoHideDuration={5000}
message={this.state.message} />; }
}
const element = <Sb/> ;

ReactDOM.render(element, document.querySelector("#root"));
