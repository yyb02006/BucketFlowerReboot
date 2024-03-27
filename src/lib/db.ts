/* eslint-disable no-var */
import { PrismaClient } from '@prisma/client'

const createPrismaClient = () => {
  return new PrismaClient()
}

declare global {
  var prismaGlobal: undefined | ReturnType<typeof createPrismaClient>
}

const prisma = globalThis.prismaGlobal ?? createPrismaClient()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma
