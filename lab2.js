function waitingFn(TimeinMs) {
const futureTime = Date.now() + TimeInMs;
while (futureTime > Date.now()) {


}

} 

debugger;
waitingFn(3000);



console.log("Function call has just ended");