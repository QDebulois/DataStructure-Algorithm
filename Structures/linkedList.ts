namespace linkedList {

    type Node<T> = {
        value: T
        prevNode?: Node<T>
        nextNode?: Node<T>
    }

    export class LinkedList<T> {
        private firstNode?: Node<T>
        private lastNode?:  Node<T>
        private listLength = 0

        public count(): number {
            return this.listLength
        }

        public push(element: T): void {
            const newNode: Node<T> = {
                value: element,
                prevNode: this.lastNode ? this.lastNode : undefined
            }
            if (this.lastNode) {
                this.lastNode.nextNode = newNode
                this.lastNode = newNode
            } else {
                this.firstNode = newNode
                this.lastNode  = newNode
            }
            this.listLength++
        }

        public pop(): T | undefined {
            if (!this.lastNode) { return undefined }
            const returnedValue = this.lastNode.value
            if (this.lastNode.prevNode) {
                this.lastNode = this.lastNode.prevNode
            } else {
                this.lastNode  = undefined
                this.firstNode = undefined
            }
            this.listLength--
            return returnedValue
        }

        public shift(): T | undefined {
            if (!this.firstNode) { return undefined }
            const returnedValue = this.firstNode.value
            if (this.firstNode.nextNode) {
                this.firstNode = this.firstNode.nextNode
            } else {
                this.lastNode  = undefined
                this.firstNode = undefined
            }
            this.listLength--
            return returnedValue
        }

        public unshift(element: T): void {
            const newNode: Node<T> = {
                value: element,
                nextNode: this.firstNode ? this.firstNode : undefined,
            }
            if (this.firstNode) {
                this.firstNode.prevNode = newNode
                this.firstNode = newNode
            } else {
                this.firstNode = newNode
                this.lastNode  = newNode
            }
            this.listLength++
        }

        public delete(element: T): void {
            if (!this.firstNode) { return }
            if (this.listLength === 1 && this.firstNode.value === element) {
                this.firstNode = undefined
                this.lastNode  = undefined
                this.listLength--
                return
            }
            for (let curr = this.firstNode; curr.nextNode; curr = curr.nextNode) {
                if (curr.value !== element) { continue }
                if (curr.prevNode) { curr.prevNode.nextNode = curr.nextNode }
                if (curr.nextNode) { curr.nextNode.prevNode = curr.prevNode }
                this.listLength--
            }
        }
    }

}