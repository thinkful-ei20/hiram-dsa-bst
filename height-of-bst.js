function walk(bst, count = 0) {
  let tmpCount
  if (bst.left) {
    tmpCount = walk(bst.left, count + 1)
  }
  if (bst.right) {
    tmpCount = walk(bst.right, count + 1)
  }
  if (!bst.left && !bst.right) {
    return count + 1
  }
  return tmpCount
}

function main() {
  const bst = require('./sample-bst')
  console.log(walk(bst))
}

if (require.main === module) {
  main()
}
