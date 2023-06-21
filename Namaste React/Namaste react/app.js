const Parent = React.createElement(
  "div",
  { id: "heading" },
    [
    React.createElement("div",{ id: "child" },
    [React.createElement("h1", {}, "This is h1 tag"),
    React.createElement("h2",{},"this h2 tag"),
    React.createElement("h3",{},'hi I am Devang')
]),
    React.createElement("div",{ id: "child2" },
    [React.createElement("h1", {}, "This is h1 tag"),
    React.createElement("h2",{},"this h2 tag"),
    React.createElement("h3",{},'hi I am Devang')
])
])
const Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(Parent);
