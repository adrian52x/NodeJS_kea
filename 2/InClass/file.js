function doingSomething(anyFunction, name){
   anyFunction(name);
}

const running = name => console.log(`${name} is running`);

const drinking = name => console.log(`${name} is drinking`);

//running("Adrian")

//doingSomething(running, 'Adrian')
//doingSomething(drinking, 'Jhon')

doingSomething(() => console.log(`studying`));

const result = doingSomething(name => name + " is studying", "Adrian");
console.log(result);
