function majorityElement(arr){
    let elements = {},
        count = 0,
        majority = arr[0]

    for(const num of arr){
        elements[num] = elements[num] + 1 || 1
     //   elements[num] > arr.length/2
    }
    for(const n in elements) {
        if(elements[n]>count) {
            count = elements[n]
            majority = n
        }
        return majority
    }

}