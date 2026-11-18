
const xulyDiem = require('./xulyDiem');

const danhSachSinhVien = [
    {
        hoTen: "Nguyễn Anh Quân",
        diem1: 8,
        diem2: 9,
        diem3: 8
    },
    {
        hoTen: "Lê Bảo Phúc Khang",
        diem1: 7,
        diem2: 6,
        diem3: 7
    },
    {
        hoTen: "Đặng Quỳnh Trâm",
        diem1: 4,
        diem2: 5,
        diem3: 3
    }
];

console.log("===== KẾT QUẢ HỌC TẬP =====");

danhSachSinhVien.forEach(function(sv) {
    const diemTB = xulyDiem.tinhDiemTrungBinh(
        sv.diem1,
        sv.diem2,
        sv.diem3
    );

    const xepLoai = xulyDiem.xepLoai(diemTB);

    console.log("----------------------------");
    console.log("Họ tên: " + sv.hoTen);
    console.log("Điểm trung bình: " + diemTB.toFixed(2));
    console.log("Xếp loại: " + xepLoai);
});