<?php 

    header('Content-Type: application/json');

    $toDo = file_get_contents("store.json");
    $toDoDecode = json_decode($toDO, true);

    $nowItsJson = json_encode($toDo);
    echo $nowItsJson;
?>