 do {
        var input1 = prompt("Enter the first number:");
        num1 = parseFloat(input1);
        document.getElementById("num1").textContent=input1
      } while (isNaN(num1) || input1 === null);

      // Prompt the user for the second number until valid input is provided
      do {
        var input2 = prompt("Enter the second number:");
        num2 = parseFloat(input2);
        document.getElementById("num2").textContent=input2
      } while (isNaN(num2) || input2 === null);

      let s=document.getElementById("sum-el")
      let result=0

      function add()
      {
        result= num1+num2
        s.textContent=result
    
      }

      function subt()
      {
        result= num1-num2
        s.textContent=result
      }

      function div()
      {
        result=num1/num2
        s.textContent=result
      }

      function mul()
      {
        result=num1*num2
        s.textContent=result
      }

      function AC()
      {
        do {
            var input1 = prompt("Enter the first number:");
            num1 = parseFloat(input1);
            document.getElementById("num1").textContent=input1
          } while (isNaN(num1) || input1 === null);
    
          // Prompt the user for the second number until valid input is provided
          do {
            var input2 = prompt("Enter the second number:");
            num2 = parseFloat(input2);
            document.getElementById("num2").textContent=input2
          } while (isNaN(num2) || input2 === null);

          s.textContent="Result"
      }

