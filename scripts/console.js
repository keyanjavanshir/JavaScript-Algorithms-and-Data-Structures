funtion nextInLine(arr, item) {
    arr.push(item)
    item = arr.shift()
    
    return item
}

nextInLine(testArray, 6);