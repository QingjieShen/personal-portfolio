const britanniaGallery = document.getElementById('britannia-gallery');

const sceneryPhotos = [
    {
        thumbnailSrc: `project-images/images/thumbnails/scenery/britannia_bay_3-600_x_400.jpg`,
        hdSrc: `project-images/images/hds/scenery/britannia_bay_3-1800_x_1199.jpg`,
        isVertical: false,
        caption: "Swollen river bend"
    },
    {
        thumbnailSrc: `project-images/images/thumbnails/scenery/britannia_bay_5-600_x_399.jpg`,
        hdSrc: `project-images/images/hds/scenery/britannia_bay_5-1800_x_1200.jpg`,
        isVertical: false,
        caption: "People playing on the frozen river"
    },
    {
        thumbnailSrc: `project-images/images/thumbnails/scenery/britannia_bay_6-600_x_399.jpg`,
        hdSrc: `project-images/images/hds/scenery/britannia_bay_6-1800_x_1200.jpg`,
        isVertical: false,
        caption: "Old man walking his dog on the frozen river"
    },
    {
        thumbnailSrc: `project-images/images/thumbnails/scenery/britannia_bay_7-600_x_399.jpg`,
        hdSrc: `project-images/images/hds/scenery/britannia_bay_7-1800_x_1200.jpg`,
        isVertical: false,
        caption: "Sunset on frozen river"
    },
    {
        thumbnailSrc: `project-images/images/thumbnails/scenery/britannia_bay_8-600_x_399.jpg`,
        hdSrc: `project-images/images/hds/scenery/britannia_bay_8-1800_x_1200.jpg`,
        isVertical: false,
        caption: "Girl under sunset"
    },
    {
        thumbnailSrc: `project-images/images/thumbnails/scenery/britannia_bay_9-600_x_399.jpg`,
        hdSrc: `project-images/images/hds/scenery/britannia_bay_9-1800_x_1200.jpg`,
        isVertical: false,
        caption: "Flooded bench"
    },
    {
        thumbnailSrc: `project-images/images/thumbnails/scenery/britannia_bay_10-600_x_399.jpg`,
        hdSrc: `project-images/images/hds/scenery/britannia_bay_10-1800_x_1200.jpg`,
        isVertical: false,
        caption: "Ducks on the water"
    },
    {
        thumbnailSrc: `project-images/images/thumbnails/scenery/britannia_bay_1-400_x_600.jpg`,
        hdSrc: `project-images/images/hds/scenery/britannia_bay_1-1199_x_1800.jpg`,
        isVertical: true,
        caption: "Cyclist stops to watch the sunset"
    },
    {
        thumbnailSrc: `project-images/images/thumbnails/scenery/britannia_bay_2-400_x_600.jpg`,
        hdSrc: `project-images/images/hds/scenery/britannia_bay_2-1199_x_1800.jpg`,
        isVertical: true,
        caption: "Young men palying on a narrow path over water"
    },
    {
        thumbnailSrc: `project-images/images/thumbnails/scenery/britannia_bay_4-400_x_600.jpg`,
        hdSrc: `project-images/images/hds/scenery/britannia_bay_4-1199_x_1800.jpg`,
        isVertical: true,
        caption: "Young couple leaning on each oter watching the sunset"
    },
    {
        thumbnailSrc: `project-images/images/thumbnails/scenery/britannia_bay_11-400_x_600.jpg`,
        hdSrc: `project-images/images/hds/scenery/britannia_bay_11-1199_x_1800.jpg`,
        isVertical: true,
        caption: "Reflection of tree on water"
    }    
]

sceneryPhotos.forEach(photos => {
    let alignClass = ""
    if (photos.isVertical) {
        alignClass = "vertical"
    } else {
        alignClass = "horizontal"
    }
    britanniaGallery.innerHTML += `
    <div class="img-container">
        <img src=${photos.thumbnailSrc} alt="photo of Britannia Bay, Ottawa">
        <div class="modal">
            <img src=${photos.hdSrc} alt="photo of Britannia Bay, Ottawa" class="modal-img ${alignClass}">
            <p>${photos.caption}</p>
        </div>
    </div>
    `
})

const modalImg = document.querySelectorAll('.modal-img')

// modal show and hide set up
britanniaGallery.addEventListener('click', (e) => {
    e.target.nextElementSibling.style.display = 'block'
})

modalImg.forEach(img => {
    img.addEventListener('click', (e) => {
        e.target.parentElement.style.display = 'none'
    })
})