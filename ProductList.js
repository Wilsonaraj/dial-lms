class ProductList extends React.Component {
 constructor(props) {
    super(props);
	this.handleClick = this.handleClick.bind(this);
	this.state = { isClicked: true, bgColorRecent: 'blue' };
	}
render() {
const recentStyles = {
        backgroundColor: this.state.bgColorRecent || '',        
    };
return (
<div className='ui unstackable items' color={this.props.color}>
<button style={recentStyles} onClick={this.handleClick}>Add</button>
</div>
);
}
componentDidMount() {
    //this.setState({ bgColorRecent: 'yellow' });
}
handleClick() {
   // e.preventDefault();
  //  console.log('The '+this.props.color+' was clicked.');
	if(this.state.isClicked){
	 this.setState({ bgColorRecent: 'red' });
	}else{
	this.setState({ bgColorRecent: 'blue' });
	}
		this.state.isClicked = !this.state.isClicked;
}
componentDidMount() {
console.log('called now.');
}
componentWillUnmount(){
console.log('removed now.');
}
}