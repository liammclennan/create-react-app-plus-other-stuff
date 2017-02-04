import React from 'react';

function aboutReducer(state = {data:{}}, action) {
    switch (action.type) {
        case 'STUFF_FROM_WORLD_BANK':
            return { data: action.data };
        default: return state;
    }
}

function aboutPageFactory(store, sideEffects) {
    return class AboutPage extends React.Component {
        render() {
            var data = store.getState()["about"].data;
            return <div>{ data['user-agent'] ? data['user-agent'] : 'Loading...'}
                <button type="button" className="btn btn-default btn-lg">
                    <span className="glyphicon glyphicon-star" aria-hidden="true"></span> Star
                </button>
            </div>;       
        }
        constructor(props) {
            super(props);
            sideEffects.onLoad()
                .then(data => store.dispatch({type:'STUFF_FROM_WORLD_BANK',data:data}))
                .catch(err => {throw err});
        }
    }
}

const aboutSideEffects = { 
    onLoad: function () {
        return fetch('https://httpbin.org/user-agent')
            .then(response => response.json());
    }
};

let AboutPage = {

    // redux reducer http://redux.js.org/docs/basics/Reducers.html
    reducer: aboutReducer,

    // function that returns the React component for the page
    pageFactory: aboutPageFactory,
    
    // collection of side effect functions (ajax etc)    
    sideEffects: aboutSideEffects,

    // the route to match to this page
    route: 'about'
};
export default AboutPage;