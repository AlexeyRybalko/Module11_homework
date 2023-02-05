function summa(a) {
    return function(b) {
      return a + b;
    };
  }
  
  console.log(summa(44)(2));