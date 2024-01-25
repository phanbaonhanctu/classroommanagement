    // kiểm tra xem trang web đã lưu cookie nào hay chưa
    var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    
    // nếu không có cookie nào được lưu
    if (cookieValue === "") {
      // chuyển hướng người dùng đến trang đăng nhập
      window.location.href = "/login/login.html";
    }