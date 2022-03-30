//Multiple Choices
1.True
2.False
3.True
4.3.{foo: 1, bar: 2}
5.4.'The quick brown fox jumps over the lazy dog.’
6.1.undefined
7.4.Error
8.2.[1, 23, 4]
9.1.3
10.2.a = 3, b = 12
11.1.{name: “MindX”}
12.1.[1, 2, 3, 4, 5]
13.4.16



// Ex1
const reverseString = () => {
    let a = prompt();
    let b = a.split('').reverse()
    let c = b.join('')
    console.log(c)
}

reverseString()


//Ex2

let arr = [1, 2, 4, 5, 1, 3, 3, 5]
const deleteElements = () => {
    let newArr = arr.reduce((result, item) => {
        if(result.indexOf(item) === -1) {
            result.push(item)
        }
        return result
    }, [])

    console.log(newArr)
}

deleteElements()



// Ex3
let array = [ 1, 2, 3, 4, 7, 4, 5]

function arr(array){
    array.sort()

    let max 
    let number = 0
    let count = 1

    for (let i = 0; i < array.length; i++) {
        if (array[i] == array[i+1]) {
            count++
        } else {
            if (number < count) { 
                max = array[i]
                number = count  
            }
            count = 1
        }
    }

    console.log( `Phần tử ${max} xuất hiện nhiều nhất với ${number} lần`)
}

arr(array)
