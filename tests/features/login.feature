Feature: Đăng nhập

  Scenario: Đăng nhập thành công
    Given Người dùng truy cập trang đăng nhập
    When Người dùng nhập email "admin@example.com" và mật khẩu "growcrm"
    And Người dùng nhấp vào nút đăng nhập
    Then Người dùng được chuyển hướng đến trang chủ

  Scenario: Đăng nhập thất bại - Tên người dùng không tồn tại
    Given Người dùng truy cập trang đăng nhập
    When Người dùng nhập email "invalid_username" và mật khẩu "valid_password"
    And Người dùng nhấp vào nút đăng nhập
    Then Người dùng thấy thông báo lỗi "Invalid login details"

 