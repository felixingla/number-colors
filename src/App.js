import React, { useState, useEffect } from 'react';

const generateRandomNumbers = () => {
  const numbers = [];
  for (let i = 0; i < 100; i++) {
    numbers.push(Math.floor(Math.random() * 1000));
  }
  return numbers;
};

const BinarySearch = () => {
  const [numbers, setNumbers] = useState([]);
  const [searchNumber, setSearchNumber] = useState(null);
  const [lowIndex, setLowIndex] = useState(null);
  const [highIndex, setHighIndex] = useState(null);
  const [midIndex, setMidIndex] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  
  useEffect(() => {
    setNumbers(generateRandomNumbers().sort((a, b) => a - b));
    setSearchNumber(Math.floor(Math.random() * 1000));
  }, []);
  
  const handleSearch = () => {
    setIsSearching(true);
    setLowIndex(0);
    setHighIndex(numbers.length - 1);
    setMidIndex(null);
    setTimeout(binarySearch, 500);
  };
  
  const binarySearch = () => {
    const mid = Math.floor((lowIndex + highIndex) / 2);
    setMidIndex(mid);
    if (numbers[mid] === searchNumber) {
      setIsSearching(false);
      return;
    }
    if (numbers[mid] > searchNumber) {
      setHighIndex(mid - 1);
    } else {
      setLowIndex(mid + 1);
    }
    setTimeout(binarySearch, 500);
  };
  
  return (
    <div>
      <h2>List of Numbers</h2>
      <ul>
        {numbers.map((num) => (
          <li key={num}>{num}</li>
        ))}
      </ul>
      <div>
        <button onClick={handleSearch}>Search for {searchNumber}</button>
      </div>
      {isSearching && (
        <div>
          <p>Low Index: {lowIndex}</p>
          <p>High Index: {highIndex}</p>
          <p>Mid Index: {midIndex}</p>
          <p>Current Number: {numbers[midIndex]}</p>
        </div>
      )}
    </div>
  );
};

export default BinarySearch;
