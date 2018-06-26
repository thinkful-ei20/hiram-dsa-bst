const sampleBST = require('./sample-bst')

function isBST(node, min, max) {
    if (!node) return true
    if (node.key < min || max < node.key) return false
    return isBST(node.left, min, node.key - 1) && isBST(node.right, node.key + 1, max)
}

function main() {
    console.log(isBST(sampleBST, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY))
}

if (require.main === module) {
    main()
}

module.exports = isBST
