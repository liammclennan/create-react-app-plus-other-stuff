import React from 'react';
import Link from 'react-router/lib/Link'

export function AboutPageFactory(store) {
    return function AboutPage(props) {
        return <div>About <Link to="/">Home</Link></div>;
    }
}