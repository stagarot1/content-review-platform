import type { ContentItem } from '../../types/content'

export const mockContent: ContentItem[] = [
  {
    id: '1',
    title: 'Suspicious comment',
    body: 'Buy cheap followers here!',
    status: 'pending',
    flags: ['spam'],
    createdAt: '2025-01-01T10:00:00Z',
    authorId: 'user-1'
  },
  {
    id: '2',
    title: 'Normal post',
    body: 'I love this community.',
    status: 'approved',
    flags: [],
    createdAt: '2025-01-02T14:30:00Z',
    authorId: 'user-2'
  }
]
