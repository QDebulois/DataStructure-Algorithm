namespace mergeSort {

    export function mergeSort(arr: any[], min: number, max: number) {
        if (min < max) { // Verification si base case non atteint.
            // Calcul de la moitié.
            const mid = Math.floor((min + max) / 2)

            // Récursivité lancée en partant d'abord dans la première moitié.
            mergeSort(arr, min, mid)
            mergeSort(arr, mid + 1, max) // Bien penser à + 1 mid pour pas superposer.

            // Duplication de la partie de l'array à trier, gauche & droite.
            const LLen = mid - min + 1 // Le + 1 du mid appartient à la première partie.
            const RLen = max - mid

            const LArr = new Array(LLen)
            const RArr = new Array(RLen)

            for (let i = 0; i < LLen; i++) {
                LArr[i] = arr[min + i]
            }

            for (let i = 0; i < RLen; i++) {
                RArr[i] = arr[mid + 1 + i] // Toujours le + 1 pour pas superposer
            }

            // Création des index pour trier.
            let LIdx = 0
            let RIdx = 0
            let arrIdx = min

            // Trie du plus petit au plus grand entre les deux copies créées précedemment
            // et attribution à l'array originelle.
            while (LIdx < LLen && RIdx < RLen) {
                if(LArr[LIdx] <= RArr[RIdx]) {
                    arr[arrIdx] = LArr[LIdx]
                    LIdx++
                } else {
                    arr[arrIdx] = RArr[RIdx]
                    RIdx++
                }
                arrIdx++
            }

            // On remplie avec les éléments restant.
            // D'abord gauche vu ques les plus petits sont au début, à gauche.
            while (LIdx < LLen) {
                arr[arrIdx] = LArr[LIdx]
                LIdx++
                arrIdx++
            }

            // Puis les plus grand, à droite.
            while (RIdx < RLen) {
                arr[arrIdx] = RArr[RIdx]
                RIdx++
                arrIdx++
            }
        }
    }

}