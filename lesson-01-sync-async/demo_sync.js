const second = () => {
    console.log("Async Hey There!");
  };
  
  const first = () => {
    console.log("Hey, there!");
    second();
    console.log("The end");
  };
  
  first();