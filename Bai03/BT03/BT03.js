
const fs = require('fs');

// Tao tap tin va ghi thong tin sinh vien
const thongtin = 'Ho ten: NGUYEN ANH QUAN\nMa sinh vien: cdcntt18a23\n';

fs.writeFileSync('thongtin.txt', thongtin);
console.log('Da tao tap tin thongtin.txt');

// Doc noi dung tap tin
console.log('\nNoi dung ban dau:');
let data = fs.readFileSync('thongtin.txt', 'utf8');
console.log(data);

// Ghi noi them ten lop bang appendFile()
fs.appendFile('thongtin.txt', 'Lop: CD-CNTT18A\n', function(err) {
    if (err) throw err;

    console.log('Da ghi noi ten lop vao tap tin');

    // Doc lai tap tin sau khi cap nhat
    fs.readFile('thongtin.txt', 'utf8', function(err, data) {
        if (err) throw err;

        console.log('\nNoi dung sau khi cap nhat:');
        console.log(data);
    });
});
