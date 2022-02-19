var inputvariable= {};
Object.defineProperty(inputvariable, "inputvalue", {
    get : function (){
      
      return value;
    },
    set : function (inputValue){
      
      document.getElementById("textid").value=inputValue;
      value=inputValue;

    },
        
});

function OnchangeTextbox(event)
{
    inputvariable.inputvalue=event.target.value;
    document.getElementById("div1").innerHTML =inputvariable.inputvalue;
}   
setInterval(function(){
                       
                        inputvariable.inputvalue= Math.floor((Math.random() * 100) + 1);
                        document.getElementById("div1").innerHTML =inputvariable.inputvalue;
                        
                    }, 10000);




