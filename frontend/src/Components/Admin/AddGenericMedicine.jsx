import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import background from "../../Images/response-bg.jpg";
import axios from "axios";

export default function AddGenericMedicine() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    code: "",
    salt: [],
    batch: "",
    price: "",
    alternativeFor: [{ name: "", code: "", salt: [], batch: "", price: "" }],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaltChange = (index, event) => {
    const { value } = event.target;
    const updatedSalts = formData.salt.map((salt, i) =>
      i === index ? value : salt
    );
    setFormData({ ...formData, salt: updatedSalts });
  };

  const addSaltField = () => {
    setFormData({
      ...formData,
      salt: [...formData.salt, ""],
    });
  };

  const deleteSaltField = (index) => {
    const updatedSalts = formData.salt.filter((_, i) => i !== index);
    setFormData({ ...formData, salt: updatedSalts });
  };

  const handleAlternativeChange = (index, event) => {
    const { name, value } = event.target;
    const updatedAlternatives = formData.alternativeFor.map(
      (alternativeFor, i) => {
        if (i === index) {
          return { ...alternativeFor, [name]: value };
        }
        return alternativeFor;
      }
    );
    setFormData({ ...formData, alternativeFor: updatedAlternatives });
  };

  const handleAlternativeSaltChange = (altIndex, saltIndex, event) => {
    const { value } = event.target;
    const updatedAlternatives = formData.alternativeFor.map(
      (alternativeFor, i) => {
        if (i === altIndex) {
          const updatedSalts = alternativeFor.salt.map((salt, j) =>
            j === saltIndex ? value : salt
          );
          return { ...alternativeFor, salt: updatedSalts };
        }
        return alternativeFor;
      }
    );
    setFormData({ ...formData, alternativeFor: updatedAlternatives });
  };

  const addAlternativeSaltField = (altIndex) => {
    const updatedAlternatives = formData.alternativeFor.map((alternative, i) =>
      i === altIndex
        ? { ...alternative, salt: [...alternative.salt, ""] }
        : alternative
    );
    setFormData({ ...formData, alternativeFor: updatedAlternatives });
  };

  const deleteAlternativeSaltField = (altIndex, saltIndex) => {
    const updatedAlternatives = formData.alternativeFor.map(
      (alternative, i) => {
        if (i === altIndex) {
          const updatedSalts = alternative.salt.filter(
            (_, j) => j !== saltIndex
          );
          return { ...alternative, salt: updatedSalts };
        }
        return alternative;
      }
    );
    setFormData({ ...formData, alternativeFor: updatedAlternatives });
  };

  const addAlternativeField = () => {
    setFormData({
      ...formData,
      alternativeFor: [
        ...formData.alternativeFor,
        { name: "", code: "", salt: "", batch: "", price: "" },
      ],
    });
  };

  const deleteAlternativeField = (index) => {
    const updatedAlternatives = formData.alternativeFor.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, alternativeFor: updatedAlternatives });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await axios.post(
        "http://localhost:6969/admin/add-generic",
        formData
      );
      console.log(response);
      if (response.status === 200) {
        alert(response.data.message);
        navigate("/admin/add-medicine");
      } else {
        alert(
          "There was a problem in adding the medicine....",
          response.data.message
        );
      }
    } catch (error) {
      console.error("Error in Adding Medicine:", error);
      alert(`${error.name} -> ${error.message}`);
      if (error.response) {
        alert("Error from server: " + error.response.data.message);
      } else if (error.request) {
        alert("No response from the server");
      } else {
        alert("Error setting up the request: " + error.message);
      }
    }
  };

  return (
    <div>
      <div
        className="d-flex"
        style={{
          backgroundColor: "white",
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "80vh",
          backgroundPosition: "right",
          height: "95vh",
        }}
      >
        <Sidebar />
        <div
          className="container-fluid"
          style={{
            border: "2px solid black",
            width: "85vh",
            height: "84.6vh",
            margin: "2.7rem 0rem 2rem 7rem",
            backgroundColor: "white",
            borderRadius: "2rem",
            boxShadow: "6px 5px 13px rgba(0, 0, 0, 0.61)",
          }}
        >
          <h1
            className="font-weight-bold"
            style={{ margin: "1.3rem 0 0 4.5rem", color: "black" }}
          >
            ADD
          </h1>
          <div className="overflow-auto" style={{ maxHeight: "70vh" }}>
            <form className="form-group p-2 my-4" onSubmit={handleSubmit}>
              <h5>Generic Medicine Information...</h5>
              <div className="mb-3 px-3">
                <label htmlFor="medicine-name" className="form-label text-dark">
                  MEDICINE NAME
                </label>
                <input
                  type="text"
                  style={{ border: ".8px solid black" }}
                  className="form-control"
                  id="medicine-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 px-3">
                <label htmlFor="drug-code" className="form-label text-dark">
                  DRUG CODE
                </label>
                <input
                  type="text"
                  style={{ border: ".8px solid black" }}
                  className="form-control"
                  id="drug-code"
                  name="code"
                  value={formData.code}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 px-3">
                <label htmlFor="Salt" className="form-label text-dark">
                  SALT
                </label>
                {formData.salt.map((salt, index) => (
                  <div key={index} className="input-group mb-2">
                    <input
                      type="text"
                      style={{ border: ".8px solid black" }}
                      className="form-control"
                      id={`salt-${index}`}
                      value={salt}
                      onChange={(event) => handleSaltChange(index, event)}
                      required
                    />
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteSaltField(index)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={addSaltField}
                >
                  Add Salt
                </button>
              </div>
              <div className="mb-3 px-3">
                <label htmlFor="Batch-No" className="form-label text-dark">
                  BATCH NUMBER
                </label>
                <input
                  type="number"
                  style={{ border: ".8px solid black" }}
                  className="form-control"
                  id="Batch-No"
                  name="batch"
                  value={formData.batch}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3 px-3">
                <label htmlFor="Mrp" className="form-label text-dark">
                  MRP
                </label>
                <input
                  type="number"
                  style={{ border: ".8px solid black" }}
                  className="form-control"
                  id="Mrp"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>
              <hr />
              <div className="mb-3">
                <h5>Branded Medicines Information...</h5>
                {formData.alternativeFor.map((alternative, altIndex) => (
                  <div key={altIndex} className="mb-3">
                    <h6>Branded Medicine {altIndex + 1}</h6>
                    <div className="mb-3 px-3">
                      <label
                        htmlFor={`alt-medicine-name-${altIndex}`}
                        className="form-label text-dark"
                      >
                        MEDICINE NAME
                      </label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        id={`alt-medicine-name-${altIndex}`}
                        name="name"
                        value={alternative.name}
                        onChange={(event) =>
                          handleAlternativeChange(altIndex, event)
                        }
                      />
                    </div>
                    <div className="mb-3 px-3">
                      <label
                        htmlFor={`alt-drug-code-${altIndex}`}
                        className="form-label text-dark"
                      >
                        DRUG CODE
                      </label>
                      <input
                        required
                        type="text"
                        className="form-control"
                        id={`alt-drug-code-${altIndex}`}
                        name="code"
                        value={alternative.code}
                        onChange={(event) =>
                          handleAlternativeChange(altIndex, event)
                        }
                      />
                    </div>
                    <div className="mb-3 px-3">
                      <label
                        htmlFor={`alt-salt-${altIndex}`}
                        className="form-label text-dark"
                      >
                        SALT
                      </label>
                      {alternative.salt?.map((salt, saltIndex) => (
                        <div key={saltIndex} className="d-flex mb-2">
                          <input
                            required
                            type="text"
                            className="form-control"
                            id={`alt-salt-${altIndex}-${saltIndex}`}
                            name={`salt-${saltIndex}`}
                            value={salt}
                            onChange={(event) =>
                              handleAlternativeSaltChange(
                                altIndex,
                                saltIndex,
                                event
                              )
                            }
                          />
                          <button
                            type="button"
                            className="btn btn-danger ml-2"
                            onClick={() =>
                              deleteAlternativeSaltField(altIndex, saltIndex)
                            }
                          >
                            Delete
                          </button>
                        </div>
                      ))}
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => addAlternativeSaltField(altIndex)}
                      >
                        Add Salt
                      </button>
                    </div>
                    <div className="mb-3 px-3">
                      <label
                        htmlFor={`alt-batch-${altIndex}`}
                        className="form-label text-dark"
                      >
                        BATCH NUMBER
                      </label>
                      <input
                        required
                        type="number"
                        className="form-control"
                        id={`alt-batch-${altIndex}`}
                        name="batch"
                        value={alternative.batch}
                        onChange={(event) =>
                          handleAlternativeChange(altIndex, event)
                        }
                      />
                    </div>
                    <div className="mb-3 px-3">
                      <label
                        htmlFor={`alt-price-${altIndex}`}
                        className="form-label text-dark"
                      >
                        MRP
                      </label>
                      <input
                        required
                        type="number"
                        className="form-control"
                        id={`alt-price-${altIndex}`}
                        name="price"
                        value={alternative.price}
                        onChange={(event) =>
                          handleAlternativeChange(altIndex, event)
                        }
                      />
                    </div>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteAlternativeField(altIndex)}
                    >
                      Delete Alternative
                    </button>
                    <hr />
                  </div>
                ))}
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={addAlternativeField}
                >
                  Add Alternative
                </button>
              </div>
              <button
                type="submit"
                className="fs-6 btn btn-primary"
                style={{
                  margin: ".6rem 0 0 28.4rem",
                  borderRadius: ".7rem",
                  width: "120px",
                  boxShadow: "2px 3px 7px rgba(0, 0, 0, 0.4)",
                }}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
