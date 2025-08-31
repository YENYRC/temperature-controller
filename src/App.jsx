import React, { useState, useEffect } from 'react';
import TemperatureDisplay from './components/TemperatureDisplay';
import TemperatureControls from './components/TemperatureControls';
import HistoryList from './components/HistoryList';

function App() {
const [temperature, setTemperature] = useState(20);
const [history, setHistory] = useState(() => {
const savedHistory = localStorage.getItem('history');
return savedHistory ? JSON.parse(savedHistory) : [];
});

useEffect(() => {
localStorage.setItem('history', JSON.stringify(history));
}, [history]);

const increase = () => {
if (temperature < 40) setTemperature(temperature + 1);
updateHistory('Increase');
};

const decrease = () => {
if (temperature > 0) setTemperature(temperature - 1);
updateHistory('Decrease');
};

const reset = () => {
setTemperature(20);
updateHistory('Reset');
};

const updateHistory = (action) => {
setTimeout(() => {
const newHistory = [...history, { action, value: temperature, time: new Date().toLocaleTimeString() }];
setHistory(newHistory);
}, 1000); // Simula carga de 1 segundo
};

return (
<div>
<TemperatureDisplay temperature={temperature} />
<TemperatureControls increase={increase} decrease={decrease} reset={reset} />
<HistoryList history={history} />
</div>
);
}

export default App;