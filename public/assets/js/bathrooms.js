const url_string = window.location.href;
const url = new URL(url_string);
const mallId = url.searchParams.get("id");
console.log(mallId);


function fetchMallById() {
    fetch(`/api/location/single/${mallId}`)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error(error));
}

fetchMallById();