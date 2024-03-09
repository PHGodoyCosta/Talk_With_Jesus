import { Router, Request, Response } from "express";

const router = Router()

router.get("/", (request: Request, response: Response) => {
    return response.render("pages/index")
})

export default router