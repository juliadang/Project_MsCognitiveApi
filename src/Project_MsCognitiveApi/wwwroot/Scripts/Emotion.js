

function initEmotion() {
    var key = '5d8a62057a35480ea5ec622d72f25071';
    var url = 'https://api.projectoxford.ai/emotion/v1.0/recognize?';
    sendToApi(url, key).then(function (result) {
        showEmotion(result[0].scores);
    }, function (err) {
        alert('initemotionerror ' + err);
    });
}


function showEmotion(data) {

    var happiness = ((data.happiness * 100) * 10) / 10;
    var anger = ((data.anger * 100) * 10) / 10;
    var disgust = ((data.disgust * 100) * 10) / 10;
    var fear = ((data.fear * 100) * 10) / 10;
    var sadness = ((data.sadness * 100) * 10) / 10;
    var contempt = ((data.contempt * 100) * 10) / 10;
    var surprise = ((data.surprise * 100) * 10) / 10;
    var neutral = ((data.neutral * 100) * 10) / 10;

    if (happiness > 50) {
        $('#wow').html('You are really happy!');
    }
    else if (anger > 50) {
        $('#wow').html('You are really angry (have a chill pill)!');
    }
    else if (disgust > 50) {
        $('#wow').html('You are really disgusted. Whats wrong?!');
    }
    else if (fear > 50) {
        $('#wow').html('You are really scared (brrrrrrrrrrrrrrr)!');
    }
    else if (sadness > 50) {
        $('#wow').html('You are really sad. Come and have a hug!');
    }
    else if (neutral > 50) {
        $('#wow').html('You are neutral. Show some emotion!');
    }
    else if (surprise > 50) {
        $('#wow').html('You are really surprised. Did our app impress you that much?');
    }
    else if (contempt > 50) {
        $('#wow').html('You are really contemptuous.');
    }
    else {
        $('#wow').html('Im sorry, we cant for certain tell how you are feeling');
    }

    $('#Happiness').html(Math.round((data.happiness * 100) * 10) / 10 + ' %');
    $('#Anger').html(Math.round((data.anger * 100) * 10) / 10 + ' %');
    $('#Disgust').html(Math.round((data.disgust * 100) * 10) / 10 + ' %');
    $('#Fear').html(Math.round((data.fear * 100) * 10) / 10 + ' %');
    $('#Sadness').html(Math.round((data.sadness * 100) * 10) / 10 + ' %');
    $('#Contempt').html(Math.round((data.contempt * 100) * 10) / 10 + ' %');
    $('#Neutral').html(Math.round((data.neutral * 100) * 10) / 10 + ' %');
    $('#Surprise').html(Math.round((data.surprise * 100) * 10) / 10 + ' %');
}