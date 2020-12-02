import './App.css';
import {connect} from 'react-redux'


function App(props) {
  return (
    <div className="App">
      <button onClick={() => props.decrement()}>-</button>
      <h1>{props.count}</h1>
      <button onClick={() => props.increment()}>+</button>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchtoProps = (dispatch) => {
  return {
    increment : () => dispatch({type: 'INCREMENT'}),
    decrement : () => dispatch({type: 'DECREMENT'})
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
