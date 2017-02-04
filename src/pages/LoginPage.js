import React from 'react';

let LoginPage = {

    // redux reducer http://redux.js.org/docs/basics/Reducers.html
    reducer: function (state = {data:{}}, action) {
        switch (action.type) {
            case 'LOGIN_SUBMITED':
                alert(JSON.stringify(action));
                return state;
            default: return state;
        }
    },

    // function that returns the React component for the page
    pageFactory: function (store, sideEffects) {
        return React.createClass({
            getInitialState() {
                return {password: ''};
            },
            bindState(property) {
                return (event) => { this.setState({ [property]: event.target.value }); };
            },
            onSubmit(e) {
                e.preventDefault();
                store.dispatch({type:'LOGIN_SUBMITED', password: this.state.password});
            },
            render: function () {
                return <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" value={this.state.name} onChange={this.bindState('password')} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>;
            }
        });
    },
    
    // collection of side effect functions (ajax etc)    
    sideEffects: { 
    },

    // the route to match to this page
    route: 'login'
};
export default LoginPage;