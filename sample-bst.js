const BST = require('./bst')

function buildBST() {
  const bst = new BST()
  bst.insert(3)
  bst.insert(1)
  bst.insert(4)
  bst.insert(6)
  bst.insert(9)
  bst.insert(2)
  bst.insert(5)
  bst.insert(7)

  return bst
}

function main() {
  const bst = buildBST()
  console.log(bst)
}

if (require.main === module) {
  main()
}

module.exports = buildBST()
