import React from 'react';
import { render } from 'react-dom';

const Privacy = () => <div className="privacy-container">
    <h3>Privacy Page</h3>
    <p>This is the Privacy page container el</p>
</div>;

render(<Privacy />, document.getElementById('privacy-root'));