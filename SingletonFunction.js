var singletonObject=(function Employee(name,age,designation,salary)
{
    var userName=name;
    var userAge=age;
    var userDesignation=designation;
    var userSalary=salary;
    return{
        userName:userName,
        userAge:userAge,
        userDesignation:userDesignation,
        userSalary:userSalary
    }
}("Tom",50,"Engineer",5000)) //cannot be able to make another object
console.log("Name"+singletonObject.userName);
console.log("Age"+singletonObject.userAge);
console.log("Designation"+singletonObject.userDesignation);
console.log("Salary"+singletonObject.salary);