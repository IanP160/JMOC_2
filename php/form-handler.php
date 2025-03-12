<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $service = $_POST["service"];
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Send Email (optional)
    $to = "your-email@jmocservices.com";
    $subject = "New Inquiry: $service";
    $body = "Name: $name\nEmail: $email\nService Requested: $service\nMessage: $message";
    mail($to, $subject, $body);

    // Redirect to a thank-you page
    header("Location: /thank-you.html");
    exit();
}
?>
