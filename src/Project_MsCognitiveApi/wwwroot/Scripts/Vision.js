
function initVision() {
    var key = 'a85d34e245f146ea833e41193f4b5a27';
    var url = 'https://api.projectoxford.ai/vision/v1.0/analyze?';
    var data;
    sendToApi(url, key).then(function (result) {
        console.log(result);
    }, function (err) {
        alert('error');
    });
}


function vision(data) {
    console.log(data);
}