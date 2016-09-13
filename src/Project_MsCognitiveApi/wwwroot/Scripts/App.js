//Webcam.set({
//    width: auto,
//    height: auto,
//    image_format: 'jpeg',
//    jpeg_quality: 90
//});

function setup() {
    Webcam.attach('#my_camera');
}
var picture;
function take_snapshot() {
    // take snapshot and get image data
    Webcam.snap(function (data_uri) {
        // display results in page
        document.getElementById('results').innerHTML =
            '<h2>Here is your image:</h2>' +
            '<img src="' + data_uri + '"/>';
        picture = data_uri;
    });


}

makeblob = function (dataURL) {
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

function save_snapshot() {
    $.ajax({
        url: 'https://api.projectoxford.ai/emotion/v1.0/recognize?',
        processData: false,
        beforeSend: function (xhrObj) {
            xhrObj.setRequestHeader('Content-Type', 'application/octet-stream');
            xhrObj.setRequestHeader('Ocp-Apim-Subscription-Key', '5d8a62057a35480ea5ec622d72f25071');
        },
        type: 'POST',
        data: makeblob(picture)
    })
    .done(function (data) {
        console.log(data);
    })
    .fail(function () {
        alert("error");
    });
};