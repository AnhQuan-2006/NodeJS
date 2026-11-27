BÀI 4: XÂY DỰNG WEB VỚI NỀN TẢNG EXPRESS (EXPRESS FRAMEWORK)

Họ và tên: Nguyễn Anh Quân
Lớp: CĐ-CNTT18A
Môn học: Lập trình Node.js

1. Giới thiệu

Bài thực hành số 4 giúp tìm hiểu và xây dựng ứng dụng web bằng nền tảng Express Framework trong Node.js.

Thông qua bài thực hành, em đã làm quen với cách tạo máy chủ Express, xử lý các đường dẫn, sử dụng Middleware, Pug Template Engine, xử lý lỗi và xây dựng ứng dụng theo mô hình MVC.

2. Cài đặt môi trường

Bước 1: Khởi tạo dự án Node.js.

npm init -y

Bước 2: Cài đặt thư viện Express.

npm install express

Bước 3: Cài đặt Pug.

npm install pug

Bước 4: Cài đặt Body-parser.

npm install body-parser

3. Nội dung thực hành

Bài 1: Xây dựng ứng dụng Express cơ bản

Tạo máy chủ bằng Express.

Khai báo cổng chạy là 3000.

Tạo đường dẫn gốc /.

Hiển thị nội dung Hello, Express!.

Lệnh chạy:

node app.js

Kết quả: Máy chủ Express khởi động thành công và hiển thị nội dung Hello, Express! trên trình duyệt.

Hình ảnh kết quả:
(Chèn ảnh Terminal và trình duyệt tại đây)

Bài 2: Xử lý Route

Tạo đường dẫn trang chủ /.

Tạo đường dẫn giới thiệu /about.

Tạo đường dẫn /users nhận tham số query.

Xử lý đường dẫn không tồn tại bằng mã trạng thái 404.

Lệnh chạy:

node express_route.js

Kết quả:

/ hiển thị Trang chủ.

/about hiển thị Trang giới thiệu.

/users?name=Quan hiển thị Xin chào, Quan.

Đường dẫn không tồn tại hiển thị Không tìm thấy trang.

Hình ảnh kết quả:
(Chèn ảnh kết quả Route tại đây)

Bài 3: Sử dụng Middleware

Tạo Middleware ghi log yêu cầu truy cập.

Sử dụng next() để chuyển quyền điều khiển.

Hiển thị nội dung chào mừng trên trang chủ.

Lệnh chạy:

node express_middleware.js

Kết quả: Trình duyệt hiển thị Chào mừng đến với ứng dụng Express! Terminal hiển thị địa chỉ được truy cập.

Hình ảnh kết quả:
(Chèn ảnh kết quả Middleware tại đây)

Bài 4: Sử dụng Pug Template Engine

Thiết lập Pug làm Template Engine.

Tạo giao diện bằng file index.pug.

Truyền dữ liệu tên người dùng từ Express sang Pug.

Hiển thị lời chào trên trình duyệt.

Lệnh chạy:

node express_pug.js

Kết quả: Trang web hiển thị nội dung Hello, John Doe!

Hình ảnh kết quả:
(Chèn ảnh kết quả Pug tại đây)

Bài 5: Xử lý lỗi (Error Handling)

Tạo biểu mẫu nhập số bị chia và số chia.

Sử dụng phương thức POST để gửi dữ liệu.

Kiểm tra dữ liệu nhập vào.

Xử lý trường hợp nhập dữ liệu không hợp lệ hoặc chia cho 0.

Hiển thị kết quả phép chia khi dữ liệu hợp lệ.

Lệnh chạy:

node express_errorhandling.js

Kết quả:

Nhập 10 và 2: hiển thị Result: 5.

Nhập 1 và 0: hiển thị Invalid input.

Hình ảnh kết quả:
(Chèn ảnh tính toán thành công và ảnh xử lý lỗi tại đây)

Bài 6: Xây dựng ứng dụng theo mô hình MVC

Ứng dụng máy tính được xây dựng theo mô hình MVC gồm:

Model: Xử lý các phép tính cộng, trừ, nhân và chia.

View: Hiển thị giao diện máy tính bằng Pug.

Controller: Tiếp nhận yêu cầu và xử lý dữ liệu từ người dùng.

Lệnh chạy:

node my-express-app/app.js

Địa chỉ truy cập:

http://localhost:3000/calculator

Kết quả: Người dùng có thể nhập hai số, lựa chọn phép tính và xem kết quả trên giao diện máy tính.

Hình ảnh kết quả:
(Chèn ảnh giao diện máy tính và kết quả tại đây)

4. Kết luận

Sau khi hoàn thành bài thực hành, em đã hiểu được cách sử dụng Express Framework để xây dựng ứng dụng web bằng Node.js. Em đã thực hành tạo máy chủ, xử lý Route, Middleware, sử dụng Pug, xử lý lỗi và xây dựng ứng dụng theo mô hình MVC.
