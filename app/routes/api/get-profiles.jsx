import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function loader({ request }) {
  const url = new URL(request.url);
  const buttonId = url.searchParams.get('buttonId');

  const profiles = await prisma.profile.findMany({
    where: { buttonId },
  });

  return new Response(JSON.stringify(profiles), {
    headers: { 'Content-Type': 'application/json' },
  });
}
