
const { MongoClient } = require('mongodb');

// Địa chỉ kết nối MongoDB trên máy
const uri = 'mongodb://127.0.0.1:27017';

// Tạo đối tượng kết nối
const client = new MongoClient(uri);

async function main() {
    try {
        // Kết nối MongoDB
        await client.connect();
        console.log('Kết nối MongoDB thành công!');

        // Chọn database và collection
        const db = client.db('qlsinhvien');
        const students = db.collection('students');

        // Thêm 3 sinh viên
        const danhSachSinhVien = [
            {
                masv: 'SV01',
                hoten: 'Nguyễn Anh Quân',
                tuoi: 20,
                diem: 8
            },
            {
                masv: 'SV02',
                hoten: 'Lê Bảo Phúc Khang',
                tuoi: 21,
                diem: 7
            },
            {
                masv: 'SV03',
                hoten: 'Nguyễn Đức Cường',
                tuoi: 19,
                diem: 9
            }
        ];

        const ketQua = await students.insertMany(danhSachSinhVien);

        console.log('Đã thêm ' + ketQua.insertedCount + ' sinh viên!');

        // Hiển thị danh sách sinh viên
        const danhSach = await students.find().toArray();

        console.log('\n===== DANH SÁCH SINH VIÊN =====');

        danhSach.forEach(function(sv) {
            console.log('----------------------');
            console.log('Mã sinh viên: ' + sv.masv);
            console.log('Họ tên: ' + sv.hoten);
            console.log('Tuổi: ' + sv.tuoi);
            console.log('Điểm: ' + sv.diem);
        });

    } catch (error) {
        console.log('Lỗi:', error.message);
    } finally {
        // Đóng kết nối MongoDB
        await client.close();
        console.log('\nĐã đóng kết nối MongoDB!');
    }
}

main();
