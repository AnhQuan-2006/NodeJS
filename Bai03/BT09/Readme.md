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


Cài đặt thư viện MongoDB:

npm.cmd install mongodb

Chạy chương trình:

```bash
node bai09.js
```

## 4. Hình ảnh kết quả

### Hình 1: Kết nối MongoDB và thêm 5 sinh viên

Chèn ảnh chạy chương trình trên Terminal.

### Hình 2: Kết quả xóa bằng deleteOne()

Chèn ảnh hiển thị số bản ghi đã xóa.

### Hình 3: Kết quả xóa bằng deleteMany()

Chèn ảnh hiển thị số sinh viên có điểm dưới 5 đã bị xóa.

### Hình 4: Danh sách sinh viên còn lại

Chèn ảnh hiển thị danh sách sinh viên sau khi xóa.

## 5. Kết quả đạt được

- Kết nối thành công database qlsinhvien.
- Tạo và sử dụng collection students_test.
- Thêm thành công 5 sinh viên mẫu.
- Xóa thành công 1 sinh viên bằng deleteOne().
- Xóa thành công 2 sinh viên có điểm dưới 5 bằng deleteMany().
- Hiển thị danh sách 2 sinh viên còn lại bằng find().

## 6. Kết luận

Hoàn thành bài tập xóa dữ liệu có điều kiện trong MongoDB bằng Node.js. Đã thực hành thành công các phương thức insertMany(), deleteOne(), deleteMany() và find().