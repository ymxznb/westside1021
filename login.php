<?php
include 'db_config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // 获取表单数据
    $username = $_POST['username'];
    $password = $_POST['password'];

    // 从数据库获取用户信息
    $sql = "SELECT id, password FROM users WHERE username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
        // 输出结果
        $row = $result->fetch_assoc();
        // 验证密码
        if (password_verify($password, $row['password'])) {
            // 登录成功后，重定向到主页
            header("Location: Home.html");
            exit;
        } else {
            echo "密码错误";
        }
    } else {
        echo "用户名不存在";
    }
}

$conn->close();
?>