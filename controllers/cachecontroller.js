class cacheController{
    static heavyComputation(){
        let temp = 0;
        for(let i=0; i<100000; i++){
            temp = (Math.random()*5342)%i
        }
        return 123;
    }
}

module.exports = cacheController;