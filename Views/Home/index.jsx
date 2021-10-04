import React from 'react';
import { render } from 'react-dom';

const Index = () => <div className="index-container">
    <h3>The Index Page</h3>
    <p>This is the Index page placeholder el</p>
</div>

render(<Index />, document.getElementById('index-root'));