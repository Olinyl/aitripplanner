import HttpError from '@wasp/core/HttpError.js'


export const createTrip = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const newTrip = await context.entities.Trip.create({
    data: {
      userId: context.user.id,
      destination: args.destination,
      travelDates: args.travelDates,
      budget: args.budget
    }
  });

  return newTrip;
}

export const updateItinerary = async (args, context) => {
  if (!context.user) { throw new HttpError(401) };

  const itinerary = await context.entities.Itinerary.findUnique({
    where: { id: args.tripId }
  });

  if (itinerary.tripId !== context.user.id) { throw new HttpError(400) };

  return context.entities.Itinerary.update({
    where: { id: args.tripId },
    data: { activities: args.activities }
  });
}

export const uploadActivityImage = async (args, context) => {
  // Implementation goes here.
}