
const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(uri);

async function main() {
    try {
    
        await client.connect();
        console.log('Kết nối MongoDB thành công!');

        const db = client.db('qlsinhvien');
        const students = db.collection('students');
        console.log('\n===== DANH SÁCH SINH VIÊN CÓ ĐIỂM >= 7 =====');

        const danhSach = await students
            .find({ diem: { $gte: 7 } })
            .sort({ diem: -1 })
            .toArray();

        danhSach.forEach(function(sv) {
            console.log('----------------------');
            console.log('Mã sinh viên: ' + sv.masv);
            console.log('Họ tên: ' + sv.hoten);
            console.log('Tuổi: ' + sv.tuoi);
            console.log('Điểm: ' + sv.diem);
        });

        const ketQua = await students.updateOne(
            { masv: 'SV02' },
            { $set: { diem: 10 } }
        );

        if (ketQua.matchedCount > 0) {
            console.log('\nCập nhật điểm sinh viên SV02 thành công!');
        } else {
            console.log('\nKhông tìm thấy sinh viên có mã SV02!');
        }

        const sinhVien = await students.findOne({ masv: 'SV02' });

        if (sinhVien) {
            console.log('\n===== THÔNG TIN SINH VIÊN SAU CẬP NHẬT =====');
            console.log('Mã sinh viên: ' + sinhVien.masv);
            console.log('Họ tên: ' + sinhVien.hoten);
            console.log('Tuổi: ' + sinhVien.tuoi);
            console.log('Điểm mới: ' + sinhVien.diem);
        }

    } catch (error) {
        console.log('Lỗi:', error.message);
    } finally {
        // Đóng kết nối MongoDB
        await client.close();
        console.log('\nĐã đóng kết nối MongoDB!');
    }
}

main();
