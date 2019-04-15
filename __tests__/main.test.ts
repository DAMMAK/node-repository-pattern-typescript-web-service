import request from "supertest";
import app from "../src/services/App";

describe("Test Main Controller", () => {
  test("It should response Get Method", async () => {
    const appRes = await request(app).get("/");
    expect(appRes.status).toBe(200);
  });
});
