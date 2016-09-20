var snapShot;

function setup() {
    Webcam.attach('#my_camera');

    Webcam.set({
        dest_width: 720,
        dest_height: 480
    });
}


function take_snapshot() {
    // take snapshot and get image data
    Webcam.snap(function (picture) {
        // display results in page
        $('#results').html('<img src="' + picture + '"/>');
        $('#hej').html('<img src="' + picture + '"/>');
        snapShot = picture;
    });
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

