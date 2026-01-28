import type { ReviewAction } from '../../types/review'

interface Props {
  actions: ReviewAction[]
}

export function ReviewHistory({ actions }: Props) {
  if (actions.length === 0) {
    return <p>No review actions yet.</p>
  }

  return (
    <section>
      <h2>Review History</h2>

      <ul>
        {actions.map(action => (
          <li key={action.id}>
            <strong>{action.action.toUpperCase()}</strong>
            {' '}on content {action.contentId}
            {' '}at {new Date(action.createdAt).toLocaleTimeString()}
          </li> 
        ))}
      </ul>
    </section>
  )
}
