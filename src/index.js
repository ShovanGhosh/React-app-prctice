import React from 'react';
import ReactDOM from 'react-dom';
const your="your lucky number";
const luckyno=Math.round((Math.floor(Math.random() * 11)+Math.floor(Math.random() * 100) + 1-Math.floor(Math.random() * 11))/Math.floor(Math.random() * 11));
ReactDOM.render(<div><h1 className="font1">Hello {your}!</h1>
<p className="heading">
    {luckyno}
</p>
</div>,
document.getElementById('root'));
