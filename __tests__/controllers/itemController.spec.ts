import { createKnickKnackHandler } from "../../src/controllers/itemController";
import { getMockReq, getMockRes } from "@jest-mock/express";

jest.mock("../services/itemsService", () => ({
  addKnickKnack: jest.fn().mockResolvedValue({
    id: 1,
    name: "Vintage Compass",
    description: "Antique brass compass from 1920",
    condition: "Good",
  }),
}));

test("starts express server", () => {
  const req = getMockReq({
    body: { firstname: "James", lastname: "Smith", age: 34 },
  });

  const { res, next, clearMockRes } = getMockRes();

  //call
  createKnickKnackHandler(req, res);
  //assert
});
