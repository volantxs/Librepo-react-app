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
          <label for="StaticXP" className="h5 text-violet"><strong>Book-XP</strong></label>
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
        
        <div className="">
          <button
            type="submit"
            onClick={onFormSubmit}
            className="btn btn-dark rounded-pill p-3"
          >Add</button>
        </div>
      </div>
    );
  }
  export default Form;