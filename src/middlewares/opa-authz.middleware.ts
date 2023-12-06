import axios from "axios";
import { Request, Response, NextFunction } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
  if (req.url === "/api/users/health") {
    next();
    return;
  }
  const opaRequest = {
    input: {
      url: req.url,
      headers: req.headers,
      method: req.method.toUpperCase(),
      service: "huna-users",
      remoteAddress: req.ip,
    },
  };
  const response = await axios.post(
    `http://127.0.0.1:8181/v1/data/com/huna/authz`,
    opaRequest
  );
  const opaResponse = response.data?.result;
  if (opaResponse && opaResponse.allow) {
    (req as any).user = opaResponse.user;
    (req as any).user.isAdmin = opaResponse.is_admin;
    next();
  } else {
    res.sendStatus(403);
  }
};