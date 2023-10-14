import HttpError from '@wasp/core/HttpError.js'

export const getTrips = async (args, context) => {
  if (!context.user) { throw new HttpError(401) }

  return context.entities.Trip.findMany({
    where: { userId: context.user.id },
    include: {
      User: true,
      Itinerary: true,
      Weather: true,
      LocalInfo: true
    }
  });
}

export const getItinerary = async (args, context) => {
  if (!context.user) throw new HttpError(401);
  const trip = await context.entities.Trip.findUnique({
    where: { id: args.tripId },
    include: { Itinerary: true }
  });
  if (!trip || trip.userId !== context.user.id) throw new HttpError(400);
  return trip.Itinerary;
}

export const getActivityInfo = async (args, context) => {
  const { activityId } = args;

  if (!context.user) {
    throw new HttpError(401);
  }

  const activity = await context.entities.Activity.findUnique({
    where: { id: activityId },
    select: {
      name: true,
      description: true,
      images: true,
      reviews: true,
      location: true
    }
  });

  if (!activity) {
    throw new HttpError(404, 'Activity not found');
  }

  return activity;
}
