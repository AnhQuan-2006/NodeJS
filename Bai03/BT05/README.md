1. Nội dung bài tập

Sử dụng database qlsinhvien và collection students của Bài 04.

Tìm sinh viên có điểm lớn hơn hoặc bằng 7 bằng find() và $gte.

Sắp xếp điểm giảm dần bằng sort().

Cập nhật điểm sinh viên SV02 bằng updateOne() và $set.

Hiển thị lại thông tin sinh viên sau khi cập nhật.

2. Cài đặt module

npm.cmd install mongodb

3. Chạy chương trình

node bai05.js

4. Kết quả thực hiện

Hiển thị danh sách sinh viên có điểm từ 7 trở lên.

Danh sách được sắp xếp theo điểm giảm dần.

Cập nhật điểm sinh viên SV02 thành 10.

Hiển thị lại thông tin SV02 sau khi cập nhật thành công.

5. Hình ảnh minh họa

Chèn ảnh chụp màn hình:

Ảnh cài đặt module MongoDB.

Ảnh chạy chương trình trên Terminal.

Ảnh danh sách sinh viên đã lọc và sắp xếp.

Ảnh thông tin sinh viên sau khi cập nhật.

6. Kết luận

Hoàn thành bài tập tìm kiếm, cập nhật và sắp xếp dữ liệu MongoDB bằng Node.js, sử dụng find(), $gte, sort(), updateOne() và $set.