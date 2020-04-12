


const generateHmtl = ([h, v])=>{
    const html = `
    <div class="item h${h} v${v}">
    <img src="media/gallery/${generateRandomNumber(30)}.jpg" alt="">
    <div class="item_overlay">
        <button class="btn btn-small"> view -></button>
    </div>
</div>
    `;
    return html;
}


const generateRandomNumber = (limit) =>{
    const randomNumber = Math.floor(Math.random() * limit ) + 1;
    while (generateRandomNumber > randomNumber) {
        Math.floor(Math.random() * limit) + 1;
    }
    return randomNumber
}


const arrayFrom = Array.from({
    length:20
}, ()=>[generateRandomNumber(4),generateRandomNumber(4) ]).concat([
    [1,1],
    [1,1],
    [1,1],
    [1,1],
    [1,1],
    [1,1],
    [1,1],
    [1,1],
    [1,1],
    [1,1],
    [1,1],
    [1,1]
])


const html = arrayFrom.map(generateHmtl).join('');
// gallery.innerHtml = html;



const viewimage = (e)=>{
    const img = e.currentTarget.querySelector('img');
    let imgview = document.querySelector('.over-overlay')
    imgview.style.display = 'block';
    imgview.querySelector('.image').src= img.src
    console.log(img.src)
}


const close = ()=>{
    let imgview = document.querySelector('.over-overlay');
    imgview.style.display = 'none';
}



export {html, viewimage , close};


