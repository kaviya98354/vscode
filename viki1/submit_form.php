<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Add your email sending logic here
    $to = "your-email@example.com";
    $headers = "From: $email";
    $email_subject = "Contact Form Submission: $subject";
    $email_body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    mail($to, $email_subject, $email_body, $headers);

    echo "Thank you for your message!";
}
?>
