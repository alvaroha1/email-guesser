const request = require("supertest");

const app = require("../index.js");

const userData = {
  "userData": {
    "firstName": "Alex",
    "lastName": "Kidd",
    "domain": "babbel.com"
  }
}

const userData2 = {
  "userData": {
    "firstName": "Alex",
    "lastName": "Kidd",
    "domain": "pokemon.com"
  }
}

describe("Test route with right user data", () => {
  test("POST /convert", (done) => {
    request(app)
      .post("/convert")
      .expect("Content-Type", /json/)
      .send(userData)
      .expect(200)
      .expect((res) => {
       res.success === true
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});

describe("Test route with wrong user data", () => {
  test("POST /convert", (done) => {
    request(app)
      .post("/convert")
      .expect("Content-Type", /json/)
      .send(userData2)
      .expect(200)
      .expect((res) => {
       res.success === false
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  });
});