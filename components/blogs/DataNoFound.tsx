"use client";
import React from "react";
import Image from "next/image";
import DataNotFound from "../../public/assets/img/noData/no-data-found.png";

interface DataNoFoundProps {
  error: string;
}

const DataNoFound: React.FC<DataNoFoundProps> = ({ error }) => {
  return (
    <div className="py-4" style={{ minHeight: "calc(100vh - 350px)" }}>
      <div className="d-flex flex-column align-items-center justify-content-center h-100">
        <div
          className="ratio ratio-1x1"
          style={{
            maxWidth: "230px",
            width: "100%",
            marginBottom: "1.25rem",
          }}
        >
          <Image
            src={DataNotFound}
            alt="No data found"
            width={400}
            height={400}
            className="shadow-none w-100 h-100 object-fit-contain"
          />
        </div>
        <div style={{ maxWidth: "350px", width: "100%" }}>
          <h2
            className="text-center fw-semibold mb-2"
            style={{ fontSize: "22px" }}
          >
            {error}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default DataNoFound;
