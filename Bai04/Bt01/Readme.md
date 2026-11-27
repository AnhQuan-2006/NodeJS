# BÀI THỰC HÀNH BT01: XÂY DỰNG WEBSITE GIỚI THIỆU CÁ NHÂN

**Họ và tên:** Nguyễn Anh Quân

**Lớp:** CĐ-CNTT18A

**Môn học:** Node.js

**Bài 4:** Xây dựng web với nền tảng Express (Express Framework)

---

## PHẦN 1: XÂY DỰNG WEBSITE VÀ CHẠY TRÊN LOCALHOST

### 1. Giới thiệu bài thực hành

Xây dựng website giới thiệu cá nhân sử dụng Node.js và Express Framework.

Website gồm các chức năng:

- Trang chủ (`/`).
- Trang giới thiệu bản thân (`/about`).
- Trang kỹ năng (`/skills`).
- Trang sở thích (`/hobbies`).
- Trang liên hệ (`/contact`).
- Xử lý đường dẫn không tồn tại bằng HTTP 404.

Giao diện website được thiết kế bằng HTML và CSS, có menu điều hướng giữa các trang.

### 2. Các bước thực hiện

**Bước 1: Khởi tạo dự án Node.js**

```bash
npm init -y
```

**Bước 2: Cài đặt Express**

```bash
npm install express
```

**Bước 3: Tạo cấu trúc thư mục**

```text
Bt01/
├── public/
│   └── style.css
├── views/
│   ├── index.html
│   ├── about.html
│   ├── skills.html
│   ├── hobbies.html
│   ├── contact.html
│   └── 404.html
├── server.js
├── package.json
├── package-lock.json
└── Readme.md
```

**Bước 4: Khởi chạy chương trình**

```bash
node server.js
```

**Bước 5: Truy cập website**

```text
http://localhost:3000
```

### 3. Kết quả thực hiện trên máy cá nhân

Website chạy trên localhost với các trang:

- Trang chủ: http://localhost:3000/
- Giới thiệu: http://localhost:3000/about
- Kỹ năng: http://localhost:3000/skills
- Sở thích: http://localhost:3000/hobbies
- Liên hệ: http://localhost:3000/contact

Kiểm tra lỗi 404:

```text
http://localhost:3000/abc
```

Kết quả: Website hiển thị trang thông báo không tìm thấy đường dẫn.

### 4. Hình ảnh minh chứng

- Ảnh 1: Cấu trúc thư mục dự án.
- Ảnh 2: Cài đặt Express và khởi chạy chương trình trên Terminal.
- Ảnh 3: Giao diện trang chủ.
- Ảnh 4: Giao diện trang giới thiệu.
- Ảnh 5: Giao diện trang kỹ năng.
- Ảnh 6: Giao diện trang sở thích.
- Ảnh 7: Giao diện trang liên hệ.
- Ảnh 8: Giao diện xử lý lỗi 404.

---

## PHẦN 2: KHẢO SÁT VÀ TRIỂN KHAI WEBSITE TRÊN FREE HOSTING

### 1. Khảo sát các dịch vụ Hosting miễn phí

**Dịch vụ 1: Render**

- Hỗ trợ Node.js và Express.
- Có gói Web Service miễn phí.
- Hỗ trợ kết nối với GitHub.
- Website có thể tự động ngủ khi không có truy cập trong thời gian quy định.

Website: https://render.com/

**Dịch vụ 2: Koyeb**

- Hỗ trợ triển khai ứng dụng Node.js.
- Có gói Free Instance với tài nguyên giới hạn.
- Hỗ trợ triển khai ứng dụng Web Service.

Website: https://www.koyeb.com/

**Dịch vụ 3: Railway**

- Hỗ trợ triển khai ứng dụng Node.js.
- Có cơ chế tính phí theo mức sử dụng.
- Hỗ trợ kết nối với GitHub.

Website: https://railway.com/

### 2. Lựa chọn dịch vụ Hosting

Em lựa chọn Render để triển khai website vì nền tảng hỗ trợ Node.js, Express và cho phép kết nối trực tiếp với GitHub.

### 3. Các bước triển khai trên Render

1. Truy cập https://render.com/.
2. Đăng ký hoặc đăng nhập tài khoản.
3. Kết nối tài khoản GitHub.
4. Chọn New Web Service.
5. Chọn repository chứa mã nguồn NodeJS.
6. Thiết lập Root Directory: `Bai04/Bt01`.
7. Thiết lập Build Command: `npm install`.
8. Thiết lập Start Command: `npm start`.
9. Chọn gói Free.
10. Nhấn Deploy Web Service.
11. Chờ quá trình triển khai hoàn tất.
12. Truy cập đường link Render cung cấp để kiểm tra website.

### 4. Kết quả triển khai

- Trạng thái triển khai: [Cập nhật sau khi Deploy thành công]
- Đường link website: [Dán đường link Render được cấp tại đây]

### 5. Hình ảnh minh chứng triển khai

- Ảnh 1: Kết nối GitHub với Render.
- Ảnh 2: Cấu hình Web Service.
- Ảnh 3: Quá trình Deploy.
- Ảnh 4: Website hoạt động trên Render.

---

## KẾT LUẬN

Qua bài thực hành, em đã biết cách khởi tạo dự án Node.js, cài đặt Express, xây dựng các Route, thiết kế giao diện bằng HTML/CSS, xử lý lỗi HTTP 404 và tìm hiểu cách triển khai website lên dịch vụ Hosting miễn phí.
