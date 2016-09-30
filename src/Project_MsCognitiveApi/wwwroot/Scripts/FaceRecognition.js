
function initFaceRecognition() {


    var key = 'fc54a3e2acc24cdb9a37e58f470e395f';
    var url = 'https://api.projectoxford.ai/face/v1.0/detect';
   
    sendToApi(url, key).then(function (result) {
        console.log(result);
        var faceidvariabel = result[0].faceId;
        console.log(faceidvariabel);
    
        
        initIdentification(faceidvariabel);

    }, function (err) {
        alert('connectionerror ' + err);
    });
    
}

function initIdentification(faceidvariabel) {
    var key = 'fc54a3e2acc24cdb9a37e58f470e395f';
    var params = {
        "personGroupId": "bestegruppen",
        "faceIds": [
            faceidvariabel

        ],
        "maxNumOfCandidatesReturned": 1,
        "confidenceThreshold": 0.5
    }
    var url2 = 'https://api.projectoxford.ai/face/v1.0/identify';


    return new Promise(function (resolve, reject) {
        $.ajax({
            url: url2,
            beforeSend: function (xhrObj) {
                xhrObj.setRequestHeader('Content-Type', 'application/json');
                xhrObj.setRequestHeader('Ocp-Apim-Subscription-Key', key);
            },
            type: 'POST',
            data: JSON.stringify(params),
            dataType: "json"
        })
    .done(function (data) {
   
        showPerson(data);
      
        resolve(data);
   
    })
    .fail(function () {
        console.log("fail");
        reject('apperror');
    });
    });


};

function showPerson(data) {
   // console.log(data.candidates);
    console.log(data[0].candidates);
    if (data[0].personId == 'ca6fac49-f056-4515-8cb0-35aad093717b') {

        console.log('hej paula');

    }

    else {
        console.log('det är inte paula');
    }

    //funktion som visar vilken person som identifierats på bilden, 
    //ta in personens id som parameter
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
