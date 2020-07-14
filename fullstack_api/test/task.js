const chai = require("chai");
const chaiHttp = require("chai-htt");

let server = require("../server");

//Asertion style
chai.should();

chai.use(chaiHttp);

describe("Task Api", () => {
  /*
    Test the Signup Api
    */

  describe("POST /api/auth/signup", () => {
    it("It should register the given user ", (done) => {
      const task = {
        username: "Ar Rahman",
        email: "arrahman@gmail.com",
        password: "12345678",
        roles: ["user"],
      };
      chai
        .request(server)
        .post("/api/auth/signup")
        .send(task)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("string");
          response.body.should.be.eq("User was registered successfully!");
          done();
        });
    });
  });

  /*
    Test the Signin Api
    */

  describe("POST /api/auth/signin", () => {
    it("It should login the given user ", (done) => {
      const task = {
        username: "Ar Rahman",
        password: "12345678",
      };
      chai
        .request(server)
        .post("/api/auth/signin")
        .send(task)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a("object");
          response.body.should.be.eq("User was registered successfully!");
          done();
        });
    });
  });
});
