$('#lang').on('change', function () {
    if (typeof textDetails != 'undefined') {
        sendToTranslate(textDetails);
    }
});

function sendToTranslate(text) {
    var translationKey = 'AIzaSyDufAcpo-3M6WMHctCs6L-kgO1hJVLnddY';
    var lang = $("#lang option:selected").val();
    if (lang === 'en') {
        $('#description').html(text);
    }
    else {
        $.ajax({
            url: "https://www.googleapis.com/language/translate/v2?key=" + translationKey + "&q=" + text + "&source=en&target=" + lang,
            processData: false,
            type: 'GET'
        })
    .done(function (result) {
        $('#description').html(result.data.translations[0].translatedText);
    })
    .fail(function (err) {
        console.log('error' + err);
    });
    }
};