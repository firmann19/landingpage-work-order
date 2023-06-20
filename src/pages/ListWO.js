import React from "react";
import Table from "../components/partikel/TableActionSecond";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCheckouts } from "../redux/checkouts/actions";
import Swal from "sweetalert2";
import { deleteData } from "../utils/fetch";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function ListWO() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const checkouts = useSelector((state) => state.checkouts);

  useEffect(() => {
    dispatch(fetchCheckouts());
  }, [dispatch]);


  const handleDelete = (id) => {
    Swal.fire({
      title: "Apa kamu yakin?",
      text: "Anda tidak akan dapat mengembalikan ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Iya, Hapus",
      cancelButtonText: "Batal",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await deleteData(`/checkout/${id}`).then((res) => {
          if (res.data.status === true) {
            toast.success(res.data.message);
            navigate("/listwo-page");
          }
        });
        dispatch(fetchCheckouts());
      }
    });
  };

  return (
    <Container className="mt-5">
      <Table
        thead={[
          "Peralatan",
          "Kode",
          "Status",
          "Tanngal Order",
          "Departement",
          "Nama",
          "Aksi",
        ]}
        data={checkouts.data}
        tbody={[
          "userName",
          "departmentName",
          "namaBarang",
          "kodeBarang",
          "StatusWO",
          "date_requestWO",
        ]}
        deleteAction={(id) => handleDelete(id)}
       editUrl={`/listwo-page/approval`}
      />
    </Container>
  );
}

export default ListWO;
