/* how does the customRender work thats why we create a function and declare at the end of the page magic function haha*/
function customRender/*4th*/(reactElement, container){
/*
    // step1 create an element
const domElement = document.createElement(reactElement.type)
//  step2 let's put something inside it 
domElement.innerHTML = reactElement.children
// step3 setAttributes
domElement.setAttribute('href', reactElement.props.href)
domElement.setAttribute('target', reactElement.props.target)
// step4 need to utilize this container because append the thing
container.appendChild(domElement)
*/
const domElement = document.createElement(reactElement.type)
domElement.innerHTML = reactElement.children
for (const prop in reactElement.props) {
    if(prop === 'children') continue/*means by any mistake if somebody write children in reactElement.props */ 
   domElement.setAttribute(prop, reactElement.props[prop])
       
    }
    container.appendChild(domElement)
}



/* react look at a picture everything is an object in side the oobject what should i create now we have element we enject the createElement */
 
const reactElement/*1st*/ = {
    type:'a',
    props: {
        href:"https://google.com",
        target:"_blank"
    },
    children:"Click me to visit google"
}

const mainContainer/*2nd*/ = document.querySelector('#root')/*this is the reference of the root element to enject my a tag with its attributes */

customRender/*3rd*/(reactElement, mainContainer)/* so this is declared a method just like react has its own method the first papameter is what do you want to inject and the second parameter is where do you want to inject */ 