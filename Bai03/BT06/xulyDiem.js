
function tinhDiemTrungBinh(diem1, diem2, diem3) {
    return (diem1 + diem2 + diem3) / 3;
}

function xepLoai(diemTrungBinh) {
    if (diemTrungBinh >= 8) {
        return "Giỏi";
    } else if (diemTrungBinh >= 6.5) {
        return "Khá";
    } else if (diemTrungBinh >= 5) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
}

module.exports = {
    tinhDiemTrungBinh,
    xepLoai
};