import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function NewListing(req, res) {
  const vehicle = req.body;

  await prisma.vehicle.create({
    data: {
      year: vehicle.year,
      make: vehicle.make,
      model: vehicle.model,
      miles: vehicle.miles,
      description: vehicle.description,
    },
  });

  res.send(
    `Your ${vehicle.year} ${vehicle.make} ${vehicle.model} has been submitted!\n\n${vehicle.description}`
  );
}

export default NewListing;
