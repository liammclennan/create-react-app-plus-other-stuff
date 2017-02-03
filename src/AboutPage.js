import React from 'react';

export function AboutReducer(state = {data:{}}, action) {
    switch (action.type) {
        case 'STUFF_FROM_WORLD_BANK':
            return { data: action.data };
        default: return state;
    }
}

export function AboutPageFactory(store, sideEffects) {
    return class AboutPage extends React.Component {
        render() {
            var data = store.getState().data;
            return <div>{ data['user-agent'] ? data['user-agent'] : 'Loading...'}</div>;       
        }
        constructor(props) {
            super(props);
            sideEffects.onLoad();
        }
    }
}

export function aboutSideEffectsFactory(store) {
    return { 
        onLoad: function () {
            fetch('https://httpbin.org/user-agent')
                .then(response => response.json()).then(data => store.dispatch({type:'STUFF_FROM_WORLD_BANK',data:data}));
        }
    };
};
