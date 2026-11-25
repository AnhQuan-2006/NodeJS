# BÀI TẬP 09 – XÓA DỮ LIỆU CÓ ĐIỀU KIỆN TRONG MONGODB


## 1. Mục tiêu bài tập

Thực hành kết nối MongoDB và sử dụng các phương thức xóa dữ liệu có điều kiện.

## 2. Các bước thực hiện

- Bước 1: Kết nối MongoDB 
- Bước 2: Chọn database `qlsinhvien`.
- Bước 3: Sử dụng collection `students_test`.
- Bước 4: Thêm 5 sinh viên mẫu gồm masv, hoten, tuoi, diem bằng `insertMany()`.
- Bước 5: Sử dụng `deleteOne()` để xóa sinh viên có mã SV01.
- Bước 6: Sử dụng `deleteMany()` để xóa các sinh viên có điểm dưới 5.
- Bước 7: Hiển thị số bản ghi đã xóa.
- Bước 8: Sử dụng `find()` để hiển thị danh sách sinh viên còn lại.

## 3. Các lệnh thực hiện

mở Terminal nhập; cd Bai03  , sau đó nhập : cd BT09 

<img width="369" height="47" alt="image" src="https://github.com/user-attachments/assets/0afa6def-b4a1-4759-acfe-988a54d53e81" />

Cài đặt thư viện MongoDB:
npm.cmd install mongodb

Chạy chương trình: node bai09.js

<img width="538" height="792" alt="image" src="https://github.com/user-attachments/assets/67d3e60a-fc86-4513-bc1c-1848574cfe6a" />

ảnh MongoDB:

<img width="1742" height="530" alt="image" src="https://github.com/user-attachments/assets/28c02ebf-ec43-41b2-9f81-e7728de23291" />


## 4. Kết quả đạt được

- Kết nối thành công database qlsinhvien.
- Tạo và sử dụng collection students_test.
- Thêm thành công 5 sinh viên mẫu.
- Xóa thành công 1 sinh viên bằng deleteOne().
- Xóa thành công 2 sinh viên có điểm dưới 5 bằng deleteMany().
- Hiển thị danh sách 2 sinh viên còn lại bằng find().

## 6. Kết luận

Hoàn thành bài tập xóa dữ liệu có điều kiện trong MongoDB bằng Node.js. Đã thực hành thành công các phương thức insertMany(), deleteOne(), deleteMany() và find().
