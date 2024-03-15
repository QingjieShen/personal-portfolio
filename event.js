const canadaDayGallery = document.getElementById('canada-day-gallery');

const canadaDayPhotos = [
    {
        thumbnailSrc: `project-images/images/thumbnails/event/canada_day_1-600_x_399.jpg`,
        hdSrc: `project-images/images/hds/event/canada_day_1-1800_x_1200.jpg`,
        isVertical: false,
        caption: "Lovely family"
    },
    {
        thumbnailSrc: `project-images/images/thumbnails/event/canada_day_2-600_x_400.jpg`,
        hdSrc: `project-images/images/hds/event/canada_day_2-1800_x_1199.jpg`,
        isVertical: false,
        caption: "Man walking his bike"
    },
    {
        thumbnailSrc: `project-images/images/thumbnails/event/canada_day_3-600_x_400.jpg`,
        hdSrc: `project-images/images/hds/event/canada_day_3-1800_x_1199.jpg`,
        isVertical: false,
        caption: "Men wearing Canada T-shirt"
    },
    {
        thumbnailSrc: `project-images/images/thumbnails/event/canada_day_7-600_x_399.jpg`,
        hdSrc: `project-images/images/hds/event/canada_day_7-1800_x_1200.jpg`,
        isVertical: false,
        caption: "Senior couple in white"
    },
    {
        thumbnailSrc: `project-images/images/thumbnails/event/canada_day_8-600_x_399.jpg`,
        hdSrc: `project-images/images/hds/event/canada_day_8-1800_x_1200.jpg`,
        isVertical: false,
        caption: "Senior couple in orange"
    },
    {
        thumbnailSrc: `project-images/images/thumbnails/event/canada_day_4-400_x_600.jpg`,
        hdSrc: `project-images/images/hds/event/canada_day_4-1200_x_1800.jpg`,
        isVertical: true,
        caption: "Senior couple holding hands"
    },
    {
        thumbnailSrc: `project-images/images/thumbnails/event/canada_day_5-400_x_600.jpg`,
        hdSrc: `project-images/images/hds/event/canada_day_5-1199_x_1800.jpg`,
        isVertical: true,
        caption: "Dad and daughtors"
    },
    {
        thumbnailSrc: `project-images/images/thumbnails/event/canada_day_6-400_x_600.jpg`,
        hdSrc: `project-images/images/hds/event/canada_day_6-1200_x_1800.jpg`,
        isVertical: true,
        caption: "Girls wearing Canada flag"
    },
    {
        thumbnailSrc: `project-images/images/thumbnails/event/canada_day_9-399_x_600.jpg`,
        hdSrc: `project-images/images/hds/event/canada_day_9-1199_x_1800.jpg`,
        isVertical: true,
        caption: "Stylish girl and her mom"
    }
]

// inserts images and associated modals into galleries
canadaDayPhotos.forEach(photos => {
    let alignClass = ""
    if (photos.isVertical) {
        alignClass = "vertical"
    } else {
        alignClass = "horizontal"
    }
    canadaDayGallery.innerHTML += `
    <div class="img-container">
        <img src=${photos.thumbnailSrc} alt="photo of people walking in front of the Parliament Hill">
        <div class="modal">
            <img src=${photos.hdSrc} alt="Photo of people walking in front of the Parliament Hill" class="modal-img ${alignClass}">
            <p>${photos.caption}</p>
        </div>
    </div>
    `
})

const modalImg = document.querySelectorAll('.modal-img')

// modal show and hide set up
canadaDayGallery.addEventListener('click', (e) => {
    e.target.nextElementSibling.style.display = 'block'
})

modalImg.forEach(img => {
    img.addEventListener('click', (e) => {
        e.target.parentElement.style.display = 'none'
    })
})