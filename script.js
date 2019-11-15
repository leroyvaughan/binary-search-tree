
class treeNode{
  constructor(key){
    this.value = key;
    this.left = null;
    this.right = null;
    console.log("new treeNode(): " + key);
  }
}


class binarySearchTree{
  constructor()
  {
    this.root = null;
  }


  getRoot(){
    return this.root;
  }


  contains(value){
    let current = this.root;

    while(current){
      if(value === current.value){
        console.log("true, contains: " + value);
        return true;
      }
      else if(value < current.value){
        current = current.left;
      }
      else{
        current = current.right;
      }
    }

    console.log("false, doesn't contain: " + value);
    return false;
  }




  getNode(value){
    //first check if it is root 
    if(value === this.root.value){
      return this.root;
    }
    
    let current = this.root;

    //now loop thru searching for node
    while(current){
      if(current.value === value){
        return current;
      }
      else if(value < current.value){
        current = current.left;
      }
      else if(value > current.value){
        current = current.right;
      }
    }

    //node wasn't found...
    return null;

  }//end getNode()


  insertNode(value){
        let newNode = value;
    
    if(typeof value !== "object"){
      newNode = new treeNode(value);
    }

    if(this.root === null){
      this.root = newNode;
      return;
    }

    let current = this.root;

    while(true){
      let curVal = current.value;
      let newNodeVal = newNode.value;

      if(newNodeVal < curVal){
        if(!current.left){
          current.left = newNode;
          console.log("->root(" + curVal + "):\t new left node added: " + newNode.value);
          break;
        }
        else{
          current = current.left;
        }
      }
      else if(newNodeVal > curVal){
        if(!current.right){
          current.right = newNode;
          console.log("->root(" + curVal + "):\t new right node added: " + newNode.value);
          break;
        }
        else{
          current = current.right;
        }
      }
      else{//node already present
        break;
      }
    }
  }//end insertNode

  inOrder(node){
    if(node != null){
      this.inOrder(node.left);
      console.log(node.value);
      this.inOrder(node.right);
    }
  }

  preOrder(node){
    if(node != null){
      console.log(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node){
    if(node != null){
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.value);
    }
  }


}//end class


var bst = new binarySearchTree();

//code to check if insertNode works as expected
//see console log outputs
bst.insertNode(1);
bst.insertNode(3);
bst.insertNode(2);
bst.insertNode(10);
bst.insertNode(5);
bst.insertNode(21);

var rootNode = bst.getRoot();

console.log("\ninOrder()");
bst.inOrder(rootNode);
//4 2 5 1 3

console.log("\npreOrder()");
bst.preOrder(rootNode);
//1 2 4 5 3

console.log("\npostOrder");
bst.postOrder(rootNode);
//4 5 2 3 1

bst.contains(10);
bst.contains(1);
bst.contains(2);
bst.contains(3);
bst.contains(4);
bst.contains(5);
bst.contains(21);



console.log("\r\n\r\n\r\n####\tBinary Search Tree 2\t######");
var bst2 = new binarySearchTree();
var treeRoot = new treeNode(1);
treeRoot.left = new treeNode(2);
treeRoot.right = new treeNode(3);
treeRoot.left.left = new treeNode(4);
treeRoot.left.right = new treeNode(5);
bst2.insertNode(treeRoot);

let rootNode2 = bst2.getRoot();

console.log("\ninOrder()");
bst2.inOrder(rootNode2);
//4 2 5 1 3

console.log("\npreOrder()");
bst2.preOrder(rootNode2);
//1 2 4 5 3

console.log("\npostOrder");
bst2.postOrder(rootNode2);
//4 5 2 3 1


console.log("\n\n**\tThis is where the contains method fails...---->");
bst2.contains(10);
bst2.contains(1);
bst2.contains(2);
bst2.contains(3);
bst2.contains(4);
bst2.contains(5);
bst2.contains(21);
