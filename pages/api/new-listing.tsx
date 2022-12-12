import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function NewListing(req, res) {
  const vehicle = req.body;

  res.send(
    `Your ${vehicle.year} ${vehicle.make} ${vehicle.model} has been submitted`
  );
}

export default NewListing;
