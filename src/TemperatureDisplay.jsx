import React from 'react';

function TemperatureDisplay({ temperature }) {
let message = '';
let color = '';

if (temperature < 15) {
message = 'Hace frío';
color = 'blue';
} else if (temperature >= 15 && temperature <= 25) {
message = 'Temperatura agradable';
color = 'green';
} else {
message = 'Hace calor';
color = 'red';
}

return (
<div style={{ color }}>
Temperatura: {temperature}°C - {message}
</div>
);
}

export default TemperatureDisplay