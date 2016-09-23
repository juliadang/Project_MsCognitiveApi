var snapShot;

function setup() {
    Webcam.attach('#my_camera');

    
}

function CancelPreview() {
    Webcam.unfreeze();
    $('#test').fadeOut('slow');
};

function take_snapshot() {
    // take snapshot and get image data
    Webcam.snap(function (picture) {
        // display results in page
        snapShot = picture;
       
    });
    Webcam.freeze();
    $('#test').fadeIn('slow');
}

encodePicture = function (dataURL) {
    var BASE64_MARKER = ';base64,';
    if (dataURL.indexOf(BASE64_MARKER) == -1) {
        var parts = dataURL.split(',');
        var contentType = parts[0].split(':')[1];
        var raw = decodeURIComponent(parts[1]);
        return new Blob([raw], { type: contentType });
    }
    var parts = dataURL.split(BASE64_MARKER);
    var contentType = parts[0].split(':')[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;

    var uInt8Array = new Uint8Array(rawLength);

    for (var i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
}

function sendToApi(url, key) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: url,
            processData: false,
            beforeSend: function (xhrObj) {
                xhrObj.setRequestHeader('Content-Type', 'application/octet-stream');
                xhrObj.setRequestHeader('Ocp-Apim-Subscription-Key', key);
            },
            type: 'POST',
            data: encodePicture(snapShot)
        })
    .done(function (data) {
        resolve(data);
    })
    .fail(function () {
        reject('error');
    });
    });
};

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

