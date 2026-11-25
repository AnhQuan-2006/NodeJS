
const { MongoClient } = require('mongodb');

// Thông tin kết nối MongoDB
const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

async function main() {
    try {
        // 1. Kết nối MongoDB
        await client.connect();
        console.log('Kết nối MongoDB thành công!');

        // 2. Chọn database
        const db = client.db('qlsinhvien');

        // 3. Chọn hai collection
        const departments = db.collection('departments');
        const students = db.collection('students_join');

        console.log('Database: qlsinhvien');
        console.log('Collection: departments');
        console.log('Collection: students_join');

        // Xóa dữ liệu cũ trong hai collection thử nghiệm
        await departments.deleteMany({});
        await students.deleteMany({});

        // 4. Thêm dữ liệu khoa
        const danhSachKhoa = [
            {
                makhoa: 'CNTT',
                tenkhoa: 'Công nghệ thông tin'
            },
            {
                makhoa: 'QTKD',
                tenkhoa: 'Quản trị kinh doanh'
            }
        ];

        await departments.insertMany(danhSachKhoa);

        console.log('\nThêm dữ liệu khoa thành công!');
        console.log('Số khoa đã thêm:', danhSachKhoa.length);

        // 5. Thêm dữ liệu sinh viên
        const danhSachSinhVien = [
            {
                masv: 'SV01',
                hoten: 'Nguyễn Anh Quân',
                makhoa: 'CNTT'
            },
            {
                masv: 'SV02',
                hoten: 'Lê Bảo Phúc Khang',
                makhoa: 'CNTT'
            },
            {
                masv: 'SV03',
                hoten: 'Nguyễn Đức Cường',
                makhoa: 'QTKD'
            },
            {
                masv: 'SV04',
                hoten: 'Trương Thị Hồng',
                makhoa: 'QTKD'
            }
        ];

        await students.insertMany(danhSachSinhVien);

        console.log('\nThêm dữ liệu sinh viên thành công!');
        console.log('Số sinh viên đã thêm:', danhSachSinhVien.length);

        // 6. Liên kết hai collection bằng aggregate() và $lookup
        const ketQua = await students.aggregate([
            {
                $lookup: {
                    from: 'departments',
                    localField: 'makhoa',
                    foreignField: 'makhoa',
                    as: 'thongTinKhoa'
                }
            },
            {
                $unwind: '$thongTinKhoa'
            },
            {
                $project: {
                    _id: 0,
                    masv: 1,
                    hoten: 1,
                    makhoa: 1,
                    tenkhoa: '$thongTinKhoa.tenkhoa'
                }
            }
        ]).toArray();

        // 7. Hiển thị kết quả
        console.log('\nDANH SÁCH SINH VIÊN KÈM TÊN KHOA:');
        console.log(JSON.stringify(ketQua, null, 2));

        console.log('\nTổng số sinh viên:', ketQua.length);
        console.log('\nHoàn thành bài tập Bt10!');

    } catch (error) {
        console.error('Có lỗi xảy ra:', error);
    } finally {
        // 8. Đóng kết nối
        await client.close();
        console.log('\nĐã đóng kết nối MongoDB!');
    }
}

main();
