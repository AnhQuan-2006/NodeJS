1. Mục tiêu

Sử dụng module fs trong Node.js để:

Tạo tập tin thongtin.txt chứa họ tên và mã sinh viên.

Đọc và hiển thị nội dung tập tin lên Terminal.

Sử dụng appendFile() để ghi nối thêm tên lớp.

Đọc lại tập tin để kiểm tra nội dung sau khi cập nhật.

2. Cấu trúc thư mục

Bt03/
├── bai03.js
├── thongtin.txt
└── README.md

3. Các bước thực hiện

Bước 1: Tạo tập tin

Tạo file bai03.js và sử dụng module fs để tạo tập tin thongtin.txt.

Bước 2: Đọc tập tin

Sử dụng fs.readFileSync() để đọc và hiển thị thông tin sinh viên lên Terminal.

Bước 3: Ghi nối dữ liệu

Sử dụng fs.appendFile() để ghi thêm tên lớp vào cuối tập tin thongtin.txt.

Bước 4: Kiểm tra kết quả

Sử dụng fs.readFile() để đọc lại tập tin sau khi cập nhật và hiển thị nội dung lên Terminal.

4. Lệnh thực hiện

Mở Terminal tại thư mục Bt03 và chạy: cd BAI03 sau đó chạy tiếp: node BT03.js


5. Kết quả

Chương trình thực hiện thành công:

Tạo được tập tin thongtin.txt.

Hiển thị họ tên và mã sinh viên lên Terminal.

Ghi nối thêm tên lớp vào cuối tập tin.

Đọc lại và hiển thị đầy đủ nội dung sau khi cập nhật.

Nội dung cuối cùng của thongtin.txt gồm họ tên, mã sinh viên và tên lớp.

