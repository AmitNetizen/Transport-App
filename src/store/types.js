function createRequestTypes(type) {
  let dict = { [type]: type };
  const array = ['SUCCESS', 'FAILED', 'REQUEST'];
  array.map((item) => {
    const key = type + '_' + item;
    Object.assign(dict, {
      [key]: key,
    });
  });
  return dict;
}

export const TRIP = createRequestTypes('TRIP');
export const BOOK_TRIP = createRequestTypes('BOOK_TRIP');
