<?php 
    $toDo = [
        [
            'do' => 'Pulire casa'
        ],
        [
            'do' => 'Fare la spesa'
        ],
        [
            'do' => 'Cucinare'
        ],
        [
            'do' => 'Cambiare la lampadina'
        ],
    ];

    header('Content-Type: application/json');
    $nowItsJson = json_encode($toDo);
    echo $nowItsJson;
?>