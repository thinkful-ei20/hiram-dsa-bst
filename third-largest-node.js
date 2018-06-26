const bst = require('./sample-bst')

function nthLargest(node, n, count = {n:0}) {
    if (!node || count.n >= n) return

    nthLargest(node.right, n, count)
    count.n++

    if (count.n === n) {
        console.log(node.key)
    }

    nthLargest(node.left, n, count)
}

function main() {
    nthLargest(bst) // 6
}

if (require.main === module) {
    main()
}

module.exports = nthLargest
