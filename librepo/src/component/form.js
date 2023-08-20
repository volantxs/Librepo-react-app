function Form({ onValChange, formObject, onFormSubmit }) {
    return (
      <div className="row mb-4 container text-center">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Book Name"
            onChange={onValChange}
            value={formObject.bookName}
            name="bookName"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Pages"
            onChange={onValChange}
            value={formObject.bookPages}
            name="bookPages"
          />
        </div>
        <div className="mb-3">
          <label for="StaticXP" className="text-danger"><strong>Book XP</strong></label>
            <input
              type="text"
              readOnly className="form-control-plaintext text-center"
              id="StaticXP"
              placeholder="XP"
              onChange={onValChange}
              value={formObject.xp}
              name="xperience"
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