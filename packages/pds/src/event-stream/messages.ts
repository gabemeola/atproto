export type CreateNotification = NotificationInfo & {
  type: 'create_notification'
}

export type NotificationInfo = {
  userDid: string
  author: string
  recordUri: string
  recordCid: string
  reason: NotificationReason
  reasonSubject?: string
}

export type NotificationReason =
  | 'vote'
  | 'assertion'
  | 'repost'
  | 'follow'
  | 'invite'
  | 'mention'
  | 'reply'

export type DeleteNotifications = {
  type: 'delete_notifications'
  recordUri: string
}

export type Message = CreateNotification | DeleteNotifications

export const createNotification = (
  notif: NotificationInfo,
): CreateNotification => ({
  type: 'create_notification',
  ...notif,
})

export const deleteNotifications = (
  recordUri: string,
): DeleteNotifications => ({
  type: 'delete_notifications',
  recordUri,
})
