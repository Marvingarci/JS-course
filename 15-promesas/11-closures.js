// create a useState like React
function useState(initialValue) {
    let state = initialValue;
  
    function setState(newValue) {
      state = newValue;
    }
  
    function getState() {
      return state;
    }
  
    return [getState, setState];
  }
  
  // Usage example:
  const [count, setCount] = useState(0);
  
  console.log(count()); // 0
  setCount(1);
  console.log(count()); // 1
