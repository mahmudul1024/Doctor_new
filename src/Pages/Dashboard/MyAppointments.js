import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../assets/components/Context/AuthProvider";

const MyAppointments = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const url = `https://doctor-praxis-server.vercel.app/bookings?email=${user?.email}`;

  const { data: bookings = [], isLoading } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();

      return data;
    },
  });
  console.log("bookings paisi", bookings);

  useEffect(() => {
    if (!isLoading && bookings.length === 0) {
      // Handle the case when there are no bookings
    }
  }, [isLoading, bookings]);

  return (
    <div className="">
      <h3 className="text-3xl mb-5">MyAppointments {bookings?.length}</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {bookings.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* Existing table code */}
              </table>
            </div>
          ) : (
            <p>No appointments found.</p>
          )}
        </>
      )}
    </div>
  );
};

export default MyAppointments;
