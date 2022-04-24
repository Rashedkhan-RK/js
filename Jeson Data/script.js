function loaddata() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => showdata(data))
}

loaddata()

function showdata(data) {
    let imagebox = document.getElementById('imagebox')
    for (imgdata of data) {
        let div = document.createElement('div');
        if (imgdata.id <= 25) {
            let imgurl = imgdata.thumbnailUrl
            div.innerHTML = `<p id="imageid">${imgdata.id} </p><img onClick="showclick(${imgurl})" src="${imgdata.thumbnailUrl}">`;
            imagebox.appendChild(div)
        }
        else {
            break;
        }

    }
}
function showclick(url) {
    let imageId = document.getElementById('imageid')
    console.log(url)

}