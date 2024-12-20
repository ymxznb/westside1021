<?php
// 打开输出缓冲
ob_start();

// 开启错误报告
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include 'db_config.php';

// 检查是否有 POST 请求
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 获取表单数据
    $username = $_POST['username'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    // 检查密码是否匹配
    if ($password !== $confirm_password) {
        ob_end_clean();
        die("密码不匹配");
    }

    // 密码加密
    $password = password_hash($password, PASSWORD_DEFAULT);

    // 准备 SQL 语句
    $sql = "INSERT INTO users (username, password) VALUES (?, ?)";
    $stmt = $conn->prepare($sql);

    if ($stmt === false) {
        ob_end_clean();
        die("准备语句失败: " . $conn->error);
    }

    $stmt->bind_param("ss", $username, $password);

    // 执行语句
    if ($stmt->execute()) {
        // 注册成功后，重定向到登录页面
        header("Location: Home.html");
        ob_end_flush();
        exit;
    } else {
        ob_end_clean();
        die("执行语句失败: " . $stmt->error);
    }
}

// 关闭数据库连接
$conn->close();

// 清除输出缓冲区
ob_end_flush();
?>