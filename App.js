/* Create the following nested structure using react : */
/*
* <div id="parent">
*   <div id="child">
*       <h1>I am H1 tag</h1>
*   </div>
* </div>
*/
const h1_tag = React.createElement("h1", {}, "I am H1 tag")
const h2_tag = React.createElement("h2", {}, "I am H2 tag")
const childen = React.createElement("div", {id: "childen"}, [h1_tag, h2_tag])
const parent = React.createElement("div", {id: "parent"}, childen)

console.log(parent);
const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);