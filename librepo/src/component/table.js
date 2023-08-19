function Table({ tableData }) {
    return (
      <table className="table mt-5 mb-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Book</th>
            <th>Pages</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.bookName}</td>
                <td>{data.bookPages}</td>
                <td>{data.profile}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
  export default Table;