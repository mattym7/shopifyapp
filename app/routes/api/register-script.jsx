import Shopify from '@shopify/shopify-api';

export async function loader({ request }) {
  const shop = request.headers.get('shop');
  const accessToken = request.headers.get('access-token'); // Get from session

  const client = new Shopify.Clients.Rest(shop, accessToken);

  await client.post({
    path: 'script_tags',
    data: {
      script_tag: {
        event: 'onload',
        src: 'https://your-app-domain.com/dynamic-script.js',
      },
    },
    type: Shopify.Clients.Rest.DataType.JSON,
  });

  return new Response(JSON.stringify({ message: 'Script registered' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
