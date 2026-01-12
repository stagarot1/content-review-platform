import type { ContentItem, ContentStatus } from '../types/content'
import { mockContent } from './mock/content.mock'

export async function getContentQueue(
  status?: ContentStatus
): Promise<ContentItem[]> {
  if (!status) return mockContent

  return mockContent.filter(item => item.status === status)
}
