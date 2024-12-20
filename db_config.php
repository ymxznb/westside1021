<?php
// 数据库配置文件
$servername = "localhost";
$username = "your_database_username";
$password = "your_database_password";
$dbname = "your_database_name";

// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);

// 检查连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}

?>