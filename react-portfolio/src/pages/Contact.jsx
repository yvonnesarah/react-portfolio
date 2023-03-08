import Layout from "../components/Layout";

import Pdf from "../data/Yvonne_CV.pdf";

export default function Contact() {
  return (
    <Layout>
      <section className="container-fluid" id="contact">
        <h1 className="text-center my-5">Contact</h1>
      </section>
          <center><i>
          <button className="btn btn-custom btn-primary">
        Email: yvonneadedeji.sarah@gmail.com
        </button>
          </i></center>
       <br></br>
          <center><i>
          <button className="btn btn-custom btn-primary">
        Mobile: 07540333242
        </button>
          </i></center>
          <br></br>
          <center><a href={"https://github.com/yvonnesarah"} >
          <i>
          <button className="btn btn-custom btn-primary">
        GitHub
        </button>
        </i>
        </a></center>
        <br></br>
        <center><a href={"https://www.linkedin.com/in/yvonne-adedeji/"} >
          <i>
          <button className="btn btn-custom btn-primary">
          LinkedIn
        </button>
        </i>
        </a></center>
        <br></br>
        <center><a href={Pdf} >
          <i>
          <button className="btn btn-custom btn-primary">
         Download CV
        </button>
        </i>
        </a></center>

       <br></br>
       <br></br>
      <center><div className="col-md-6 d-flex justify-content-center">
            <div className="card bg-transparent border-0">
              <h3 className="card-title text-center my-3">Contact Form</h3>
              <form
                action="https://getform.io/f/3957f9ba-53ca-44ee-bc2f-7e2bb06be9a8"
                method="POST"
              >
                <div className="row ">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      name="first_name"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      name="last_name"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col">
                    <textarea
                      className="form-control"
                      name="message"
                      placeholder="Message"
                      rows="6"
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <button type="submit" className="btn btn-custom btn-primary">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          </center>
    </Layout>
  );
}


