export function CmToInches(value){
    const inches = value * 0.3937007874
    return  `${+(Math.round(inches + "e+2")  + "e-2")}in`
}
export function CmToFeets(value){
    const foot = value * 0.032808399
    return  `${Math.ceil(foot)}ft`
}

export function getTotalHeight(array, initialValue){
    const sum = array.reduce((previousValue, currentValue) => previousValue + +currentValue, initialValue)
    return sum
}