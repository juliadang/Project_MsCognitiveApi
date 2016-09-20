function sendToTranslate(key, lang) {
    $.ajax({
        url: "https://www.googleapis.com/language/translate/v2?key=" + key + "&q=hello%20world&source=en&target=de",
        processData: false,
        type: 'POST',
        data: makeblob(picture)
    })
.done(function (data) {
    resolve(data);
})
.fail(function () {
    reject('error');
});
};