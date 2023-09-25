function solution(nodeinfo) {
    var answer = [[]];
    let nodes = []
    nodeinfo.forEach((node, index) => {
        nodes.push([index+1, node[0], node[1]]);
    });
    nodes.sort((a, b) => {
        if(a[2] == b[2]) return a[1] - b[1];
        return b[2] - a[2];
    });
    let tree = new Tree(nodes[0][0], nodes[0][1], nodes[0][2]);
    for(let i=1; i<nodes.length; i++){
        tree.insert(nodes[i][0], nodes[i][1], nodes[i][2]);
    }
    answer[0] = tree.preorder();
    answer[1] = tree.postorder();
    console.log(answer)
    return answer;
}

class Tree{
    constructor(index, x, y){
        this.index = index;
        this.x = x;
        this.y = y;
        this.left = null;
        this.right = null;
    }
    insert(index, x, y){
        if(x < this.x){
            if(this.left == null){
                this.left = new Tree(index, x, y);
            }else{
                this.left.insert(index, x, y);
            }
        }else{
            if(this.right == null){
                this.right = new Tree(index, x, y);
            }else{
                this.right.insert(index, x, y);
            }
        }
    }
    preorder(){
        let result = [];
        result.push(this.index);
        if(this.left != null){
            result = result.concat(this.left.preorder());
        }
        if(this.right != null){
            result = result.concat(this.right.preorder());
        }
        return result;
    }
    postorder(){
        let result = [];
        if(this.left != null){
            result = result.concat(this.left.postorder());
        }
        if(this.right != null){
            result = result.concat(this.right.postorder());
        }
        result.push(this.index);
        return result;
    }
}