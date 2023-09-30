import React, { useEffect, useState } from "react";
import { DataGrid, GridToolbar, GridOverlay } from "@material-ui/data-grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSnackbar } from "notistack";
import slugify from "slugify";

import usersApi, { getDanhSachVeDaDat } from "../../api/usersApi";

export default function MoviesManagement() {
  const [datVeDaDat, setDatVeDaDat] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    usersApi.getDanhSachVeDatCuaKhachHang()
    .then((result) => {
        console.log("RESULT", result);
        const rows = result.data.map((item, index) => ({
          ...item,
          id: index + 1, // Assigning a unique id to each row
        }));
        setDatVeDaDat(rows);
      })
      .catch((error) => {
        enqueueSnackbar("Failed to fetch data", { variant: "error" });
        console.error(error);
      });
  }, []);

  const columns = [
    {
      field: "maLichChieu",
      headerName: "Mã lịch chiếu",
      hide: true,
      width: 130,
    },
    {
        field: "tenTaiKhoan",
        headerName: "Tài khoản đặt vé",
        width: 200,
        type: "dateTime",
        headerAlign: "center",
        align: "center",
        headerClassName: "custom-header",
      },
    {
      field: "tenPhim",
      headerName: "Tên Phim",
      width: 230,
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
    },
    {
      field: "tenCumRap",
      headerName: "Tên Cụm Rạp",
      width: 300,
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
    },
    {
      field: "tenRap",
      headerName: "Tên Rạp",
      width: 400,
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
    },
    {
      field: "diaChi",
      headerName: "Địa Chỉ",
      width: 200,
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
    },
    {
      field: "ngayChieu",
      headerName: "Ngày chiếu giờ chiếu",
      width: 200,
      type: "dateTime",
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
    },
    {
      field: "tenDayDu",
      headerName: "Ghế",
      width: 200,
      type: "dateTime",
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header",
    },
    {
      field: "tenGhe",
      headerName: "Loại Ghế",
      width: 200,
      type: "dateTime",
      headerAlign: "center",
      align: "left",
      headerClassName: "custom-header"
    },
    {
      field: "giaVe",
      headerName: "Giá vé(vnđ)",
      width: 130,
      type: "number",
      headerAlign: "center",
      align: "center",
      headerClassName: "custom-header",
    },
  ];

  return (
    <div style={{ height: "100vh", paddingBottom: "400px", paddingTop: "50px", width: "100%" }}>
      <DataGrid
        rows={datVeDaDat}
        columns={columns}
        pageSize={25}
        rowsPerPageOptions={[10, 25, 50]}
        loading={datVeDaDat.length === 0} // Show loading overlay until data is fetched
        components={{
          LoadingOverlay: CustomLoadingOverlay,
          Toolbar: GridToolbar,
        }}
        // Show loading overlay until data is fetched
        sortModel={[{ field: "maLichChieu", sort: "asc" }]}
      />
    </div>
  );
}

function CustomLoadingOverlay() {
  return (
    <GridOverlay>
      <CircularProgress style={{ margin: "auto" }} />
    </GridOverlay>
  );
}