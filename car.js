const jeepCarGallery = document.getElementById('jeep-car-gallery');

console.log(jeepCarGallery)

const jeepCarPhotos = []

// initialize jeepCarPhotos array
for (let i = 1; i <= 23; i++) {
    jeepCarPhotos.push(
        {
            thumbnailSrc: `project-images/images/thumbnails/used_cars/used_car_${i}-600_x_400.jpg`,
            hdSrc: `project-images/images/hds/used_cars/used_car_${i}-1800_x_1199.jpg`,
        },
    )
}

// inserts images and associated modals into galleries
jeepCarPhotos.forEach(photos => {
    jeepCarGallery.innerHTML += `
    <div class="img-container">
        <img src=${photos.thumbnailSrc} alt="Photo of a used Jeep Wrangler">
        <div class="modal">
            <img src=${photos.hdSrc} alt="Photo of a used Jeep Wrangler" class="modal-img horizontal">
            <p>Photo of a used Jeep Wrangler</p>
        </div>
    </div>
    `
})

const modalImg = document.querySelectorAll('.modal-img')

// modal show and hide set up
console.log(jeepCarGallery)
jeepCarGallery.addEventListener('click', (e) => {
    e.target.nextElementSibling.style.display = 'block'
    console.log(e.target)
})

modalImg.forEach(img => {
    img.addEventListener('click', (e) => {
        e.target.parentElement.style.display = 'none'
    })
})