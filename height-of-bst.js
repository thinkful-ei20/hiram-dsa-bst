function height(bst) {
    return function walk(bst, count=0) {
      let tmpCount
      if (bst.left) {
        tmpCount = walk(bst.left, count+1)
        if (height < tmpCount) height = tmpCount
      }
      if (bst.right) {
        tmpCount = walk(bst.right, count+1)
        if (height < tmpCount) height = tmpCount
      }
      if (!bst.left && !bst.right) {
        return count+1
      }
      return tmpCount
    }(bst, 0)
}

function main() {
  const bst = require('./sample-bst')
  console.log(height(bst))
}

if (require.main === module) {
  main()
}
