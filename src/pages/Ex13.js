import React, { useState } from 'react';

function HelloWithoutJSX() {
  return React.createElement('h1', null, 'Hello, React!');
}

function HelloWithJSX() {
  return <h1>Hello, React!</h1>;
}

function HelloWithVariable() {
  const message = "Hello from variable!";
  return <h1>{message}</h1>;
}

function FruitList() {
  const fruits = ["Apple", "Banana", "Orange"];
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

function StyledMessage() {
  const style = {
    color: 'blue',
    backgroundColor: 'lightgray',
    padding: '10px',
    borderRadius: '5px'
  };
  
  return <div style={style}>This is a styled message!</div>;
}

function SumOfSquares() {
  const num1 = 3;
  const num2 = 4;
  const result = num1 * num1 + num2 * num2;
  
  return <p>The sum of squares of {num1} and {num2} is {result}.</p>;
}

function ConditionalGreeting() {
  const isMorning = false;
  
  return <h2>{isMorning ? "Good Morning" : "Good Evening"}</h2>;
}

function DayOfWeek() {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();
  
  return <p>Today is {days[today]}.</p>;
}

function PrimeChecker() {
  const number = 13;
  
  function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    
    if (n % 2 === 0 || n % 3 === 0) return false;
    
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  }
  
  return <p>{number} is {isPrime(number) ? "a prime number" : "not a prime number"}.</p>;
}

class TemperatureConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      celsius: 0,
      fahrenheit: 32
    };
  }
  
  handleCelsiusChange = (e) => {
    const celsius = e.target.value;
    this.setState({
      celsius: celsius,
      fahrenheit: (celsius * 9/5) + 32
    });
  }
  
  handleFahrenheitChange = (e) => {
    const fahrenheit = e.target.value;
    this.setState({
      celsius: (fahrenheit - 32) * 5/9,
      fahrenheit: fahrenheit
    });
  }
  
  render() {
    return (
      <div>
        <h2>Temperature Converter</h2>
        <div>
          <label>Celsius: </label>
          <input
            value={this.state.celsius}
            onChange={this.handleCelsiusChange}
            type="number"
          />
        </div>
        <div>
          <label>Fahrenheit: </label>
          <input
            value={this.state.fahrenheit}
            onChange={this.handleFahrenheitChange}
            type="number"
          />
        </div>
      </div>
    );
  }
}

function StringReverser() {
  const str = "React";
  const reversed = str.split('').reverse().join('');
  const isPalindrome = str.toLowerCase() === reversed.toLowerCase();
  
  return (
    <div>
      <p>Original: {str}</p>
      <p>Reversed: {reversed}</p>
      <p>Is Palindrome: {isPalindrome ? "Yes" : "No"}</p>
    </div>
  );
}

function RandomNumberGenerator() {
  const [number, setNumber] = useState(0);
  
  function generateRandom() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNum);
  }
  
  return (
    <div>
      <button onClick={generateRandom}>Generate Random Number</button>
      <p>Random Number: {number}</p>
    </div>
  );
}

function LeapYearChecker() {
  const year = 2025;
  
  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
  return <p>{year} is {isLeapYear(year) ? "a leap year" : "not a leap year"}.</p>;
}

class UserGreeting extends React.Component {
  render() {
    return <h2>Hello, {this.props.firstName} {this.props.lastName}!</h2>;
  }
}

function Ex13() {
  return (
    <div>
      <h1>EX-13 23BCE1064</h1>
      
      <h2>Q. 1</h2>
      <HelloWithoutJSX />
      <HelloWithJSX />
      <HelloWithVariable />
      
      <h2>Q. 2</h2>
      <FruitList />
      
      <h2>Q. 3</h2>
      <StyledMessage />
      
      <h2>Q. 4</h2>
      <SumOfSquares />
      
      <h2>Q. 5</h2>
      <ConditionalGreeting />
      
      <h2>Q. 6</h2>
      <DayOfWeek />
      
      <h2>Q. 7</h2>
      <PrimeChecker />
      
      <h2>Q. 8</h2>
      <TemperatureConverter />
      
      <h2>Q. 9</h2>
      <StringReverser />
      
      <h2>Q. 10</h2>
      <RandomNumberGenerator />
      
      <h2>Q. 11</h2>
      <LeapYearChecker />
      
      <h2>Q. 12</h2>
      <UserGreeting firstName="Mary" lastName="Iris" />
    </div>
  );
}

export default Ex13;
