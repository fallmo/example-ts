import { Router } from "express";
import { Stat } from "./Stat";

const router = Router();

router.get("/", (req, res) => {
  res.send("ok\n");
});

router.get("/version", (req, res) => {
  res.send("API Version 1.0\n");
});
router.get("/env", (req, res) => {
  res.json(process.env);
});

router.get("/crash", (req, res) => {
  console.error("application crash...");
  res.json({ error: "something went wrong" });
  process.exit(1);
});

router.get("/stats", async (req, res) => {
  const stats = await Stat.find();
  res.json(stats);
});

export default router;