import React from 'react';
import axios from 'axios';
import { setPizzas as setPizzasAction} from './redux/actions/pizzas'
import { connect } from "react-redux";

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';



function App(props) {
  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      props.setPizzas(data.pizzas);
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" render={() => <Home items={props.items} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
    items: state.pizzas.items
})

const mapDispatchToProps = dispatch => ({
  setPizzas : (items) => dispatch(setPizzasAction(items))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
