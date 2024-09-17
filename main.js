function sumDigPow(a, b){
    const eureka=[];
    for(i=a;i<=b;i++){
        const nums =String(i).split('').map(Number);
        const sumNum=nums.reduce((sum,num,index)=> sum+Math.pow(num,index+1),0);
        if (i===sumNum){
            eureka.push(i);
        }
    }
    return eureka;

}