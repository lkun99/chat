<?php
include('sql_connect.php');
if (isset($_POST["name"])&&isset($_POST["mess"])){

    if(trim($_POST['name']!="")) $name = trim($_POST['name']);
    else $name = "anonymous";
    if(trim($_POST['mess']=="")) die("Wiadomość nie może być pusta");
    $mess =  trim($_POST['mess']);
    $date = date("H:i:s");
    $avatar = $_POST['avatar'];
    $mess_2 = "<span><b>".$name."</b>: ".trim($_POST['mess'])."</span><span class='date'> ".date("H:i:s")."</span>";
   
    $sql->query("INSERT INTO `messages` (`name`,`message`,`date`,`avatar`) VALUES ('$name','$mess','$date','$avatar');");
  //  else echo $sql->error;
}

$query_2 = "SELECT * FROM `messages` ORDER BY `id` DESC LIMIT 3;";
$result = $sql->query($query_2);
$rows = $result->fetch_all(MYSQLI_NUM);
$txt=[];

foreach($rows as $r)
{
	array_push($txt,$r);
}
$txt2 = array_reverse($txt);
$json2 = json_encode($txt2);
echo $json2;
?>