var request = new XMLHttpRequest();
var pathURL = "https://adoseof802.github.io/AJAXRequests/music.json";
var requestType = "GET";

request.addEventListener('readystatechange', function () {

    if (this.readyState == 4 && this.status == 200) {
        var tracks = JSON.parse(this.response);
        tracks.sort(function (a, b) {
            return a.album.year - b.album.year;
        })
        tracks.forEach((track) => {
            var imageHolder = document.createElement('img');
            imageHolder.src = track.album.cover;
            document.body.appendChild(imageHolder);
            console.log(track.album.title);
        })

        var audio = document.querySelector("iframe");

        var allImages = document.querySelectorAll("img");
        allImages.forEach((image, index) => {
            image.addEventListener("click", function () {
                console.log(audio);
                audio.src = tracks[index].access;
            })
        })
    }
})

request.open(requestType, pathURL);
request.send();