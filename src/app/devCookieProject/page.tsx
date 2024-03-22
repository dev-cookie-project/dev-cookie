import Image from "next/image";
import DevCookieProjectSearchForm from "../components/devCookieProjectComponents/DevCookieProjectSearchForm";

function page() {
  return (
    <>
      <DevCookieProjectSearchForm />
      <div className="h-200 w-128 bg-orange-400 py-8 px-20">
        <div className="grid grid-rows-3 grid-cols-3 gap-4">
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
      </div>
    </>
  );
}

export default page;
