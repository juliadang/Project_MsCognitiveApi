
function initVision() {
    var params = {
        // Request parameters
        "visualFeatures": "Description"
    };
    var key = 'a85d34e245f146ea833e41193f4b5a27';
    var url = 'https://api.projectoxford.ai/vision/v1.0/analyze?' + $.param(params);
    var data;
    sendToApi(url, key).then(function (result) {
        console.log(result);
        vision(result.description.captions[0]);
    }, function (err) {
        alert('error');
    });
}



function vision(data) {
    $('#description').html(data.text)
    $('#confidence').html('Confidence percentage: ' + Math.round((data.confidence * 100) * 10) / 10 + ' %')

}
