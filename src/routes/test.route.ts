import { Request, Response, Router } from "express";

const testRouter = Router();

testRouter.get("/api/users/test", async (req: Request, res: Response) => {
  
  res.send("Test OK 3333");
});

export default testRouter;