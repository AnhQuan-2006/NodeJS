// Khai báo class SinhVien
class SinhVien {
    constructor(ma, hoTen, tuoi, diem) {
        this.ma = ma;
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.diem = diem;
    }
}

const danhSachSinhVien = [
    new SinhVien("SV01", "Nguyễn Văn An", 20, 8),
    new SinhVien("SV02", "Trần Thị Bình", 21, 4),
    new SinhVien("SV03", "Lê Văn Cường", 19, 7),
    new SinhVien("SV04", "Phạm Thị Dung", 20, 5),
    new SinhVien("SV05", "Hoàng Văn Em", 22, 3)
];

const sinhVienDat = danhSachSinhVien.filter(
    sinhVien => sinhVien.diem >= 5
);

console.log("DANH SÁCH SINH VIÊN ĐẠT YÊU CẦU:");

sinhVienDat.forEach(sinhVien => {
    console.log(sinhVien);
});