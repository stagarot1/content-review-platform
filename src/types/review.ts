export type ReviewStatus = 'PENDING' | 'APPROVED' | 'REJECTED'

export interface ReviewItem {
  id: string
  contentType: 'POST' | 'COMMENT' | 'IMAGE'
  content: string
  author: string
  createdAt: string
  status: ReviewStatus
}

export interface ReviewAction {
  id: string
  contentId: string
  reviewerId: string
  action: 'approve' | 'reject'
  comment?: string
  createdAt: string
}
