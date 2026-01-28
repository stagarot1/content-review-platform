import type { ReviewItem } from '../../types/review'

export const fetchReviewQueue = async (): Promise<ReviewItem[]> => {
  await new Promise((res) => setTimeout(res, 300))

  return [
    {
      id: '1',
      contentType: 'POST',
      content: 'This is my first post!',
      author: 'user123',
      createdAt: new Date().toISOString(),
      status: 'PENDING',
    },
    {
      id: '2',
      contentType: 'COMMENT',
      content: 'This is spam!!!',
      author: 'bot_account',
      createdAt: new Date().toISOString(),
      status: 'PENDING',
    },
  ]
}
