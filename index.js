const body = document.querySelector("body");
const fold = document.querySelector(".folder");

const changeChildrenVisibility = (parent, hide) => {
    let maxIndex = parent.children.length;

    for (let x = 0; x < maxIndex; x++){
        if (parent.children[x].classList.contains("folder-title")){
            continue;
        };
        
        if (hide){
            parent.children[x].id = "non-visible";
        }else{
            parent.children[x].id = "visible";
        }
    };
};

const onClick = (e) => {
    const initialTarget = e.target;
    let folder;

    if (initialTarget.classList.contains("file")){
        return;
    };

    if (!initialTarget.dataset.state){
        folder = initialTarget.parentElement;
    }else {
        folder = initialTarget;
    };

    const {state} = folder.dataset;

    if (state && state === "open"){
        folder.dataset.state = "closed";
        changeChildrenVisibility(folder, true);
    } else if(state && state === "closed"){
        folder.dataset.state = "open";
        changeChildrenVisibility(folder, false);
    };
}

body.addEventListener("click", onClick);