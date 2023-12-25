export function createImage({id,urls,avatarImage,alt_description, user: {profile_image: {small},}}){
    return `<li class="galleryList" id=${id}>
    <div class="galleryItem">
        <img src=${urls.full} class="img" id="img"/>
        <div class="cardButton"></div>
        <button type="button" class="imageButton"  id=${id}>
            <svg class="svgBtn" viewBox="0 0 24 24" aria-hidden="true" aria-label="" role="img">
            <path d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z"></path>
            </svg>
        </button>
    </div>
    <div class="card">
        <img src=${small} class="avatarImg" />
        <p class="cardDescription">${alt_description}</p>
    </div>
    </li>`
}