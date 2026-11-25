# BÀI TẬP 10 – LIÊN KẾT HAI COLLECTION TRONG MONGODB

**Họ và tên:** Nguyễn Anh Quân

**Lớp:** CĐ-CNTT18A

**Môn học:** Node.js

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

Cài đặt thư viện MongoDB:

```bash
npm.cmd install mongodb
```

Chạy chương trình:

```bash
node bai10.js
```

## 4. Hình ảnh kết quả

### Hình 1: Kết nối MongoDB và tạo dữ liệu hai Collection

Chèn ảnh Terminal hiển thị kết nối thành công, thêm 2 khoa và 4 sinh viên.

### Hình 2: Kết quả liên kết hai Collection

Chèn ảnh Terminal hiển thị danh sách sinh viên sau khi sử dụng aggregate() và $lookup.

### Hình 3: Kết quả hiển thị tên khoa

Chèn ảnh thể hiện đầy đủ mã sinh viên, họ tên, mã khoa và tên khoa tương ứng.

## 5. Kết quả đạt được

- Kết nối thành công database qlsinhvien.
- Tạo collection departments gồm 2 khoa.
- Tạo collection students_join gồm 4 sinh viên.
- Sử dụng thành công aggregate() kết hợp $lookup.
- Liên kết hai collection thông qua trường makhoa.
- Hiển thị đầy đủ thông tin sinh viên và tên khoa tương ứng.

## 6. Kết luận

Hoàn thành bài tập liên kết hai Collection trong MongoDB bằng Node.js. Đã thực hành thành công aggregate(), $lookup, $unwind và $project để truy vấn và hiển thị dữ liệu từ hai Collection.