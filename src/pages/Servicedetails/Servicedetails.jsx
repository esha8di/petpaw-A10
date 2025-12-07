import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { Contextapi } from "../../Authprovider/Authprovider";
import axios from "axios";

const Servicedetails = () => {
  const { id } = useParams();

  const { user } = useContext(Contextapi);

  // const [book, setBook] = useState(false);

  const [service, setService] = useState([]);
  useEffect(() => {
    fetch(`https://back-end-livid-delta.vercel.app/createlist/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((error) => console.log(error));
  }, [id]);

  //  const findmatchid=services.find(service=>service._id == id);

  const handlebook = (e) => {
    e.preventDefault();
    alert("Form Submitted");

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

    // e.target.reset();

    console.log('formData', formData)

    axios.post('https://back-end-livid-delta.vercel.app/orders', formData)
    .then(res =>{
      console.log('res',res);
    })
    .catch(err=>{
      console.log(err);
    })
  };

  return (
    <div className="w-[90%] md:w-[60%] mx-auto my-10 bg-white shadow-md rounded-lg overflow-hidden ">
      <figure>
        <img
          className="w-full h-90 object-cover"
          src={service?.image}
          alt="service"
        />
      </figure>

      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-green-900">
          {/* {service?.serviceName} */}
        </h2>

        <p className="text-gray-700 leading-relaxed">
          {/* {service?.description} */}
        </p>

        {/* Buttons */}
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Adaption/Order
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            {/* <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p> */}
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
                        placeholder="Product Name"
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
                        placeholder="Buyer Name"
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
                        placeholder="Buyer Email"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Quantity
                        </label>
                        <input
                          type="number"
                          name="quantity"
                          className="w-full border rounded-lg p-2"
                          placeholder="Quantity"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Price
                        </label>
                        <input
                          defaultValue={service?.price}
                          name="price"
                          type="number"
                          className="w-full border rounded-lg p-2"
                          placeholder="Price"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        className="w-full border rounded-lg p-2"
                        placeholder="Address"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        className="w-full border rounded-lg p-2"
                        placeholder="Phone"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1">
                        Additional Note
                      </label>
                      <textarea
                        name="note"
                        className="w-full border rounded-lg p-2"
                        placeholder="Additional Note"
                      ></textarea>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold">
                      Order
                    </button>
                  </form>

                  <button
                    className="btn"
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
    </div>
  );
};

export default Servicedetails;
