import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function action({ request }) {
  const data = await request.json();

  const profile = await prisma.profile.create({
    data: {
      buttonId: data.buttonId,
      color: data.color,
      fontSize: data.fontSize,
      text: data.text,
    },
  });

  return new Response(JSON.stringify(profile), {
    headers: { 'Content-Type': 'application/json' },
  });
}
