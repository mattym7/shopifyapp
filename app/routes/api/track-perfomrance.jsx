import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function action({ request }) {
  const data = await request.json();

  await prisma.profile.update({
    where: { id: data.profileId },
    data: {
      performanceScore: { increment: 1 },
    },
  });

  return new Response(JSON.stringify({ message: 'Performance updated' }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
