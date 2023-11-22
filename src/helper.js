const token = localStorage.getItem("key");

export const getFilter = (setFilterData) => {
  fetch("https://crud-backend-rqol.onrender.com/users", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`, // notice the Bearer before your token
      "Content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => {
      setFilterData(
        Object.keys(
          res.data.reduce((acc, ele, i) => {
            let city = ele.city;
            acc[city] = (acc[city] || 0) + 1;
            return acc;
          }, {})
        )
      );
    });
};
 


