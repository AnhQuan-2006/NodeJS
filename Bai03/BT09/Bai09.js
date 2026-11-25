
const { MongoClient } = require('mongodb');


const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

async function main() {
    try {
     
        await client.connect();
        console.log('Kết nối MongoDB thành công!');

        // 2. Chọn database và collection
        const db = client.db('qlsinhvien');
        const collection = db.collection('students_test');

        console.log('Database: qlsinhvien');
        console.log('Collection: students_test');

        
        await collection.deleteMany({});

        
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
                diem: 4
            },
            {
                masv: 'SV03',
                hoten: 'Nguyễn Đức Cường',
                tuoi: 19,
                diem: 7
            },
            {
                masv: 'SV04',
                hoten: 'Trương Thị Hồng',
                tuoi: 20,
                diem: 5
            },
            {
                masv: 'SV05',
                hoten: 'Trần Quang Huy',
                tuoi: 22,
                diem: 3
            }
        ];

        const ketQuaThem = await collection.insertMany(danhSachSinhVien);

        console.log('\nThêm sinh viên thành công!');
        console.log('Số sinh viên đã thêm:', ketQuaThem.insertedCount);

        const ketQuaXoaMot = await collection.deleteOne({
            masv: 'SV01'
        });

        console.log('\nKết quả xóa một sinh viên:');
        console.log('Mã sinh viên cần xóa: SV01');
        console.log('Số bản ghi đã xóa:', ketQuaXoaMot.deletedCount);

     
        const ketQuaXoaNhieu = await collection.deleteMany({
            diem: { $lt: 5 }
        });

        console.log('\nKết quả xóa sinh viên có điểm dưới 5:');
        console.log('Số bản ghi đã xóa:', ketQuaXoaNhieu.deletedCount);

        
        const danhSachConLai = await collection.find({}).toArray();

        console.log('\nDanh sách sinh viên còn lại:');
        console.log(danhSachConLai);

        console.log('\nTổng số sinh viên còn lại:', danhSachConLai.length);

        console.log('\nHoàn thành bài tập Bt09!');

    } catch (error) {
        console.error('Có lỗi xảy ra:', error);
    } finally {
        
        await client.close();
        console.log('\nĐã đóng kết nối MongoDB!');
    }
}

main();
