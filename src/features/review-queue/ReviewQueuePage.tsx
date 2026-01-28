import { useEffect, useState } from 'react'
import type { ContentItem } from '../../types/content'
import { getContentQueue } from '../../services/contentService'

export function ReviewQueuePage() {
  const [items, setItems] = useState<ContentItem[]>([]) // moderation queue

  useEffect(() => {
    getContentQueue('pending').then(setItems)
  }, [])

  return (
    <main>
      <h1>Review Queue</h1>

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
    </main>
  )

  function handleApprove(id: string) {
  setItems(prev =>
    prev.map(item =>
      item.id === id ? { ...item, status: 'approved' } : item
    )
  )
}

function handleReject(id: string) {
  setItems(prev =>
    prev.map(item =>
      item.id === id ? { ...item, status: 'rejected' } : item
    )
  )
}

}

