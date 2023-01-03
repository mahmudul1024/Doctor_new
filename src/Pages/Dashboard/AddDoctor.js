import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  // imgur key
  const imageHostkey = process.env.React_APP_imgurkey;
  console.log(imageHostkey);

  const navigate = useNavigate();

  // form states
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { data: specialities, isLoading } = useQuery({
    queryKey: ["speciality"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/appointmentSpeciality");
      const data = await res.json();
      return data;
    },
  });

  // add doctor
  const handleAddDoctor = (data) => {
    console.log(data);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostkey}`;
    fetch(url, {
      method: "POST",

      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        if (imageData.success) {
          console.log(imageData.data.url);
          console.log("data paisi");

          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            image: imageData.data.url,
          };
          console.log(doctor);
          //   save doctor inform to the database
          fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success("data uploaded");
              navigate("/dashboard/managedoctors");
            });
        }
      });
  };

  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  return (
    <div className="w-96 p-7">
      <h2 className="text-3xl mb-7 p-5 text-center">AddDoctor</h2>
      <form onSubmit={handleSubmit(handleAddDoctor)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
            {...register("name", { required: "Name  is required" })}
          />
          {errors.name && (
            <p className="text-red-600">{errors.name?.message}</p>
          )}
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
            {...register("email", { required: "Email address is required" })}
          />
          {errors.email && (
            <p className="text-red-600">{errors.email?.message}</p>
          )}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Specialty</span>
          </label>
          <select
            {...register("specialty")}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled selected>
              Please select a specialty
            </option>
            {specialities?.map((specialty) => (
              <option key={specialty._id} value={specialty.name}>
                {specialty.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input
            type="file"
            placeholder="Your Name"
            className="input input-bordered w-full max-w-xs"
            {...register("image", { required: "Photo  is required" })}
          />
          {errors.image && (
            <p className="text-red-600">{errors.image?.message}</p>
          )}
        </div>
        <input
          className="btn btn-accent w-full mt-5"
          value="Add A Doctor"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
