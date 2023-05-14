<?php
header("Access-Control-Allow-Origin: *");
$db = new mysqli("localhost", "u184067125_BolsaEmpleoDB", "BolsaEmpleoDB2023", "u184067125_BolsaEmpleoDB");
if ($db->connect_errno)
    die("error de conexión: " . $db->connect_error);

function SqlGet($table, $fields = '*', $rows = false, $condition = ""){
    global $db;
    $limit = $rows ? " LIMIT {$rows}" : "";
    $condition = $condition ? "WHERE {$condition}" : "";
    $result = $db->query("SELECT $fields FROM {$table} {$condition} {$limit}");
    //die("SELECT $fields FROM {$table} {$condition} {$limit}");
    die(json_encode($result->fetch_all(MYSQLI_ASSOC)));
}
function SqlSave($table, $fields, $values){
    global $db;
    $fields_src = implode(", ", $fields);
    $values_src = implode("', '", $values);
    if($db->query("INSERT INTO {$table} ({$fields_src}) VALUES ('{$values_src}')"))
        die(json_encode(Array('response' => 'saved', 'id' => $db->insert_id)));
    die(json_encode(Array('response' => 'error', 'error' => $db->connect_error)));
}
function SqlUpdate($table, $row = "", $fields, $values, $condition = ""){
    global $db;
    $update = Array();
    foreach($fields as $key => $field){
        if($values[$key] == '')
            $update[] = "{$field}=NULL";
        else
            $update[] = "{$field}='{$values[$key]}'";
    }
    $update_src = implode(", ", $update);
    $condition = $condition != '' ? "{$condition}" : "id={$row}";
    if($db->query("UPDATE {$table} SET {$update_src} WHERE {$condition}"))
        die(json_encode(Array('response' => 'updated')));
    die(json_encode(Array('response' => 'error', 'error' => $db->connect_error)));
}
function SqlDelete($table, $row){
    global $db;
    if($db->query("DELETE FROM {$table} WHERE id={$row}"))
        die(json_encode(Array('response' => 'deleted')));
    die(json_encode(Array('response' => 'error', 'error' => $db->connect_error)));
}

switch ($_REQUEST['action']) {
    case 'get':
        $rows = isset($_REQUEST['rows']) && $_REQUEST['rows'];
        $fields = isset($_REQUEST['fields']) ? explode(',', $_REQUEST['fields']) : "*";
        $condition = isset($_REQUEST['condition']) ? $_REQUEST['condition'] : "";
        if(isset($_REQUEST['table']))
            SqlGet($_REQUEST['table'], $fields, $rows, $condition);
        else
            die(json_encode(Array('response' => 'error', 'error' => 'Error de parámetros.')));
        break;
    case 'save':
        if(isset($_REQUEST['table']) && isset($_REQUEST['fields']) && isset($_REQUEST['values'])){
            $fields = explode(',', $_REQUEST['fields']);
            $values = explode(',', $_REQUEST['values']);
            SqlSave($_REQUEST['table'], $fields, $values);
        }else
            die(json_encode(Array('response' => 'error', 'error' => 'Error de parámetros.')));
        break;
    case 'update':
        if(isset($_REQUEST['table']) && (isset($_REQUEST['row']) || isset($_REQUEST['condition'])) && isset($_REQUEST['fields'])){
            $fields = explode(',', $_REQUEST['fields']);
            $values = explode(',', $_REQUEST['values']);
            $condition = isset($_REQUEST['row']) ? "" : $_REQUEST['condition'];
            SqlUpdate($_REQUEST['table'], $_REQUEST['row'], $fields, $values, $condition);
        }else
            die(json_encode(Array('response' => 'error', 'error' => 'Error de parámetros.')));
        break;
    case 'delete':
        if(isset($_REQUEST['table']) && isset($_REQUEST['row'])){
            SqlDelete($_REQUEST['table'], $_REQUEST['row']);
        }else
            die(json_encode(Array('response' => 'error', 'error' => 'Error de parámetros.')));
        break;
}