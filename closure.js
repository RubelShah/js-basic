// function init() {
//   var name = "Mozilla"; // name is a local variable created by init
//   function displayName() {
//     // displayName() is the inner function, that forms a closure
//     console.log(name); // use variable declared in the parent function
//   }
//     displayName();
// }
// init();

//---------------------
function elementCreator(element){
    
    return ()=>{
        return document.createElement(element)
    }
}

const div = elementCreator('div');
const span = elementCreator('span');

// div();
// div();
span()
const test = document.getElementById('test')
test.append(div());
test.append(div());