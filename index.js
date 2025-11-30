let preel=["name","email","address","number","objectives"];

preel.forEach(el=>{
    let input=document.getElementById("input-"+el);
    let preview=document.getElementById("preview-"+el);
    input.addEventListener("input",e=>{
        preview.textContent=e.target.value;
    });
});
let img=document.getElementById("input-photo");
img.addEventListener("change",()=>{
    const file= img.files[0];
    let preimg=document.getElementById("preview-photo");
    
    const reader = new FileReader();
    reader.onload=function(e){
        preimg.src=e.target.result;
         preimg.style.display="block";
    };    reader.readAsDataURL(file);

 
});
let edubtn=document.getElementById("add-edu");
edubtn.addEventListener("click",()=>{
        let inputskill=document.getElementById("input-edu");
        let previewskill=document.getElementById("preview-edu");
        if(!inputskill.value) return;
        let newskill=document.createElement("li");
        newskill.textContent=inputskill.value;
        previewskill.appendChild(newskill);
        let langlist=document.getElementById("input-edulist");
        let listval=document.createElement("li");
        listval.textContent=inputskill.value;
        langlist.appendChild(listval);
        inputskill.value="";
        let delbtn=document.createElement("button");
        delbtn.textContent="X";
        langlist.classList="llist";
        listval.appendChild(delbtn);
        delbtn.addEventListener("click",()=>
        {
            langlist.removeChild(listval);
            listval.removeChild(delbtn);
            previewskill.removeChild(newskill);
        });
    }
    );
let skillsbtn=document.getElementById("add-skills");
skillsbtn.addEventListener("click",()=>{
        let inputskill=document.getElementById("input-skill");
        let previewskill=document.getElementById("preview-skills");
        if(!inputskill.value) return;
        let newskill=document.createElement("li");
        newskill.textContent=inputskill.value;
        previewskill.appendChild(newskill);
        let langlist=document.getElementById("input-skillist");
        let listval=document.createElement("li");
        listval.textContent=inputskill.value;
        langlist.appendChild(listval);
        inputskill.value="";
        let delbtn=document.createElement("button");
        delbtn.textContent="X";
        langlist.classList="llist";
        listval.appendChild(delbtn);
        delbtn.addEventListener("click",()=>
        {
            langlist.removeChild(listval);
            listval.removeChild(delbtn);
            previewskill.removeChild(newskill);
        });
    }
    );

let languagebtn=document.getElementById("add-language");
languagebtn.addEventListener("click",()=>{
        let inputskill=document.getElementById("input-language");  
        let previewskill=document.getElementById("preview-language");
        if(!inputskill.value) return;
        let newskill=document.createElement("li");
        newskill.textContent=inputskill.value;
        previewskill.appendChild(newskill);
        let langlist=document.getElementById("input-languagelist");
        let listval=document.createElement("li");
        listval.textContent=inputskill.value;
        langlist.appendChild(listval);
        inputskill.value="";
        let delbtn=document.createElement("button");
        delbtn.textContent="X";
        langlist.classList="llist";
        listval.appendChild(delbtn);
        delbtn.addEventListener("click",()=>
        {
            langlist.removeChild(listval);
            listval.removeChild(delbtn);
            previewskill.removeChild(newskill);
        });
        
    });
let certificatebtn=document.getElementById("add-certificate");
certificatebtn.addEventListener("click",()=>{
        let inputskill=document.getElementById("input-certificate");
        let previewskill=document.getElementById("preview-certificate");
        let inputdate=document.getElementById("input-date");
         if(!inputskill.value) return;
        let newskill=document.createElement("li");
        newskill.textContent=inputskill.value;
        previewskill.appendChild(newskill);
        let langlist=document.getElementById("input-certificatelist");
        let listval=document.createElement("li");
        listval.textContent=inputskill.value;
        langlist.appendChild(listval);
        inputskill.value="";
        let delbtn=document.createElement("button");
        delbtn.textContent="X";
        langlist.classList="llist";
        listval.appendChild(delbtn);
        delbtn.addEventListener("click",()=>
        {
            langlist.removeChild(listval);
            listval.removeChild(delbtn);
            previewskill.removeChild(newskill);
        });
        
    });
let downloadbtn=document.getElementById("input-print");
downloadbtn.addEventListener("click",()=>
{
    window.print();    
});