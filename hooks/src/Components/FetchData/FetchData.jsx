import React, { useEffect, useState } from "react";
import "./FetchData.css"
const FetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const handleData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const newData = await response.json();
        setData(newData);
      } catch {
        setError("Error in fetching data!");
      } finally {
        setLoading(false);
      }
    };
    handleData();
  }, []);

  if (loading) {
    return <p>Loading data please wait ...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <table className="fetchTable">
      <caption>User Information</caption>
      <thead className="fetchHeading">
        <tr>
          <th>Sl.No</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
      </thead>
      <tbody className="fetchBody">
        {data.map((detail, id) => (
          <tr key={id}>
            <td>{detail.id}</td>
            <td>{detail.title}</td>
            <td>{detail.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FetchData;
