var num = 0; // global variable



function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    const element = document.getElementById("styleSheetID");
    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    var currstyle = element.getAttribute("href");
    // 1 (c) Determine new stylesheet file name
    var Stylereplace;
    if(currstyle=="styles/style.css"){
        Stylereplace="styles/style2.css";
    }
    else {
        Stylereplace="styles/style.css";
    }
    
    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    element.setAttribute("href",Stylereplace);

    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("styleStorage1",Stylereplace);
}  


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    var styleStorage=localStorage.getItem("styleStorage1");
    // 2 (b) get html style element by ID
    var grabStyle=document.getElementById("styleSheetID");
    // 2 (c) replace href attribute of html element.
    grabStyle.setAttribute("href",styleStorage);
}


