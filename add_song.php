<?php
header("Access-Control-Allow-Origin: *"); //add this CORS header to enable any domain to send HTTP requests to these endpoints:
$host = "localhost"; 
$user = "root"; 
$password = ""; 
$dbname = "spotify"; 
$id = '';
 
$con = mysqli_connect($host, $user, $password, $dbname);
 
$method = $_SERVER['REQUEST_METHOD'];
 
 
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}
 
 
switch ($method) {
    case 'GET':
      $sql = "select * from new_song"; 
      break;
    case 'POST':
      $artwork = $_POST["artwork"];
      $song_name = $_POST["song_name"];
      $date_released = $_POST["date_released"];
      $artists = $_POST["artists"];
      
      $sql = "INSERT INTO new_song (artwork, song_name, date_released, artists) VALUES ('$artwork', '$song_name', '$date_released', '$artists')";
      // $sql = "insert into contacts (name, email, city, country, job) values ('$name', '$email', '$city', '$country', '$job')"; 
      // $sql = "INSERT INTO add_artist (aritst_name, DOB, bio) VALUES ('$aritst_name', '$DOB', '$bio')";
      break;
}
 
// run SQL statement
$result = mysqli_query($con,$sql);
 
// die if SQL statement failed
if (!$result) {
  http_response_code(404);
  die(mysqli_error($con));
}
 
if ($method == 'GET') {
    if (!$id) echo '[';
    for ($i=0 ; $i<mysqli_num_rows($result) ; $i++) {
      echo ($i>0?',':'').json_encode(mysqli_fetch_object($result));
    }
    if (!$id) echo ']';
  } elseif ($method == 'POST') {
    echo json_encode($result);
  } else {
    echo mysqli_affected_rows($con);
  }
 
$con->close();