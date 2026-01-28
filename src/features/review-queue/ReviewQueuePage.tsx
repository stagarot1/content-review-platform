import { useEffect, useState } from 'react'
import type { ContentItem } from '../../types/content'
import type { ReviewAction } from '../../types/review'
import { ReviewHistory } from '../../features/review-history/ReviewHistory'
import { getContentQueue } from '../../services/contentService'

export function ReviewQueuePage() {
  const [items, setItems] = useState<ContentItem[]>([]) // moderation queue
  const [actions, setActions] = useState<ReviewAction[]>([])


  useEffect(() => {
    getContentQueue('pending').then(setItems)
  }, [])

  return (
    <main>
      <h1>Review Dashboard</h1>
      <section>
        <h2>Pending Reviews</h2>
        {items.length === 0 ? (
        <p>No content to review 🎉</p>
      ) : (
       <ul>
        {items.map(item => (
        <li key={item.id}>
          <strong>{item.title}</strong>
          <div>Status: {item.status}</div>
          <div>Flags: {item.flags.join(', ') || 'None'}</div>

          <button onClick={() => handleApprove(item.id)}>Approve</button>
          <button onClick={() => handleReject(item.id)}>Reject</button>
        </li>
      ))}
      </ul>

      )}
      </section>
      <section>
        <h2>Recent Actions</h2>
        <ReviewHistory actions={actions} />
      </section>
    </main>
  )

 function handleApprove(id: string) {
  // remove item from queue
  setItems(prev => prev.filter(item => item.id !== id))

  // log review action
  setActions(prev => [
    ...prev,
    {
      id: crypto.randomUUID(),
      contentId: id,
      reviewerId: 'moderator-1',
      action: 'approve',
      createdAt: new Date().toISOString(),
    },
  ])
}

function handleReject(id: string) {
  setItems(prev => prev.filter(item => item.id !== id))

  setActions(prev => [
    ...prev,
    {
      id: crypto.randomUUID(),
      contentId: id,
      reviewerId: 'moderator-1',
      action: 'reject',
      createdAt: new Date().toISOString(),
    },
  ])
}


}
