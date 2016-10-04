
function initFaceRecognition() {


    var key = 'fc54a3e2acc24cdb9a37e58f470e395f';
    var url = 'https://api.projectoxford.ai/face/v1.0/detect';

    sendToApi(url, key).then(function (result) {
        console.log(result);


        if (result.length !== 0) {
            if (result[0].faceId !== null) {
                var faceidvariabel = result[0].faceId;
                initIdentification(faceidvariabel);

            }
        }
        else {
            $('#recognizedPerson').html('Kunde inte hitta några ansikten');
        }



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
            dataType: "json",
        })


    .done(function (data) {

        showPerson(data);

        resolve(data);

    })
    .fail(function (data) {
        console.log("fail");
        reject('apperror');
    });
    });


};

function showPerson(data) {
    console.log(data);
    if (data[0].candidates.length !== 0) {



        if (data[0].candidates[0].personId.length > 0) {
            var personIdvariabel = data[0].candidates[0].personId;
            console.log(personIdvariabel);
            var personName = identifyPerson(personIdvariabel).toString();
     
            console.log(personName)        
        } 

    } else {
        console.log('personen finns inte i group ID');
        $('#recognizedPerson').html('Känner inte igen person');

    }

    //funktion som visar vilken person som identifierats på bilden, 
    //ta in personens id som parameter
}

function identifyPerson(id) {
    var key = 'fc54a3e2acc24cdb9a37e58f470e395f';
    var url = 'https://api.projectoxford.ai/face/v1.0/persongroups/bestegruppen/persons/' + id;

    return new Promise(function (resolve, reject) {
        $.ajax({
            url: url,
            beforeSend: function (xhrObj) {
                xhrObj.setRequestHeader('Content-Type', 'application/json');
                xhrObj.setRequestHeader('Ocp-Apim-Subscription-Key', key);
            },
            type: 'GET',
            dataType: "json",


        })


    .done(function (result) {
        $('#recognizedPerson').html('Det är ju ' + result.name + ' !!')

        console.log(result.name);

        resolve(result.name);
 

    })
    .fail(function (data) {
        console.log("fail");
        reject('identifypersonerror');
    });
    });


};

function addPerson() {
    var key = 'fc54a3e2acc24cdb9a37e58f470e395f';
    var url = 'https://api.projectoxford.ai/face/v1.0/persongroups/bestegruppen/persons';

    var params = {
        "name": "Person1",
        "userData": "User-provided data attached to the person"
    };

    return new Promise(function (resolve, reject) {
        $.ajax({
            url: url,
            beforeSend: function (xhrObj) {
                xhrObj.setRequestHeader('Content-Type', 'application/json');
                xhrObj.setRequestHeader('Ocp-Apim-Subscription-Key', key);
            },
            type: 'POST',
            data: params,
            dataType: "json",


        })


    .done(function (result) {


        console.log(result.name);

        resolve(result.name);


    })
    .fail(function (data) {
        console.log("fail");
        reject('addpersonerror');
    });
    });



}



    
