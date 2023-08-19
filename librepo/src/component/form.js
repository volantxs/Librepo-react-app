function Form({ onValChange, formObject, onFormSubmit }) {
    return (
      <div className="row mb-4 container text-center">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Book Name"
            onChange={onValChange}
            value={formObject.name}
            name="bookName"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Pages"
            onChange={onValChange}
            value={formObject.email}
            name="bookPages"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Profile"
            onChange={onValChange}
            value={formObject.profile}
            name="profile"
          />
        </div>
        <div className="d-grid">
          <input
            type="submit"
            onClick={onFormSubmit}
            className="btn btn-primary btn-dark"
          />
        </div>
      </div>
    );
  }
  export default Form;