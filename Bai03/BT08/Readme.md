BÀI TẬP 08 – QUẢN LÝ TẬP TIN VỚI FILE SYSTEM
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
Terminal: nhập lệnh: cd Bai03 , sau đó nhập lệnh : cd BT08
  <img width="392" height="51" alt="image" src="https://github.com/user-attachments/assets/1d1cd1c0-3f6e-4781-b66b-104865942bd5" />

  Tiếp đến nhập lệnh: node bai08.js
4. Hình ảnh kết quả
Hình 1: Chương trình chạy trên Terminal
<img width="517" height="372" alt="image" src="https://github.com/user-attachments/assets/124f094e-1424-4ca8-b393-109dba31887a" />


Hình 2: Kết quả thư mục data

<img width="359" height="170" alt="image" src="https://github.com/user-attachments/assets/323a4b56-baa6-4808-a9a5-3661859866f3" />

5. Kết quả đạt được
- Tạo thành công thư mục data.
- Tạo và ghi thành công tập tin ghichu.txt với 3 dòng nội dung.
- Đổi tên thành công ghichu_moi.txt.
- Đọc và hiển thị được nội dung tập tin sau khi đổi tên.
- Tạo và xóa thành công tập tin tam.txt.
Kết luận: Hoàn thành bài tập quản lý tập tin bằng module File System (fs) trong Node.js.


