import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { Contextapi } from "../../Authprovider/Authprovider";
import axios from "axios";
import toast from "react-hot-toast";

const Servicedetails = () => {
  const { id } = useParams();
  const { user } = useContext(Contextapi);

  const [service, setService] = useState([]);

  useEffect(() => {
    fetch(`https://back-end-livid-delta.vercel.app/createlist/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((error) => console.log(error));
  }, [id]);

  const handlebook = (e) => {
    e.preventDefault();

    const form = e.target;
    const productname = form.productname.value;
    const buyername = form.buyername.value;
    const buyeremail = form.email.value;
    const quantity = parseInt(form.quantity.value);
    const price = parseInt(form.price.value);
    const address = form.address.value;
    const phone = form.phone.value;
    const note = form.note.value;

    const formData = {
      productname,
      buyername,
      buyeremail,
      quantity,
      price,
      address,
      phone,
      note,
      date: new Date(),
      productId: id,
    };

    axios
      .post("https://back-end-livid-delta.vercel.app/orders", formData)
      .then((res) => {
        console.log("res", res);
        
        toast.success("Order placed successfully!");
        document.getElementById("my_modal_1").close();
        form.reset();
      
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-[90%] md:w-[60%] mx-auto my-10 bg-white shadow-md rounded-lg overflow-hidden">

      <figure>
        <img
          className="w-full h-80 object-cover"
          src={service?.image}
          alt={service?.name}
        />
      </figure>

      <div className="p-6 space-y-3">
        <h2 className="text-3xl font-bold">{service?.name}</h2>

        <p className="text-gray-600">
          <span className="font-semibold">Category:</span> {service?.category}
        </p>

        <p className="text-gray-600">
          <span className="font-semibold">Owner Email:</span> {service?.email}
        </p>

        <p className="text-gray-600">
          <span className="font-semibold">Location:</span> {service?.location}
        </p>

        <p className=" font-bold text-xl">
          Price: {service?.price} BDT
        </p>

        <p className="text-gray-700 leading-relaxed">{service?.description}</p>

        <button
          className="w-full bg-green-800 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-900 transition"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Adopt / Order Now
        </button>
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="modal-action">
            <div method="dialog">
              <div className="w-full max-w-xl mx-auto p-4 md:p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Order details</h2>

                <form onSubmit={handlebook} className="space-y-4">

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Product Name
                    </label>
                    <input
                      type="text"
                      name="productname"
                      defaultValue={service?.name}
                      readOnly
                      className="w-full border rounded-lg p-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Buyer Name
                    </label>
                    <input
                      defaultValue={user?.displayName}
                      name="buyername"
                      type="text"
                      className="w-full border rounded-lg p-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Buyer Email
                    </label>
                    <input
                      defaultValue={user?.email}
                      readOnly
                      name="email"
                      type="email"
                      className="w-full border rounded-lg p-2"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Quantity
                      </label>
                      <input
                      required
                        type="number"
                        name="quantity"
                        className="w-full border rounded-lg p-2"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Price
                      </label>
                      <input
                      required
                        defaultValue={service?.price}
                        name="price"
                        type="number"
                        className="w-full border rounded-lg p-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Address
                    </label>
                    <input
                    required
                      type="text"
                      name="address"
                      className="w-full border rounded-lg p-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Phone
                    </label>
                    <input
                    required
                      type="text"
                      name="phone"
                      className="w-full border rounded-lg p-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Additional Note
                    </label>
                    <textarea
                      name="note"
                      className="w-full border rounded-lg p-2"
                    ></textarea>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold">
                    Order
                  </button>
                </form>

                <button
                  className="btn mt-3"
                  onClick={() =>
                    document.getElementById("my_modal_1").close()
                  }
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Servicedetails;
