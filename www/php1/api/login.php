<?php 
    header("Access-Control-Allow-Origin:*");
    //获取上传数据
    $username = $_POST["usernameL"];
    $password = md5($_POST["passwordL"]);
    //包含链接文件
    include "conn.php";
    //SQL语句
    $sql = "SELECT * FROM we WHERE username='$username' AND password='$password'";
    //执行SQL语句
    $result = mysql_query($sql);
    $array = array("res_code"=>1,"res_error"=>"");
    if($row=mysql_fetch_assoc($result)){
        $array["res_body"] = array("status"=>1,"info"=>$row);
    } else {
        $array["res_body"] = array("status"=>0);
    }
    //返回JSON文本
    echo json_encode($array);
    //关闭
    mysql_close();
?>