namespace dynamicArray {

    /**
     * Int32Array -2_147_483_648 à 2_147_483_647
     */
    export class DynamicArray {
        protected array: Int32Array = new Int32Array(1)
        protected firstIdx: number = 0
        protected lastIdx:  number = 0

        public length(): number {
            return this.lastIdx - this.firstIdx
        }

        public get(n: number): number | null {
            if (n >= this.length())    { return null }
            if (this.length() + n < 0) { return null }
            if (n >= 0) { return this.array[this.firstIdx + n] }
            else        { return this.array[this.length() + n] }
        }

        public set(n: number, value: number): boolean {
            if (n < 0 || n >= this.length()) { return false }
            this.array[this.firstIdx + n] = value
            return true
        }
    }

    /**
     * FILO
     */
    class Stack extends DynamicArray {
        private resizeStack(size: number): void {
            const newArray: Int32Array = new Int32Array(size)
            for (let i = 0; i < this.array.length; i++)
                { newArray[i] = this.array[i] }
            this.array = newArray
        }

        public push(value: number): boolean {
            if ( value < -2_147_483_648 || value > 2_147_483_647)
                { return false }
            if (this.lastIdx === this.array.length )
                { this.resizeStack(this.array.length * 2) }
            this.array[this.lastIdx] = value
            this.lastIdx++
            return true
        }

        public pop(): number | null {
            if (this.lastIdx === this.firstIdx)
                { return null }
            if (Math.ceil(this.array.length / 4) === this.lastIdx)
                { this.resizeStack(Math.ceil(this.array.length / 4)) }
            const value = this.array[this.lastIdx - 1]
            this.array[this.lastIdx - 1] = 0
            this.lastIdx--
            return value
        }
    }

}
