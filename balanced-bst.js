const bst = require('./sample-bst')

function height(node) {
    if (!node) return 0
    return Math.max(height(node.left), height(node.right)) + 1
}

function isBalanced(node) {
    if (!node) return true

    const leftHeight = height(node.left)
    console.log(leftHeight)
    const rightHeight = height(node.right)
    console.log(rightHeight)
    console.log('---')

    if ((Math.abs(leftHeight-rightHeight) <= 1) && isBalanced(node.left) && isBalanced(node.right))
        return true

    return false
}

function main() {
    console.log(isBalanced(bst)) // false
}

if (require.main === module) {
    main()
}

module.exports = {
    height,
    isBalanced,
}
