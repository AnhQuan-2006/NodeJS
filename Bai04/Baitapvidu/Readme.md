# BÀI 4: XÂY DỰNG WEB VỚI NỀN TẢNG EXPRESS (EXPRESS FRAMEWORK)

**Họ và tên:** Nguyễn Anh Quân  
**Lớp:** CĐ-CNTT18A  
**Môn học:** Lập trình Node.js

## 1. Giới thiệu

Bài thực hành số 4 giúp tìm hiểu và xây dựng ứng dụng web bằng nền tảng Express Framework trong Node.js.

Thông qua bài thực hành, em đã làm quen với cách tạo máy chủ Express, xử lý các đường dẫn, sử dụng Middleware, Pug Template Engine, xử lý lỗi và xây dựng ứng dụng theo mô hình MVC.

## 2. Cài đặt môi trường

**Bước 1:** Khởi tạo dự án Node.js.

```bash
npm init -y
```

**Bước 2:** Cài đặt thư viện Express.

```bash
npm install express
```

**Bước 3:** Cài đặt Pug.

```bash
npm install pug
```

**Bước 4:** Cài đặt Body-parser.

```bash
npm install body-parser
```

## 3. Nội dung thực hành

### Bài 1: Xây dựng ứng dụng Express cơ bản

- Tạo máy chủ bằng Express.
- Khai báo cổng chạy là 3000.
- Tạo đường dẫn gốc `/`.
- Hiển thị nội dung `Hello, Express!`.

**Lệnh chạy:**

```bash
node app.js
```

**Kết quả:** Máy chủ Express khởi động thành công và hiển thị nội dung Hello, Express! trên trình duyệt.

**Hình ảnh kết quả:**  

<img width="485" height="133" alt="image" src="https://github.com/user-attachments/assets/eb803f45-7fc7-41dc-9cb8-739749b2eb13" />


### Bài 2: Xử lý Route

- Tạo đường dẫn trang chủ `/`.
- Tạo đường dẫn giới thiệu `/about`.
- Tạo đường dẫn `/users` nhận tham số query.
- Xử lý đường dẫn không tồn tại bằng mã trạng thái 404.

**Lệnh chạy:**

```bash
node express_route.js
```

**Kết quả:**
- `/` hiển thị Trang chủ.
- `/about` hiển thị Trang giới thiệu.
- `/users?name=Quan` hiển thị Xin chào, Quan.
- Đường dẫn không tồn tại hiển thị Không tìm thấy trang.

**Hình ảnh kết quả:**  

<img width="330" height="115" alt="image" src="https://github.com/user-attachments/assets/0c8bf341-0887-4fef-9bc7-bb11a28db800" />

<img width="470" height="156" alt="image" src="https://github.com/user-attachments/assets/0cba1ce5-5b7f-4772-840f-1fb290c73696" />

<img width="415" height="119" alt="image" src="https://github.com/user-attachments/assets/de477568-c7dd-400b-93bd-8cbee9246cf6" />



### Bài 3: Sử dụng Middleware

- Tạo Middleware ghi log yêu cầu truy cập.
- Sử dụng `next()` để chuyển quyền điều khiển.
- Hiển thị nội dung chào mừng trên trang chủ.

**Lệnh chạy:**

```bash
node express_middleware.js
```

**Kết quả:** Trình duyệt hiển thị Chào mừng đến với ứng dụng Express! Terminal hiển thị địa chỉ được truy cập.

**Hình ảnh kết quả:**  

<img width="380" height="140" alt="image" src="https://github.com/user-attachments/assets/efd53d65-4b06-4057-b26b-18e5e5d197cd" />


### Bài 4: Sử dụng Pug Template Engine

- Thiết lập Pug làm Template Engine.
- Tạo giao diện bằng file `index.pug`.
- Truyền dữ liệu tên người dùng từ Express sang Pug.
- Hiển thị lời chào trên trình duyệt.

**Lệnh chạy:**

```bash
node express_pug.js
```

**Kết quả:** Trang web hiển thị nội dung Hello, John Doe!

**Hình ảnh kết quả:**  

<img width="398" height="147" alt="image" src="https://github.com/user-attachments/assets/3e9cfab4-a49d-4dd1-ab6d-2fdc6ce48eba" />


### Bài 5: Xử lý lỗi (Error Handling)

- Tạo biểu mẫu nhập số bị chia và số chia.
- Sử dụng phương thức POST để gửi dữ liệu.
- Kiểm tra dữ liệu nhập vào.
- Xử lý trường hợp nhập dữ liệu không hợp lệ hoặc chia cho 0.
- Hiển thị kết quả phép chia khi dữ liệu hợp lệ.

**Lệnh chạy:**

```bash
node express_errorhandling.js
```

**Kết quả:**
- Nhập 10 và 2: hiển thị `Result: 5`.

  <img width="376" height="192" alt="image" src="https://github.com/user-attachments/assets/f2aa2d3b-73da-4e1a-a71d-506cfa3cdb51" />

  <img width="396" height="123" alt="image" src="https://github.com/user-attachments/assets/ed00cff7-85a2-40e1-ac77-0973043afb53" />


- Nhập 1 và 0: hiển thị `Invalid input`.

  <img width="346" height="139" alt="image" src="https://github.com/user-attachments/assets/67da872a-5f79-4610-8da0-71c36c1c613c" />

  <img width="438" height="147" alt="image" src="https://github.com/user-attachments/assets/80378bcd-1fe1-4bcf-bad2-a0ce287e7d44" />



### Bài 6: Xây dựng ứng dụng theo mô hình MVC

Ứng dụng máy tính được xây dựng theo mô hình MVC gồm:

- **Model:** Xử lý các phép tính cộng, trừ, nhân và chia.
- **View:** Hiển thị giao diện máy tính bằng Pug.
- **Controller:** Tiếp nhận yêu cầu và xử lý dữ liệu từ người dùng.

**Lệnh chạy:**

```bash
node my-express-app/app.js
```

**Địa chỉ truy cập:**

```text
http://localhost:3000/calculator
```

**Kết quả:** Người dùng có thể nhập hai số, lựa chọn phép tính và xem kết quả trên giao diện máy tính.

**Hình ảnh kết quả:**  

<img width="1122" height="732" alt="image" src="https://github.com/user-attachments/assets/00a643de-187d-425b-9f9b-581891357d52" />


## 4. Kết luận

Sau khi hoàn thành bài thực hành, em đã hiểu được cách sử dụng Express Framework để xây dựng ứng dụng web bằng Node.js. Em đã thực hành tạo máy chủ, xử lý Route, Middleware, sử dụng Pug, xử lý lỗi và xây dựng ứng dụng theo mô hình MVC.

Qua bài học, em có thêm kiến thức và kỹ năng cơ bản để phát triển các ứng dụng web bằng Node.js và Express Framework.
