import { main } from '@/prisma/seed';
import React from 'react'
import { PrismaClient } from '@prisma/client/extension';

type Props = {}

const page = (props: Props) => {
    const prisma=new PrismaClient()
    main()
      .catch((e) => {
        console.error(e);
        process.exit(1);
      })
      .finally(async () => {
        await prisma.$disconnect();
      });
  return (
    <div>page</div>
  )
}

export default page