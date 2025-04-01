const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = mynums.map( (nums)=> (nums +10) )

const newNums = mynums
                    .map( (num) => num*10)
                    .map( (num) => num +1)
                    .filter( (num) => num >= 40)  

console.log(newNums);
