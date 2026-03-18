import React from "react";

const AddCoffee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const chef = e.target.chef.value;
    const supplier = e.target.supplier.value;
    const taste = e.target.taste.value;
    const category = e.target.category.value;
    const details = e.target.details.value;
    const photo = e.target.photo.value;
    const user = { name, chef, supplier, taste, category, details, photo };
    console.log(name, chef, supplier, taste, category, details, photo);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after adding in db", data);
      });
  };
  return (
    <div>
      <div className="w-4/12 mx-auto text-center">
        <h1 className="font-bold text-2xl">Add New Coffee</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi dolore
          iure, molestias cum, aliquam, repudiandae aperiam fugiat libero
          doloribus laudantium incidunt minima eius ullam magnam dicta
          dignissimos reiciendis adipisci et.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 w-6/12 justify-evenly mx-auto "
      >
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="label">Name</label> <br />
            <input
              type="text"
              name="name"
              className="input"
              placeholder="My awesome page"
            />
          </div>
          <div>
            <label className="label">Chef</label>
            <br />
            <input
              type="text"
              name="chef"
              className="input"
              placeholder="My awesome page"
            />
          </div>
          <div>
            <label className="label">Supplier</label>
            <br />
            <input
              type="text"
              name="supplier"
              className="input"
              placeholder="My awesome page"
            />
          </div>
          <div>
            <label className="label">Taste</label>
            <br />
            <input
              type="text"
              name="taste"
              className="input"
              placeholder="My awesome page"
            />
          </div>
          <div>
            <label className="label">Category</label>
            <br />
            <input
              type="text"
              name="category"
              className="input"
              placeholder="My awesome page"
            />
          </div>
          <div>
            <label className="label">Details</label>
            <br />
            <input
              type="text"
              name="details"
              className="input"
              placeholder="My awesome page"
            />
          </div>
        </div>
        <div>
          <label className="label">Details</label>
          <br />
          <input
            type="url"
            name="photo"
            className="input w-full"
            placeholder="Enter Photo URL"
          />
        </div>
        <input className="bg-[#D2B48C] py-3" type="submit" value="Add Coffee" />
      </form>
    </div>
  );
};

export default AddCoffee;
