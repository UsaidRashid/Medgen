
import '../CSS/Update.css';
export default function UpdateDetails() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('cheetah hi kehde');
  };
  return (
    <>
      <div className="container-fluid bg-white">
        <div className="row">
          <div className="col-md-6">
            <img
              src="image/ss.png"
              alt=""
              className="img-fluid w-100 h-600"
              id="img1"
            ></img>
          </div>
          <div className="col-md-6 ">
            <h3 className="text-center mt-3 text-dark">
              <b>Update your profile!</b>
            </h3>
            <form className="mx-5 mb-5" onSubmit={handleSubmit} >
              <div className="form-group mt-3">
                <label className="text-dark">Name</label>
                <input
                  type="name"
                  name = 'name'
                  className="form-control border border-3 border-black p-2 border rounded-3 h3"
                />
              </div>
              <div className="form-group mt-3">
                <label className="text-dark">Username</label>
                <input
                  type="username"
                  name = 'username'
                  className="form-control border border-3 border-black p-2 border rounded-3 h3"
                />
              </div>
              <div className="form-group">
                <label className="text-dark">Email Address</label>
                <input 
                
                  type="email"
                  name = 'email'
                  className="form-control mb-1 border border-3 border-black p-2 border rounded-3 h3"
                />
              </div>
              <div className="form-group">
                <label className="text-dark">Contact No</label>
                <input
                  type="number"
                  name = 'contact'
                  className="form-control mb-1 border border-3 border-black p-2 border rounded-3 h3"
                />
              </div>
              <div className="form-group">
                <label className="text-dark">Password</label>
                <input
                  type="password"
                  name = 'password'
                  className="form-control mb-1 border border-3 border-black p-2 border rounded-3 h3"
                />
              </div>
              <button
                type="submit"
                className="mt-2 bg-light p-3 border rounded-5 w-50 float-centre h4 shadow-lg shadow-white bg-dark text-white"
              >
                <b>Update</b>
              </button>
            </form>
              </div>
              
            </div>
          </div>
      
    </>
  );
}
