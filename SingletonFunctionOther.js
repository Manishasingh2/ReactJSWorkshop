var singletonObject = (function () {
    var instance;
    function createInstance(name,age,designation,salary) {
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
    }
    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance("Tom",50,"Developer",450000);
            }
            return instance;
        }
    };
})();
var instance1 = singletonObject.getInstance();
var instance2 = singletonObject.getInstance();
console.log("Only single object will be created:" + (instance1 === instance2));
