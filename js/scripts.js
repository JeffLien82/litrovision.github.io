function sendMail() {
    var recipient = "mailto:johnsont^trienttech.com";
    // var recipient = "mailto:nkfellom^gmail.com"
    var subject = "?subject=LitroVision Inquiry - " + document.getElementById('name').value;
    var body = "&body=" + document.getElementById('message').value;

    var link = recipient.replace('^', '@') + subject + body;

    window.location.href = link;

    document.getElementById('message').value = "";
    document.getElementById('name').value = "";
}