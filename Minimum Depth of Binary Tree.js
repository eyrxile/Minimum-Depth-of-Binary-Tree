class TreeNode{
    constructor(val){
        this.val = val;
        this.left = this.right = null;
    }
}

var minDepth = function(root) {
    if(!root) return 0;

    const queue = [{node: root, depth: 1}];

    while(queue.length > 0){
        const {node, depth} = queue.shift();

        if(!node.left && !node.right){
            return depth;
        }

        if(node.left){
            queue.push({node: node.left, depth: depth + 1});
        }

        if(node.right){
            queue.push({node: node.right, depth: depth + 1});
        }
    }
};

//Example usage:
const root1 = new TreeNode(3);
root1.left = new TreeNode(9);
root1.right = new TreeNode(20);
root1.right.left = new TreeNode(15);
root1.right.right = new TreeNode(7);

console.log(minDepth(root1));

const root2 = new TreeNode(2);
root2.right = new TreeNode(3);
root2.right.right = new TreeNode(4);
root2.right.right.right = new TreeNode(5);
root2.right.right.right.right = new TreeNode(6);

console.log(minDepth(root2));