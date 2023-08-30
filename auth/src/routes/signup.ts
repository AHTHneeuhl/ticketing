import { Router, Request, Response } from "express";
import { body } from "express-validator";

const router = Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 6, max: 20 })
      .withMessage("Password must be between 6 and 20 characters"),
  ],
  (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || typeof email !== "string") {
      res.status(400).send("Provide a valid email");
    }
  }
);

export { router as signUpRouter };
