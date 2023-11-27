document.addEventListener('DOMContentLoaded', function() { loadBuilding(); });

function loadBuilding() {
    const container1 = document.getElementById('title');
    fetch('building_info')
        .then(response => response.json())
        .then(buildingData => {
            const buildingInfo = buildingData[0]
            var text = "\n🏫 " + buildingInfo.name + " 🏫\n";
            container1.append(text)

            var headerElement = document.getElementById('title')
            headerElement.style.fontSize = '32px'
            headerElement.style.fontWeight = 'bold';
        })
        .catch(error => console.error('Error fetching building data:', error));


    const container2 = document.getElementById('buildingContainer');
    // Fetch building data
    fetch('building_info')
        .then(response => response.json())
        .then(buildingData => {
            const buildingInfo = buildingData[0]
            var text =
                "Name: " + buildingInfo.name +
                "\n\nBuilding Code: " + buildingInfo.code +
                "\n\nAddress: " + buildingInfo.address +
                "\n\nCampus: " + buildingInfo.campus;
            const newSection = document.createElement('section');
            newSection.innerText = text;
            container2.appendChild(newSection);

        })
        .catch(error => console.error('Error fetching building data:', error));

    const container3 = document.getElementById('mapTitle');
    const container3Element = document.createElement('section');
    container3Element.innerText = "Location: ";
    container3.appendChild(container3Element);


    const container4 = document.getElementById('map');
    container4.style.width = '834px'
    container4.style.outline = '2px solid grey'
    fetch('building_info')
        .then(response => response.json())
        .then(buildingData => {
            const buildingInfo = buildingData[0]
            const lat = Number(buildingInfo.lat);
            const lng = Number(buildingInfo.lng);

            const container4Element1 = document.createElement('section');

            var map = new window.google.maps.Map(document.getElementById('map'), {
                center: { lat: lat, lng: lng },
                zoom: 18
            });

            container4Element1.append(map);
            // Adjust size
            container4Element1.style.height = '300px'; // Set any height you prefer

            // Function to centre the container horizontally
            function centerContainer4() {
                var windowWidth = document.body.scrollWidth;

                var container4Width = container4.offsetWidth;

                // Calculate the center position
                var centerX = (windowWidth - container4Width) / 2;

                // Set the container position
                container4.style.left = centerX + 'px';
                container4.style.zIndex = 0;
            }

            // Function to add a marker to map
            function addMarker() {
                // Coordinates for the new marker
                var markerPosition = { lat: lat, lng: lng }; // Example: San Francisco, CA

                // Create a new marker and set its position on the existing map
                var marker = new google.maps.Marker({
                    position: markerPosition,
                    map: map,
                });
            }

            // Call a function to add the marker
            addMarker();

            // Call the function whenever the window is resized
            window.addEventListener('resize', centerContainer4);

            container4.appendChild(container4Element1);

            // Call the function initially
            centerContainer4();

        })
        .catch(error => console.error('Error fetching building data:', error));

    const container5 = document.getElementById('events');
    const container5Element = document.createElement('section');
    container5Element.innerText = "Events: ";
    container5.appendChild(container5Element);


    // document.getElementById('favourites')


}

document.addEventListener("DOMContentLoaded", function () {
    var favouritesButton = document.getElementById('favouritesButton');
    var isFavourited = false;

    favouritesButton.addEventListener('click', function() {
        isFavourited = !isFavourited;

        if (isFavourited) {
            favouritesButton.classList.add('favourited');
            favouritesButton.textContent = '🤍 Remove from Favourites 🤍';
            // Perform additional actions when favourited
        }
        else {
            favouritesButton.classList.remove('favourited');
            favouritesButton.textContent = '🩷 Add to Favourites 🩷';
            // Perform additional actions when not favourited
        }
    });
});