
function initFaceRecognition() {
    var key = 'fc54a3e2acc24cdb9a37e58f470e395f';
    var url = 'https://api.projectoxford.ai/face/v1.0/detect';
   
    sendToApi(url, key).then(function (result) {
        console.log(result);

    }, function (err) {
        alert('connectionerror ' + err);
    });
}




function initIdentification() {
    var key = 'fc54a3e2acc24cdb9a37e58f470e395f';
    var url2 = 'https://api.projectoxford.ai/face/v1.0/identify';



    sendToApi(url2, key).then(function (result2) {
        console.log(result2);
    })
}


//$('#createpersongroupbutton').click(function createPersonGroup() {
//    var params = {
//        "name": "1",
//        "userData": "test data"
//    }

//    $.ajax({
//        url: "https://api.projectoxford.ai/face/v1.0/persongroups/1",
//        beforeSend: function (xhrObj) {
//            // Request headers
//            xhrObj.setRequestHeader("Content-Type", "application/json");
//            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "fc54a3e2acc24cdb9a37e58f470e395f");
//        },
//        type: "PUT",
//        dataType: "json",
//        data: "{body}"
//        // Request body
//    })
//    .done(function (data) {
//        alert("success");
//    })
//    .fail(function () {
//        alert("creategrouperror");
//    });
//});
