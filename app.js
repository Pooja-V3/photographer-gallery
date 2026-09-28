
const photos = [
    {
        title: "Mountain",
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900"
    },
    {
        title: "Ocean",
        src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=900"
    },
    {
        title: "Forest",
        src: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=900"
    },
    {
        title: "Sunset",
        src: "https://images.unsplash.com/photo-1472120435266-53107fd0c44a?w=900"
    },
    {
        title: "Lake",
        src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=900"
    },
    {
        title: "Wildlife",
        src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=900"
    }
];

const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const largeImage = document.getElementById("largeImage");
const exif = document.getElementById("exif");

let currentIndex = 0;

photos.forEach((photo, index) => {
    const img = document.createElement("img");

    img.src = photo.src;
    img.alt = photo.title;
    img.className = "photo";
    img.loading = "lazy";

    img.addEventListener("click", () => {
        currentIndex = index;
        showPhoto();
        lightbox.classList.add("open");
    });

    gallery.appendChild(img);
});

function showPhoto() {
    const photo = photos[currentIndex];

    largeImage.src = photo.src;
    largeImage.alt = photo.title;
    exif.textContent = photo.title +
        " — Original camera EXIF data may not be available for online sample images.";
}

document.getElementById("close").addEventListener("click", () => {
    lightbox.classList.remove("open");
});

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    showPhoto();
});

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % photos.length;
    showPhoto();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        lightbox.classList.remove("open");
    }
});
