class Person extends React.Component {
 constructor(props) {
    super(props);
	}
render() {
return (
<div className='person'>
  <h2>Name:{this.props.name}</h2>
   <h2>Age:{this.props.age}</h2>
   <ProductList color={this.props.color}/>
</div>
);
}
}