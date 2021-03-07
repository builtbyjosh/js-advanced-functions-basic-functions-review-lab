// Your code here
function saturdayFun(str = "roller-skate"){
    return `This Saturday, I want to ${str}!`
}

const mondayWork = function(str = "go to the office"){
    return `This Monday, I will ${str}.`
}

const wrapAdjective = function(style="*"){
    return function(adj="special"){
        return `You are ${style}${adj}${style}!`
    }
}

let Calculator = {
    add: function(a,b){return a+b}, 
    subtract: function(a,b){return a-b}, 
    multiply: function(a,b){return a*b}, 
    divide: function(a,b){return a/b}
}

function actionApplyer(int,arr){
    if(arr === []){
        return int
    } else {
        for(let i = 0; i < arr.length; i++){
            int = arr[i](int)
        }
        return int
    }
}