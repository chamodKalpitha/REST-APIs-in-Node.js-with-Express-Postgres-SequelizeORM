import { Request, Response } from "express";

export async function signup(request: Request, response: Response) {
  response.status(200).send({
    status: "success",
    message: `Singup route are working`,
  });
}
