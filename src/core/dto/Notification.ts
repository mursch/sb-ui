import {NotificationType} from './NotificationType';

export interface Notification {
  type: NotificationType;
  data?: any;
}
