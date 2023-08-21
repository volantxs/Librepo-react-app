import "./form.css";
function Form({ onValChange, formObject, onFormSubmit }) {
    return (
      <div className="row mb-4 container text-center">
        <div className="mb-3">
          <input
            type="text"
            className="form-control rounded-pill"
            placeholder="Book Name"
            onChange={onValChange}
            value={formObject.bookName}
            name="bookName"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control rounded-pill"
            placeholder="Pages"
            onChange={onValChange}
            value={formObject.bookPages}
            name="bookPages"
          />
        </div>
        <div className="mb-3">
          <label for="StaticXP" className="text-violet h5"><strong>Book XP</strong></label>
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
        <div >
          <input
            type="submit"
            onClick={onFormSubmit}
            className="btn btn-primary btn-violet rounded-pill"
          />
        </div>
      </div>
    );
  }
  export default Form;