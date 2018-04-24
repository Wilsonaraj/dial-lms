
 class App extends React.Component {
  render(){
    return (
// var app =(
  <div>
<Person name="Sherlock" age='33' color='#ff0' />
 <Person name="Hanna" age='31' color='#999'/>

    </div>
)
}
}
ReactDOM.render(
  <App/>,
 document.getElementById('app')
);