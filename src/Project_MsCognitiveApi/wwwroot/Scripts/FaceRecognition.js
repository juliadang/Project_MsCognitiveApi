
function initFaceRecognition() {
    var key = '2af466be2ae94cc4a5b94fe31ad0d0e3';
    var url = '??';
    sendToApi(url, key).then(function (result) {
        
    }, function (err) {
        alert('error ' + err);
    });
}



$(function createPersonGroup() {
    var params = {
   
    "name":"group1" 
    };
      
    $.ajax({
        url: "https://api.projectoxford.ai/face/v1.0/persongroups/{personGroupId}?" + $.param(params),
        beforeSend: function(xhrObj){
            // Request headers
            xhrObj.setRequestHeader("Content-Type", "application/json");
            xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "fc54a3e2acc24cdb9a37e58f470e395f");
        },
        type: "GET",
        // Request body
        data: "{body}",
    })
    .done(function(data) {
        alert("success");
    })
    .fail(function() {
        alert("error");
    });
});

