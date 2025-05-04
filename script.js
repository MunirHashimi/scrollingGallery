
    const gallery = document.querySelector(".gallery div"); // image wrapper
    const image = gallery.querySelector("img"); // one image
    const backBtn = document.getElementById("backBtn");
    const nextBtn = document.getElementById("nextBtn");

    // Scroll one image width at a time
    backBtn.addEventListener("click", () => {
        gallery.parentElement.scrollBy({
            left: -image.clientWidth - 20, // 20 = gap between images
            behavior: "smooth"
        });
    });

    nextBtn.addEventListener("click", () => {
        gallery.parentElement.scrollBy({
            left: image.clientWidth + 20,
            behavior: "smooth"
        });
    });

