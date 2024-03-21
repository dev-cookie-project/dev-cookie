import Image from "next/image";
import React from "react";

function HomeProjectList() {
  return (
    <div className="carousel rounded-box flex gap-12 px-8">
      <div className="carousel-item">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image src="/cookies.png" alt="Burger" width="200" height="200" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image src="/email.png" alt="Burger" width="200" height="200" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <Image src="/github.png" alt="Burger" width="200" height="200" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Shoes!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProjectList;
