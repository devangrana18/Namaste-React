import React from "react";
import  ReactDOM  from "react-dom/client";


const Title=()=>(
    <h1 className="head">
        Namaste React🚀
    </h1>
)

const HeadingComponent = () =>(
    <div id="container">
        <Title/>
        <h1 className="heading">Namaste react Functionam component</h1>
    </div>
)


const Root = ReactDOM.createRoot(document.getElementById("root"))

Root.render(<HeadingComponent/>)