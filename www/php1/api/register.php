<?php 
    header("Access-Control-Allow-Origin:*");

    //获取保存数据
    $username = $_POST["username"];
    $password = md5($_POST["password"]);
    //包含链接文件
    include "conn.php";
    //SQL语句
    $sql = "INSERT INTO we(username,password)VALUES('$username','$password')";
    //执行SQL语句
    $result = mysql_query($sql);
    $array = array("res_code"=>1,"res_error"=>"");
    if($result){
        $res_body = array("status"=>1,"username"=>$username,"message"=>"");
    } else {
        $res_body = array("status"=>0,"message"=>"有误：".mysql_error());
    }
    //构建返回的关联数组
    $array["res_body"] = $res_body;
    //返回JSON文本
    echo json_encode($array);
    //关闭
    mysql_close();
?>