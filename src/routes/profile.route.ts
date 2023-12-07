import { Request, Response, Router } from "express";

const profileRouter = Router();

profileRouter.get("/api/users/myprofile", async (req: Request, res: Response) => {
  res.send((req as any).user);
});

export default profileRouter;