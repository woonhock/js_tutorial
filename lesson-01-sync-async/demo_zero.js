const second = () => {
    setTimeout(() => {
      console.log("Async Hey There!");
    }, 2000);
  };
  
  const first = () => {
    console.log("Hey, there!");
    second();
    console.log("The end");
  };
  
  first();