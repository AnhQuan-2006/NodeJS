BÀI TẬP 08 – QUẢN LÝ TẬP TIN VỚI FILE SYSTEM
Họ và tên: Nguyễn Anh Quân

Lớp: CĐ-CNTT18A
1. Mục tiêu bài tập
Sử dụng module fs của Node.js để thực hiện các thao tác quản lý tập tin và thư mục.
2. Các bước thực hiện
- Bước 1: Sử dụng fs.mkdirSync() để tạo thư mục data.
- Bước 2: Sử dụng fs.writeFileSync() để tạo tập tin ghichu.txt và ghi ít nhất 3 dòng nội dung.
- Bước 3: Sử dụng fs.renameSync() để đổi tên ghichu.txt thành ghichu_moi.txt.
- Bước 4: Sử dụng fs.readFileSync() để đọc và hiển thị nội dung tập tin sau khi đổi tên.
- Bước 5: Tạo tập tin tam.txt.
- Bước 6: Sử dụng fs.unlinkSync() để xóa tập tin tam.txt.
- Bước 7: Hiển thị thông báo kết quả của từng thao tác.
3. Lệnh chạy chương trình
node bai08.js
4. Hình ảnh kết quả
Hình 1: Chương trình chạy trên Terminal


Hình 2: Kết quả thư mục data


5. Kết quả đạt được
- Tạo thành công thư mục data.
- Tạo và ghi thành công tập tin ghichu.txt với 3 dòng nội dung.
- Đổi tên thành công ghichu_moi.txt.
- Đọc và hiển thị được nội dung tập tin sau khi đổi tên.
- Tạo và xóa thành công tập tin tam.txt.
Kết luận: Hoàn thành bài tập quản lý tập tin bằng module File System (fs) trong Node.js.




Lưu ý: Hai ảnh trong README là ảnh minh họa vị trí cần chèn. Bạn cần chụp ảnh thật và thay bằng ảnh của mình. Có thể tạo thêm thư mục images để lưu ảnh.
6. Chụp ảnh nộp bài
Bạn cần chuẩn bị 2 ảnh:
1. Ảnh Terminal: Hiển thị lệnh node bai08.js và toàn bộ thông báo kết quả.
2. Ảnh thư mục data: Hiển thị tập tin ghichu_moi.txt, chứng minh tam.txt đã bị xóa