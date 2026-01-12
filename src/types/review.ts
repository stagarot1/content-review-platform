export interface ReviewAction {
  id: string
  contentId: string
  reviewerId: string
  action: 'approve' | 'reject'
  comment?: string
  createdAt: string
}
