namespace binaryTree {

    type Node<T> = {
        value: T
        LNode?: Node<T>
        RNode?: Node<T>
    }

    export class BinaryTree<T> {
        public rootNode?: Node<T>

        public minValueNode(node = this.rootNode): T | undefined {
            if (!node) { return undefined }
            let curr = node
            while (curr.LNode) { curr = curr.LNode }
            return curr.value
        }

        public insertIter(value: T): void {
            if (!this.rootNode) { this.rootNode = { value: value }; return }
            let curr = this.rootNode;
            while (true) {
                    if (value < curr.value) {
                    if (curr.LNode) { curr = curr.LNode }
                    else            { curr.LNode = { value: value }; break }
                } else {
                    if (curr.RNode) { curr = curr.RNode }
                    else            { curr.RNode = { value: value }; break }
                }
            }
        }

        private insertNodeRecur(node: Node<T> | undefined, value: T) {
            if (!node) { return { value: value } }
            else {
                if      (value < node.value) { node.LNode = this.insertNodeRecur(node.LNode, value) }
                else if (value > node.value) { node.RNode = this.insertNodeRecur(node.RNode, value) }
            }
            return node
        }

        public InsertRecur(value: T) {
            this.rootNode = this.insertNodeRecur(this.rootNode, value)
        }
    }

}