export type ContentStatus = 'pending' | 'approved' | 'rejected'

export interface ContentItem {
  id: string
  title: string
  body: string
  status: ContentStatus
  flags: string[]
  createdAt: string
  authorId: string
}
