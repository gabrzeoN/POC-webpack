import darOi from "./App";
import "./style.css";

import Logo from "./uol.png";

darOi();

console.log("ola");

document.querySelector("body").innerHTML = `<img src=${Logo} />`;