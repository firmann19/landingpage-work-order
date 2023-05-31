import React, { useEffect } from "react";
import Table from "../components/partikel/TableWithAction";
import { useDispatch, useSelector } from "react-redux";
import { fetchCheckouts } from "../redux/checkouts/actions";

function TableHistoryOrder() {
  const dispatch = useDispatch();
  const checkouts = useSelector((state) => state.checkouts)

  useEffect(() => {
    dispatch(fetchCheckouts())
  }, [dispatch])

  return (
    <div className="latest-transaction">
      <p className="text-lg fw-medium color-palette-1 mb-14">
        Latest Transactions
      </p>
      <div className="main-content main-content-table overflow-auto">
        <Table
          status={checkouts.status}
          thead={["Nama", "Departement", "Peralatan", "Kode", "Status", "Aksi"]}
          data={checkouts.data}
          tbody={[
            "UserRequestId",
            "DepartUserId",
            "namaBarang",
            "kodeBarang",
            "StatusPengerjaan",
            "Aksi"
          ]}
          Detail={"/history-order-page/history-order-detail-page"}
        />
      </div>
    </div>
  );
}

export default TableHistoryOrder;
