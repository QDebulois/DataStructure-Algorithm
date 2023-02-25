namespace insertionSort {

    export function insertionSort(arr: any[]): any[] {
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

}