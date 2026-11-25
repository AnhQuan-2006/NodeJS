
const fs = require('fs');

// Thư mục và đường dẫn cá nhân
const thuMuc = 'data';
const tapTinCu = 'data/ghichu.txt';
const tapTinMoi = 'data/ghichu_moi.txt';
const tapTinTam = 'data/tam.txt';

console.log('Họ và tên: Nguyễn Anh Quân');
console.log('Lớp: CĐ-CNTT18A');
console.log('');

// 1. Tạo thư mục data
if (!fs.existsSync(thuMuc)) {
    fs.mkdirSync(thuMuc);
    console.log('Tạo thư mục data thành công!');
}

// 2. Tạo và ghi tập tin ghichu.txt
fs.writeFileSync(tapTinCu,
    'Ho va ten: Nguyen Anh Quan\n' +
    'Lop: CD-CNTT18A\n' +
    'Bai tap: Quan ly tap tin voi File System'
);

console.log('Tạo và ghi tập tin ghichu.txt thành công!');

// 3. Đổi tên tập tin
fs.renameSync(tapTinCu, tapTinMoi);

console.log('Đổi tên thành ghichu_moi.txt thành công!');

// 4. Đọc nội dung tập tin mới
const noiDung = fs.readFileSync(tapTinMoi, 'utf8');

console.log('\nNoi dung tap tin ghichu_moi.txt:');
console.log(noiDung);

// 5. Tạo tập tin tam.txt
fs.writeFileSync(tapTinTam, 'Tap tin tam cua Nguyen Anh Quan.');

console.log('\nTạo tập tin tam.txt thành công!');

// 6. Xóa tập tin tam.txt
fs.unlinkSync(tapTinTam);

console.log('Xóa tập tin tam.txt thành công!');

console.log('\nHoàn thành bài tập Bt08!');
