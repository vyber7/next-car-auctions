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

  //TODO: figure out how to send submitted values to confirmation.tsx
  res.redirect(
    "/confirmation?year=" +
      vehicle.year +
      "&make=" +
      vehicle.make +
      "&model=" +
      vehicle.model
    //`<h1>Your ${vehicle.year} ${vehicle.make} ${vehicle.model} has been    submitted!</h1><p>${vehicle.description}</p>
    // `
  );
}

export default NewListing;
