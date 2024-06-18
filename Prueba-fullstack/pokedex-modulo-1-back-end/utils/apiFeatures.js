const AppError = require('./appError');

const apiFeatures = function (data, query) {
  let { limit, page, search } = query;
  let newData;
  // Alphabetical order
  newData = data.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  let totalResults = newData.length;

  if (search) {
    newData = data.filter((pokemon) => pokemon.name.includes(search));

    totalResults = newData.length;

    if (newData.length === 0) {
      throw new AppError('Pokemon not found, please try again', 404);
    }
  }

  if (limit) {
    if (limit > newData.length || limit < 1)
      throw new AppError(
        `Please implement a limit between 1 to ${newData.length}`,
        400
      );

    page = page || 1;
  }

  if (page) {
    newData = newData.slice(page * limit - limit, limit * page);
    if (newData.length === 0)
      throw new AppError('Page outside of the limit', 400);
  }

  return { pokemonsQuery: newData, totalResults };
};

module.exports = apiFeatures;
