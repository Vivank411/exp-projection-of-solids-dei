// VARIABLES

// DROPMENUS, PENCILS, COMPASS AND INSTRUCTIONS
const assemblyBox = document.querySelector("#assembly");
const statementBox = document.querySelector("#exp1-statement");
const instruction1Step3 = document.querySelector("#instructions-step3");
const stepNumber = document.querySelector(".step-number");

const comp1Step3 = document.querySelector("#compass1-step3");

const pencil1Step3 = document.querySelector("#pencil1-step3");
const pencil2Step3 = document.querySelector("#pencil2-step3");
const pencil3Step3 = document.querySelector("#pencil3-step3");
const pencil4Step3 = document.querySelector("#pencil4-step3");
const pencil5Step3 = document.querySelector("#pencil5-step3");
const pencil6Step3 = document.querySelector("#pencil6-step3");
const pencil7Step3 = document.querySelector("#pencil7-step3");
const pencil8Step3 = document.querySelector("#pencil8-step3");

const dropMenu1Step3 = document.querySelector("#dropMenu1-step3");
const dropMenu2Step3 = document.querySelector("#dropMenu2-step3");
const dropMenu3Step3 = document.querySelector("#dropMenu3-step3");
const dropMenu4Step3 = document.querySelector("#dropMenu4-step3");
const dropMenu5Step3 = document.querySelector("#dropMenu5-step3");
const dropMenu6Step3 = document.querySelector("#dropMenu6-step3");

// IMAGES
const png1Step3 = document.querySelector("#png1-step3");
const png2Step3 = document.querySelector("#png2-step3");
const png3Step3 = document.querySelector("#png3-step3");
const png4Step3 = document.querySelector("#png4-step3");
const png5Step3 = document.querySelector("#png5-step3");
const png6Step3 = document.querySelector("#png6-step3");
const png7Step3 = document.querySelector("#png7-step3");
const png8Step3 = document.querySelector("#png8-step3");
const png9Step3 = document.querySelector("#png9-step3");
const png10Step3 = document.querySelector("#png10-step3");
const finalPng = document.querySelector("#finalPng-step3");

// GIFS
const gif1Step3 = document.querySelector("#gif1-step3");
const gif2Step3 = document.querySelector("#gif2-step3");
const gif3Step3 = document.querySelector("#gif3-step3");
const gif4Step3 = document.querySelector("#gif4-step3");
const gif5Step3 = document.querySelector("#gif5-step3");
const gif6Step3 = document.querySelector("#gif6-step3");
const gif7Step3 = document.querySelector("#gif7-step3");
const gif8Step3 = document.querySelector("#gif8-step3");

// TRANSBOXES
const trans1Step3 = document.querySelector("#trans1-step3");
const trans2Step3 = document.querySelector("#trans2-step3");
const trans3Step3 = document.querySelector("#trans3-step3");
const trans4Step3 = document.querySelector("#trans4-step3");
const trans5Step3 = document.querySelector("#trans5-step3");
const trans6Step3 = document.querySelector("#trans6-step3");

// ARROWS
const arr1Step3 = document.querySelector("#arr1-step3");
const arr2Step3 = document.querySelector("#arr2-step3");
const arr3Step3 = document.querySelector("#arr3-step3");
const arr4Step3 = document.querySelector("#arr4-step3");
const arr5Step3 = document.querySelector("#arr5-step3");
const arr6Step3 = document.querySelector("#arr6-step3");
const arr7Step3 = document.querySelector("#arr7-step3");
const arr8Step3 = document.querySelector("#arr8-step3");

// NEXT BUTTONS 
const arrNext = document.querySelector(".arr-next");
const nextToFinalPng = document.querySelector("#nextToFinalPng");
const nextBtnExp1 = document.querySelector("#nextToExpListFromExp1");


// once dom loaded then trans1Step3 will get activated.

addEventListener("DOMContentLoaded", () =>{
    trans1Step3.style.visibility = "visible";
    arr1Step3.style.visibility = "visible";
    png1Step3.style.visibility = "visible";
});

trans1Step3.addEventListener("click",() => {
    trans1Step3.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";
    dropMenu1Step3.style.visibility = "visible";
});


// dropmenu 1 changes

dropMenu1Step3.addEventListener("change",(evt)=>{
    let selectedValue = dropMenu1Step3.value;
    if(selectedValue === "3hPencil"){
        dropMenu1Step3.style.visibility = "hidden";
        pencil1Step3.style.visibility = "visible";
        arr2Step3.style.visibility = "visible";
    }else{
        alert("Please select 3H Pencil");
    }
});

// when first H Pencil was clicked 

pencil1Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png1Step3.style.visibility = "hidden";
    arr2Step3.style.visibility = "hidden";
    
    gif1Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif1Step3.style.visibility = "hidden";
        png2Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Select H pencil and draw the triange of side of dimension (80mm) in the side view. Label the corners of the triange as a\", b\",c\" and 1\",2\", 3\".";
        stepNumber.innerText = "4";

        arr1Step3.style.visibility = "visible";
        trans2Step3.style.visibility = "visible";
    }, 23500)
});

trans2Step3.addEventListener("click", ()=> {
    trans2Step3.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";
    dropMenu2Step3.style.visibility = "visible";
    dropMenu2Step3.value = "default";
});


dropMenu2Step3.addEventListener("change",() => {
    let selectedValue = dropMenu2Step3.value;
    if(selectedValue === "hPencil"){
        dropMenu2Step3.style.visibility = "hidden";
        pencil2Step3.style.visibility = "visible";
        arr3Step3.style.visibility = "visible";
    }else{
        alert("Please select H Pencil");
    }
});

pencil2Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";
    png2Step3.style.visibility = "hidden";

    gif2Step3.style.visibility = "visible";

    setTimeout(() => {
    png3Step3.style.visibility = "visible";
    gif2Step3.style.visibility = "hidden";
    instruction1Step3.innerText = "Select 3H pencil and draw the projections of the triangular prism to meet the XY line. Join these projections with the ZY line.";
    stepNumber.innerText = "5";

    arr4Step3.style.visibility = "visible";
    trans3Step3.style.visibility = "visible";
    }, 30460);
});

trans3Step3.addEventListener("click", ()=> {
    trans3Step3.style.visibility = "hidden";
    arr4Step3.style.visibility = "hidden";
    dropMenu3Step3.style.visibility = "visible";
    dropMenu3Step3.value = "default";
});

dropMenu3Step3.addEventListener("change",() => {
    let selectedValue = dropMenu3Step3.value;
    if(selectedValue === "3hPencil"){
        dropMenu3Step3.style.visibility = "hidden";
        pencil3Step3.style.visibility = "visible";
        arr3Step3.style.visibility = "visible";
    }else{
        alert("Please select 3H Pencil");
    }
});

pencil3Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";
    png3Step3.style.visibility = "hidden";

    gif3Step3.style.visibility = "visible";

    setTimeout(() => {
    png4Step3.style.visibility = "visible";
    gif3Step3.style.visibility = "hidden";
    instruction1Step3.innerText = "Now, project these points horizontally in the top view.";
    stepNumber.innerText = "6";

    arr5Step3.style.visibility = "visible";
    pencil4Step3.style.visibility = "visible";
    }, 36800);

});

pencil4Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr5Step3.style.visibility = "hidden";
    png4Step3.style.visibility = "hidden";

    gif4Step3.style.visibility = "visible";

    setTimeout(() => {
        png5Step3.style.visibility = "visible";
        gif4Step3.style.visibility = "hidden";
        instruction1Step3.innerText = "Select H pencil and draw the rectangular face of the triangular prism in the top view HP.  Label its corners as 1,2,3 and a,b,c";
        stepNumber.innerText = "7";

        arr4Step3.style.visibility = "visible";
        trans5Step3.style.visibility = "visible";
        }, 22000);

});

trans5Step3.addEventListener("click", ()=> {
    trans5Step3.style.visibility = "hidden";
    arr4Step3.style.visibility = "hidden";
    dropMenu5Step3.style.visibility = "visible";
    dropMenu5Step3.value = "default";
});

dropMenu5Step3.addEventListener("change",() => {
    let selectedValue = dropMenu5Step3.value;
    if(selectedValue === "hPencil"){
        dropMenu5Step3.style.visibility = "hidden";
        pencil5Step3.style.visibility = "visible";
        arr3Step3.style.visibility = "visible";
    }else{
        alert("Please select H Pencil");
    }
});


pencil5Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";
    png5Step3.style.visibility = "hidden";

    gif5Step3.style.visibility = "visible";

    setTimeout(() => {
        png6Step3.style.visibility = "visible";
        gif5Step3.style.visibility = "hidden";
        instruction1Step3.innerText = "Select 3H pencil and project the top view and side view of the triangular prism in the front view.";
        stepNumber.innerText = "8";

        arr4Step3.style.visibility = "visible";
        trans6Step3.style.visibility = "visible";
        }, 37860);

});

trans6Step3.addEventListener("click", ()=> {
    trans6Step3.style.visibility = "hidden";
    arr4Step3.style.visibility = "hidden";
    dropMenu6Step3.style.visibility = "visible";
    dropMenu6Step3.value = "default";
});

dropMenu6Step3.addEventListener("change",() => {
    let selectedValue = dropMenu6Step3.value;
    if(selectedValue === "3hPencil"){
        dropMenu6Step3.style.visibility = "hidden";
        pencil6Step3.style.visibility = "visible";
        arr3Step3.style.visibility = "visible";
    }else{
        alert("Please select H Pencil");
    }
});

pencil6Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";
    png6Step3.style.visibility = "hidden";

    gif6Step3.style.visibility = "visible";

    setTimeout(() => {
        gif6Step3.style.visibility = "hidden";
        png7Step3.style.visibility = "visible";
    
        arr7Step3.style.visibility = "visible";
        pencil7Step3.style.visibility = "visible";
        }, 14700);

});

pencil7Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr7Step3.style.visibility = "hidden";
    png7Step3.style.visibility = "hidden";

    gif7Step3.style.visibility = "visible";

    setTimeout(() => {

    png8Step3.style.visibility = "visible";
    gif7Step3.style.visibility = "hidden";
    instruction1Step3.innerText = "Select H pencil and join these projections to obtain the rectangular face of the triangular prism in the front view VP.";
    stepNumber.innerText = "9";

    arr4Step3.style.visibility = "visible";
    trans4Step3.style.visibility = "visible";
    }, 12370);

});

trans4Step3.addEventListener("click", ()=> {
    trans4Step3.style.visibility = "hidden";
    arr4Step3.style.visibility = "hidden";
    dropMenu4Step3.style.visibility = "visible";
    dropMenu4Step3.value = "default";
});

dropMenu4Step3.addEventListener("change",() => {
    let selectedValue = dropMenu4Step3.value;
    if(selectedValue === "hPencil"){
        dropMenu4Step3.style.visibility = "hidden";
        pencil8Step3.style.visibility = "visible";
        arr3Step3.style.visibility = "visible";
    }else{
        alert("Please select H Pencil");
    }
});

pencil8Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";
    png8Step3.style.visibility = "hidden";

    gif8Step3.style.visibility = "visible";

    setTimeout(() => {
        gif8Step3.style.visibility = "hidden";
        png9Step3.style.visibility = "visible";
        }, 29370);

    setTimeout(() => {
        png9Step3.style.visibility = "hidden";
        png10Step3.style.visibility = "visible";
        }, 31370);

    setTimeout(() => {
        nextToFinalPng.style.visibility = "visible";
        arrNext.style.visibility = "visible";
        }, 33570)
});

nextToFinalPng.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    arrNext.style.visibility = "hidden";
    assemblyBox.style.visibility = "hidden";
    statementBox.style.visibility = "hidden";

    finalPng.style.visibility = "visible";
    finalPng.style.top = "80px";

    setTimeout(()=> {
        nextBtnExp1.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 1500);
})

nextBtnExp1.addEventListener("click", () => {
    parent.location = `../exp-list.html`;   // both of these addresses will work.
})