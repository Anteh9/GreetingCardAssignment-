import React from 'react';
import GreetingCard from './components/GreetingCard';
import Header from './components/Header';

const App = () => {
    const greetings = [
        { title: 'Happy Birthday', message: 'Wishing you a wonderful day!' },
        { title: 'Congratulations', message: 'Well done on your achievement!' },
        { title: 'Thank You', message: 'Thank you for your kindness!' }
    ];

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
            <Header />
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {greetings.map((greeting, index) => (
                    <GreetingCard key={index} title={greeting.title} message={greeting.message} />
                ))}
            </div>
        </div>
    );
};

export default App;
