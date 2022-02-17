const inputvariable= {
    inpv : 0};
Object.defineProperty(inputvariable, "setvalue", {
        set : function (value) {this.inpv=value;}
      });
Object.defineProperty(inputvariable, "getvalue", {
        get : function () {return this.inpv;}
      });
function OnchangeTextbox()
{
var x=document.getElementById("textid");
inputvariable.setvalue=x.value;
document.getElementById("div1").innerHTML =inputvariable.getvalue;
}   
setInterval(function(){
                       
                        inputvariable.setvalue= Math.floor((Math.random() * 100) + 1);
                        document.getElementById("div1").innerHTML =inputvariable.getvalue;
                        document.getElementById("textid").value=inputvariable.getvalue;
                    }, 10000);




