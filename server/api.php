<?php
header("Access-Control-Allow-Origin: *");
$db = new mysqli("localhost", "u184067125_BolsaEmpleoDB", "BolsaEmpleoDB2023", "u184067125_BolsaEmpleoDB");
if ($db->connect_errno)
    die("error de conexión: " . $db->connect_error);

function SqlGet($table, $fields = '*', $rows = false){
    global $db;
    $limit = $rows ? " LIMIT {$rows}" : "";
    $result = $db->query("SELECT $fields FROM {$table} {$limit}");
    die(json_encode($result- >fetch_all(MYSQLI_ASSOC)));
}
function SqlSave($table, $fields, $values){
    global $db;
    $fields_src = implode(", ", $fields);
    $values_src = implode("', '", $values);
    if($db->query("INSERT INTO {$table} ({$fields_src}) VALUES ('{$values_src}')"))
        die(json_encode(Array('response' => 'saved', 'id' =>$db-> insert_id)));
    die(json_encode(Array('response' => 'error', 'error' => $db->connect_error)));
}
function SqlUpdate($table, $row, $fields, $values){
    global $db;
    $update = Array();
    foreach($fields as $key => $field)
        $update[] = "{$field}='{$values[$key]}'";
    $update_src = implode(", ", $update);
    if($db->query("UPDATE {$table} SET {$update_src} WHERE id={$row}"))
        die(json_encode(Array('response' => 'updated')));
    die(json_encode(Array('response' => 'error', 'error' => $db->connect_error)));
}
function SqlDelete($table, $row){
    global $db;
    if($db->query("DELETE FROM {$table} WHERE id={$row}"))
        die(json_encode(Array('response' => 'deleted')));
    die(json_encode(Array('response' => 'error', 'error' => $db->connect_error)));
}

switch ($_POST['action']) {
    case 'get':
        $rows = isset($_POST['rows']) && $_POST['rows'];
        $fields = isset($_POST['fields']) ? explode(',', $_POST['fields']) : '*';
        if(isset($_POST['table']))
            SqlGet($_POST['table'], $fields, $rows);
        else
            die(json_encode(Array('response' => 'error', 'error' => 'Error de parámetros.')));
        break;
    case 'save':
        if(isset($_POST['table']) && isset($_POST['fields']) && isset($_POST['values'])){
            $fields = explode(',', $_POST['fields']);
            $values = explode(',', $_POST['values']);
            SqlSave($_POST['table'], $fields, $values);
        }else
            die(json_encode(Array('response' => 'error', 'error' => 'Error de parámetros.')));
        break;
    case 'update':
        if(isset($_POST['table']) && isset($_POST['row']) && isset($_POST['fields']) && isset($_POST['values'])){
            $fields = explode(',', $_POST['fields']);
            $values = explode(',', $_POST['values']);
            SqlUpdate($_POST['table'], $_POST['row'], $fields, $values);
        }else
            die(json_encode(Array('response' => 'error', 'error' => 'Error de parámetros.')));
        break;
    case 'delete':
        if(isset($_POST['table']) && isset($_POST['row'])){
            SqlDelete($_POST['table'], $_POST['row']);
        }else
            die(json_encode(Array('response' => 'error', 'error' => 'Error de parámetros.')));
        break;
}