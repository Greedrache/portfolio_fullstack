<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

// Content Type JSON check
$_POST = json_decode(file_get_contents('php://input'), true);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Bitte fülle das Formular aus und überprüfe deine E-Mail-Adresse.";
        exit;
    }

    $recipient = "thieletim15@gmail.com";
    $subject = "Neue Nachricht von $name (Portfolio)";

    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    $domain = isset($_SERVER['SERVER_NAME']) ? $_SERVER['SERVER_NAME'] : 'portfolio.local';
    $email_headers = "From: noreply@$domain\r\n";
    
    $email_headers .= "Reply-To: $email\r\n";
    $email_headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Vielen Dank! Deine Nachricht wurde gesendet.";
    } else {
        http_response_code(500);
        echo "Ups! Etwas ist schiefgelaufen und wir konnten deine Nachricht nicht senden.";
    }

} else {
    http_response_code(403);
    echo "Es gab ein Problem mit deiner Einsendung, bitte versuche es erneut.";
}
?>