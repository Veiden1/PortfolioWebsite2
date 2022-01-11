<?php
if((isset($_POST['phone-number'])&&$_POST['phone-number']!="+7(___)___-__-__")){ 
  $to = 'swirarbol@yandex.ru';
  $subject = 'Новая заявка';
  $message = '
        <html>
            <head>
                <title>Новая заявка</title>
            </head>
            <body>
                <p><b>Номер телефона:</b> '.$_POST['phone-number'].'</p>                        
            </body>
        </html>'; 
  $headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
  $from = "root@localhost.com";
$headers .= "From:" .$from; 
mail($to, $subject, $message, $headers);

  echo json_encode(array('status' => 'success'));
} else {
  echo json_encode(array('status' => 'error'));
}
?>