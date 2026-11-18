
process.env.JWT_SECRET = "TestSecretForDineDeskAutomatedTests2026";
process.env.JWT_ISSUER = "dinedesk-api";
process.env.JWT_AUDIENCE = "dinedesk-staff";

const request = require("supertest");
const app = require("../src/app");

describe("DineDesk Security Tests", () => {

  test("Health endpoint should respond successfully", async () => {
    const response = await request(app).get("/api/health");

    expect(response.status).toBe(200);
    expect(response.body.status).toBe("DineDesk API running");
  });

  test("Orders API should reject missing authentication", async () => {
    const response = await request(app).get("/api/orders");

    expect(response.status).toBe(401);
  });

  test("Login should reject an incorrect password", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send({
        email: "manager.bole@dinedesk.test",
        password: "WrongPassword123"
      });

    expect(response.status).toBe(401);
  });

  test("Login should accept valid credentials", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send({
        email: "manager.bole@dinedesk.test",
        password: "DineDeskDemo2026!"
      });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeDefined();
  });

});
