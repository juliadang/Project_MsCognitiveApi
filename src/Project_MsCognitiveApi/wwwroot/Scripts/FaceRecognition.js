
function initFaceRecognition() {
    var key = 'fc54a3e2acc24cdb9a37e58f470e395f';
    var url = 'https://api.projectoxford.ai/face/v1.0/detect';
    sendToApi(url, key).then(function (result) {
        
    }, function (err) {
        alert('connectionerror ' + err);
    });
}



$('#createpersongroupbutton').click(function createPersonGroup() {
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
        type: "PUT",
        // Request body
        data: "{body}",
    })
    .done(function(data) {
        alert("success");
    })
    .fail(function() {
        alert("creategrouperror");
    });
});
