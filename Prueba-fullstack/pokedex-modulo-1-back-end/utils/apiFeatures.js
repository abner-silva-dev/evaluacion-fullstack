const AppError = require('./appError');

const apiFeatures = function (data, query) {
  let { limit, page, search } = query;
  let newData;

  // Alphabetical order
  newData = data.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

  if (search) {
    newData = data.filter((pokemon) => pokemon.name.includes(search));

    if (newData.length === 0) {
      throw new AppError('Pokemon not found, please try again', 404);
    }
    return newData;
  }

  if (limit) {
    if (limit > data.length || limit < 1)
      throw new AppError(
        `Please implement a limit between 1 to ${data.length}`,
        400
      );

    page = page || 1;
  }

  if (page) {
    newData = data.slice(page * limit - limit, limit * page);
    if (newData.length === 0) throw new AppError('Limit of page', 400);
  }

  return newData;
};

module.exports = apiFeatures;
