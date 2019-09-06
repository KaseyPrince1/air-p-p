
const mallCards = document.getElementById('mall-cards');
// fetch locations of type mall on page load


// UserId: null
// address: "6191 South State Street"
// bldng_name: null
// createdAt: null
// id: 1
// loc_name: "Fashion Place"
// loc_type: "Mall"
// updatedAt: null
// zip_code: "84017"


function fetchMalls() {
    fetch('/api/location/all/malls')
        .then(res=> {
            if(res.ok){
                return res.json();
            }
        })
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                let mall = data[i];
                const mallCard = `<div class="card">
                <img src="./assets/images/fashion-place.jpg" class="card-img-top" alt="mall card">
                <div class="card-body">
                  <h5 class="card-title">${mall.loc_name}</h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">Location</li>
                <li class="list-group-item">Number of Bathroom</li>
                <li class="list-group-item">Overall Rating</li>
              </ul>
              <div class="card-body">
                <a href="/bathroom?id=${mall.id}" class="card-link">Visit</a>
              </div>
              </div>`;

                mallCards.innerHTML += mallCard;
            }
        })
        .catch(error => console.error(error));
}

fetchMalls();