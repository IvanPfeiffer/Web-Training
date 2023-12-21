const form = document.querySelector("#searchForm");

form.addEventListener("submit", async (e)=>{
    e.preventDefault();
    const search = form.elements.query.value;

    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${search}`);
    displayImages(res.data)
});

const displayImages = function (shows){
    for(let result of shows){
        const img = document.createElement("IMG");
        img.src = result.show.image.medium;
        document.body.append(img)
    }
}