1. Nội dung bài tập
- Sử dụng module http và đối tượng URL.
- Tạo Web Server chạy tại cổng 3001.
- Xử lý đường dẫn /hello?name=Quân để hiển thị lời chào.
- Xử lý đường dẫn /sum?a=10&b=20 để tính tổng.
- Thông báo lỗi khi thiếu tham số hoặc giá trị không hợp lệ.
2. Cách chạy chương trình
Mở Terminal và chạy lệnh: "cd bai03" tiếp đến chạy lệnh: "cd Bai07" sau đó chạy lệnh: node Bai07.js
 Hình ảnh minh họa:
<img width="372" height="47" alt="image" src="https://github.com/user-attachments/assets/9c8a952a-3a77-4e9a-b8b4-eb241cfc0319" />
<img width="494" height="43" alt="image" src="https://github.com/user-attachments/assets/5cd9238d-4186-43a2-a3ee-4e4204c2baff" />

Sau đó truy cập các đường dẫn trên trình duyệt để kiểm tra kết quả.
3. Hình ảnh và Kết quả thực hiện


- http://localhost:3001/hello?name=Qu%C3%A2n
  <img width="507" height="103" alt="image" src="https://github.com/user-attachments/assets/a0b29ce2-7780-48ff-bdd7-830e73aed05c" />

- http://localhost:3001/sum?a=10&b=20
- <img width="495" height="100" alt="image" src="https://github.com/user-attachments/assets/a4e22f91-144e-433c-92c3-176ff30db248" />

- Thiếu tham số: Hiển thị thông báo lỗi: http://localhost:3001/hello
- .<img width="397" height="99" alt="image" src="https://github.com/user-attachments/assets/42b47b89-d251-4c13-8792-8619a9d1242d" />

- Giá trị không hợp lệ: Hiển thị thông báo lỗi:http://localhost:3001/sum?a=10
- <img width="474" height="97" alt="image" src="https://github.com/user-attachments/assets/f7d77129-29d6-4100-87e8-b5632b3428eb" />


4. Kết luận
Hoàn thành bài tập xử lý tham số URL bằng Node.js, sử dụng module http và đối tượng URL để nhận dữ liệu, tính toán và trả kết quả về trình duyệt.</WritingBlock>
