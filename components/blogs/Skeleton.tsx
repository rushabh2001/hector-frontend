"use client";
import React from "react";

const Skeleton: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="col-xl-6 col-lg-6 col-md-6 mb-4">
            <div className="card">
              <div
                className="skeleton-image bg-secondary rounded w-100"
                style={{ height: "250px" }}
              ></div>
              <div className="card-body">
                <div
                  className="skeleton-line bg-secondary w-50 mb-3"
                  style={{ height: "1.25rem" }}
                ></div>
                <div
                  className="skeleton-line bg-secondary w-75 mb-3"
                  style={{ height: "1.75rem" }}
                ></div>
                <div
                  className="skeleton-line bg-secondary w-100"
                  style={{ height: "1.25rem" }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;
