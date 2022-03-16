import { client } from './client';

export const fetchCountry = async () => {
  const country = await client.from('countries').select('*');
  console.log(country);
  return country;
};
