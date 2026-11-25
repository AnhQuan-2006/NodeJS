# BÀI TẬP 10 – LIÊN KẾT HAI COLLECTION TRONG MONGODB


## 1. Mục tiêu bài tập

Thực hành liên kết hai Collection trong MongoDB bằng phương thức `aggregate()` kết hợp với toán tử `$lookup`.

## 2. Các bước thực hiện

- Bước 1: Kết nối MongoDB.
- Bước 2: Chọn database `qlsinhvien`.
- Bước 3: Tạo collection `departments` gồm 2 khoa.
- Bước 4: Tạo collection `students_join` gồm 4 sinh viên.
- Bước 5: Sử dụng `aggregate()` kết hợp `$lookup` để liên kết hai collection thông qua trường `makhoa`.
- Bước 6: Sử dụng `$unwind` và `$project` để hiển thị thông tin sinh viên và tên khoa tương ứng.
- Bước 7: Hiển thị danh sách sinh viên sau khi liên kết.

## 3. Các lệnh thực hiện
Mở Terminal chạy lệnh: cd Bai03  , sau đó chạy lệnh: cd BT10

<img width="373" height="62" alt="image" src="https://github.com/user-attachments/assets/28e5e998-562d-442d-a025-cb14079509c6" />


Cài đặt thư viện MongoDB:

npm.cmd install mongodb

Sau đó chạy chương trình:  node bai10.js


## 4. Hình ảnh kết quả

### Hình 1: Kết nối MongoDB và tạo dữ liệu hai Collection

<img width="473" height="254" alt="image" src="https://github.com/user-attachments/assets/ce8fb965-bda8-4e23-885d-b1087225ee22" />


### Hình 2: Kết quả hiển thị tên khoa

<img width="449" height="776" alt="image" src="https://github.com/user-attachments/assets/bdef3ee0-7d80-4382-a0bf-532eb3708810" />

Ảnh MongoDB:

<img width="1662" height="727" alt="image" src="https://github.com/user-attachments/assets/840b2b9b-5c99-47fe-ab47-82c5c9648d71" />

<img width="1766" height="332" alt="image" src="https://github.com/user-attachments/assets/7b0bd992-1233-4a00-83c4-23215f9487b6" />


## 5. Kết quả đạt được

- Kết nối thành công database qlsinhvien.
- Tạo collection departments gồm 2 khoa.
- Tạo collection students_join gồm 4 sinh viên.
- Sử dụng thành công aggregate() kết hợp $lookup.
- Liên kết hai collection thông qua trường makhoa.
- Hiển thị đầy đủ thông tin sinh viên và tên khoa tương ứng.

## 6. Kết luận

Hoàn thành bài tập liên kết hai Collection trong MongoDB bằng Node.js. Đã thực hành thành công aggregate(), $lookup, $unwind và $project để truy vấn và hiển thị dữ liệu từ hai Collection.
