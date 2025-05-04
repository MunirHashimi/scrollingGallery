  let scroll = document.querySelector(".gallery");
        let backBtn = document.querySelector("#backBtn");
        let nextBtn = document.querySelector("#nextBtn");

        scroll.addEventListener("wheel", (evt)=>{
            evt.preventDefault();
            scroll.scrollLeft += evt.deltaY;
            scroll.style.scrollBehavior = "auto";
        });
        nextBtn.addEventListener("click", ()=>{
            scroll.style.scrollBehavior = "smooth";
            scroll.scrollLeft += 900;
        });
        backBtn.addEventListener("click", ()=>{
            scroll.style.scrollBehavior = "smooth";
            scroll.scrollLeft -= 900;
        });