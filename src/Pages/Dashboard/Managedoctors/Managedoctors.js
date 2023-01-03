import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

const Managedoctors = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);

  const handleCloseModal = () => {
    setIsModalOpen(null);
  };

  const {
    data: doctors,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (err) {}
    },
  });

  console.log(doctors);
  const handleDeleteDoctor = (doctor) => {
    console.log(doctor);
    fetch(`http://localhost:5000/doctors/${doctor._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          refetch();
          toast.success("Doctor deleted Successfully ");
        }
      });
  };
  //   console.log(doctors);

  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  return (
    <div>
      <h2 className="text-3xl text-center mb-7 p-5">Manage Doctors </h2>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Speciality</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doc, index) => (
              <tr key={doc._id} className="hover">
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={doc.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{doc.name}</div>
                      <div className="text-sm opacity-50">{doc.specialty}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {doc.specialty}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {doc.email}
                  </span>
                </td>
                <td>{doc.email}</td>
                <th>
                  <label
                    onClick={() => setIsModalOpen(doc)}
                    htmlFor="confirmation-modal"
                    className="btn btn-outline btn-error"
                  >
                    Delete
                  </label>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
        {isModalOpen && (
          <ConfirmationModal
            title={"Are you sure you want to delete ?"}
            message={`If you delete ${isModalOpen.name} .It can not be undone`}
            successAction={handleDeleteDoctor}
            successButtonName="Delete"
            handleCloseModal={handleCloseModal}
            modalData={isModalOpen}
          ></ConfirmationModal>
        )}
      </div>
    </div>
  );
};

export default Managedoctors;
