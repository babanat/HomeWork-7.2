function curryFirstVariant(a) {
    return function(b) {
    return a*b
    }
    }
    const firstResult = curryFirstVariant(5)(5)
    console.log(firstResult)
    
///////////////////////////////////////////////////////////////////////////
    function currySecondVariant(func) { 
      return function(x) {
        return function(y) {
          return func(x, y);
        };
      };
    }
    function multiplyNumber(x,y) {
      return x * y;
    }
    const secondResult = currySecondVariant(multiplyNumber);
    
    console.log(secondResult(5)(2));
    