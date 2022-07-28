<?php
    $name = $_POST['name'];
    $visitor_email = $__POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $email_form = "duryeajoshua@gmail.com";

    $email_subject = "New Email Developer Enquiry";

    $email_body = "Name: $name./n".
                    "Email: $visitor_email./n".
                    "Phone: $phone./n".
                    "Message: $message./n";

    $to = "duryeajoshua@gmail.com";

    $headers = "form: $email_form /r/n";

    $headers .= "Reply-To: $visitor_email /r/n";

    mail($to,$email_subject,$email-body,$headers);

    header("Location: index.html");

?>