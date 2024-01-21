import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const reactElement/*1st*/ = {
  type:'a',
  props: {
      href:"https://google.com",
      target:"_blank"
  },
  children:"Click me to visit google"
}

function MyApp(){
  return (
    <div>
      <h1> custom react app</h1>
    </div>
  )
};

const AnotherElement = (
  <a href='http://google.com' target='_blank'>Visit Google</a>
)

/* for that matter react doesn't know about reactElemet object for using in root element so react must know how? by using React.createElement()method by this method is convert whole thing to react language understanding the react language by importing React  */
// by this all jsx element convert into an object
/* first a tag second object must know the stem*/
const areactElement = React.createElement/* every element or tag is converted to object like h1, div... thats how React.createElement help us */(
  'a',/*element*/
  {href: 'https://google.com', target:'_blank'},/*attributes*/
  'click to visit google'/*text inside it */
)/* this is object version of it*/
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <App />
     /*this how react breakdowm an element*/
  /* </React.StrictMode>, */
)
