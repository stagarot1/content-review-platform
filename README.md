Project Overview/Sara's Notes:
An internal web dashboard for reviewing, modeling, and auditing user-generated content with role-based workflows and accessibility-first design. 

ROLES:
1. Reviewer - reviewes assigned content
2. Moderator - approves/rejects and escalates
3. Admin - manages users, rules, and visibility

CORE FEATURES:
1. Review Queue
- paginated list 
- status filters (pending/approved/rejected)
- bulk actions

2. Content Detail View
- content preview
- metadata (author/date/flags)
- review actions
- comment history

3. Audit Log
- who did what, when
- read-only
- filterable

4. Role-based Access Control
- ui + backend reinforcements
- clear permissions boundaries

FOLDER STRUCTRUCTURE:
src/
    app/
    features/
        review-queue/
        content-detail/
        audit-log/
        user-management/
    components
components
    hooks/
    services/
    auth/
    styles/
    utils/
    types/

DATA MODEL:
ContentItem{
    id
    type
    visibleText
    status: 'pending' | 'approved' | 'rejected'
    flags: string[]
    createdAt
}
ReviewAction{
    id
    contentId
    action
    reviewerId
    comment
    timestamp
}