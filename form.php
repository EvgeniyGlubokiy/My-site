<?php
$recepient = "eglubokiy@gmail.com";
$siteName = "evgeniyglubokiy2020.pp.ua";
$name = trim($_POST["name"]);
$mail = trim($_POST["mail"]);
$phone = trim($_POST["phone"]);
$messageText = trim($_POST["message"]);

$message = "Имя клиента: $name \nE-mail: $mail \nТелефон: $phone \nСообщение: $messageText";

$pageTitle = "Заявка с сайта \"$siteName\"";

mail($recepient, $pageTitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?>
