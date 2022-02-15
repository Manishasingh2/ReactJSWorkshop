function EmployeeDetails() {
    var name="Manisha";
    var age=24;
    var designation="Engineer";
    var salary=5000;
    function getIncrement(amt)
    {
        salary+=amt;
        console.log("Salary after increment is "+salary);
    }
   return{
    getName:function()
    {
        console.log("Name of the Employee is "+name);
    },
    getAge:function()
    {
        console.log("Age of the Employee is "+age);
    },
    getDesignation:function()
    {
        console.log("Designation of the Employee is "+designation);
    },
    getIncrement:getIncrement
}
}
  
  var Employee1 = EmployeeDetails();
  Employee1.getName();
  Employee1.getAge();
  Employee1.getDesignation();
  Employee1.getIncrement(500);