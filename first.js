
// const header1=document.createElement("h1");
// header1.innerHTML="Hello Adixoo";
// header1.style.backgroundColor="red";
// header1.style.color="white";
// header1.style.fontSize="30px";

// const header2=document.createElement("h2");
// header2.innerHTML="Why Adixoo";
// header2.style.backgroundColor="black";
// header2.style.color="red";
// header2.style.fontSize="30px";

// const root=document.getElementById("root");
// root.append(header1);
// root.append(header2);

const React={
        createElement: function(tag, style ,children){
            const element=document.createElement(tag);

                 if (typeof children === 'object'){
                        for (let val in children){
                            element.innerHTML=val;
                        }
                 }
                 else{
                  element.innerHTML=children;
                 }
                  for (let key in style){
                    element.style[key]=style[key];
                  }
                  return element;
        }
}

const ReactDom={
      render : function(element,root){
        root.append(element);
      }
}
const header1=React.createElement("h1",{fontSize:"30px",backgroundColor:"red", color:"white"},"Hello g");
const header2=React.createElement("h1",{fontSize:"30px", backgroundColor:"red", color:"white"},"kaise ho aap sb");



ReactDom.render(header1,document.getElementById("root"));
ReactDom.render(header2,document.getElementById("root"));
