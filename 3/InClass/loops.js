const carBatterries = [0.32132, 0.23132, 0.1344, 0.6433]

carBatterries.forEach((battery,index) => {
    console.log(`Battery ${battery} goes to charger: ${index+1} `);
})

//const drainedBatteries = carBatterries.filter((battery) => {
//    if(battery < 0.5){
//        return true;
//    }
//})

const drainedBatteries = carBatterries.filter(battery => battery < 0.5)

console.log(drainedBatteries);