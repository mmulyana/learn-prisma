import prisma from '@/lib/db'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { title, content, image } = req.body

    const news_post = await prisma.news_post.create({
      data: {
        title,
        content,
        image,
      },
    })

    res.status(201).json(news_post)
  }
}
