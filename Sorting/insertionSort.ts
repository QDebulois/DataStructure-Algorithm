function insertionSort(arr: any[]): any[] {
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1
        while (j >= 0 && arr[j] > arr[j + 1]) {
            let tmp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = tmp
            j--
        }
    }
    return arr
}

let test:  any[] = [2, 6, 1, 0, 9, 8,]
let test2: any[] = ["tutu", "b", "c", "a", "titi", "toto", "tata", "d"]

console.log(insertionSort(test))
console.log(insertionSort(test2))