import axiosClient from "./axiosClient";

const usersApi = {
    postDangKy: (user) => {
        const path = "/QuanLyNguoiDung/DangKy";
        return axiosClient.post(path, user);
    },
    postDangNhap: (user) => {
        const path = "/QuanLyNguoiDung/DangNhap";
        return axiosClient.post(path, user);
    },

    getDanhSachNguoiDung: () => {
        const path = "/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP09";
        return axiosClient.get(path);
    },

    getDanhSachNguoiDungPhanTrang: (soTrang, soPhanTuTrenTrang) => {
        const path = "/QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=GP09";
        return axiosClient.get(path, { soTrang, soPhanTuTrenTrang });
    },

    postThemNguoiDung: (user) => {
        const path = "/QuanLyNguoiDung/ThemNguoiDung";

        return axiosClient.post(path, user);
    },

    deleteUser: (taiKhoan) => {
        const path = `/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`;

        return axiosClient.delete(path);
    },

    editTaiKhoan: (user) => {
        const path = `/QuanLyNguoiDung/CapNhatThongTinNguoiDung`;
        return axiosClient.put(path, user);
    },

    getThongTinTaiKhoan: (info) => {
        const path = `/QuanLyNguoiDung/ThongTinTaiKhoan`;
        return axiosClient.post(path, info);
    },

    getDanhSachVeDaDat: (taiKhoanNguoiDat) => {
        const path = `/QuanLyDatVe/LayDanhSachVeDaMua?taiKhoanNguoiDat=${taiKhoanNguoiDat}`;
        return axiosClient.get(path);
    },

    getDanhSachVeDatCuaKhachHang : () => {
        const path = `/QuanLyDatVe/LayDanhSachVeDaMuaCuaKhachHang`;
        return axiosClient.get(path);
    },
    creatPaymentUrl : (amount, maLichChieu,  danhSachVe, taiKhoanNguoiDung) => {
        const path = `/create_payment_url?amount=${amount}&maLichChieu=${maLichChieu}&dachSachVe=${danhSachVe}&taiKhoanNguoiDung=${taiKhoanNguoiDung}`;
        return axiosClient.get(path);
    }
};

export default usersApi;