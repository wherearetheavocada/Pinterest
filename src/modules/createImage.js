export function createImage({id,urls,avatarImage,alt_description, user: {profile_image: {small},}}){
    return `<li class="galleryList" id=${id}>
    <div class="galleryItem">
        <img src=${urls.full} class="img" id="img"/>
        <div class="cardButton"></div>
        <button type="button" class="imageButton"></button>
    </div>
    <div class="card">
        <img src=${small} class="avatarImg" />
        <p class="cardDescription">${alt_description}</p>
    </div>
    </li>`
}