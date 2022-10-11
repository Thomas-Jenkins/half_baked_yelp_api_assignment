export async function fetchBusinesses(zip = '89509', search = '') {
  const params = new URLSearchParams();
  params.set('zip', zip);
  params.set('name', search);
  // console.log('name: ', params.toString());
  const resp = await fetch(`/.netlify/functions/fetch-yelp?${params.toString()}`, {
    headers: { Accept: 'application/json' },
  });
  console.log('resp: ', resp);
  const data = await resp.json();
  console.log('data: ', data.id);
  return data;
}
