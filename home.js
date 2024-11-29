function generateQR() {
    document.querySelector("#qr-image").style.display = "block"; // Show QR section
    let QRtext = document.querySelector("#text").value.trim(); // Get and trim the input text

    // Check if the input is empty
    if (QRtext.length === 0) {
        document.querySelector("#qr-image .error").innerHTML = "Please enter some text to generate the QR code.";
        document.querySelector("#img").style.display = "none";
    } else {
        document.querySelector("#img").style.display = "block";
        document.querySelector("#qr-image .error").innerHTML = "";

        // Encode the input text for the URL
        const encodedText = encodeURIComponent(QRtext);

        // Set the QR code image source
        document.querySelector("#img").src = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=" + encodedText;

        // Show success message once the image is loaded
        document.querySelector("#img").onload = function() {
            alert("QR Code generated successfully! You can now scan it.");
        };
    }
}
