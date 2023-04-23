import prisma from "@/lib/db"

export default async function handler(req, res) {
  const news = await prisma.news_post.findMany()
  res.status(200).json(news)
}
