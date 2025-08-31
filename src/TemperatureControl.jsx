import React from 'react';

function TemperatureControls({ increase, decrease, reset }) {
return (
<div>
<button onClick={decrease}>-</button>
<button onClick={increase}>+</button>
<button onClick={reset}>Reset</button>
</div>
);
}

export default TemperatureControls;