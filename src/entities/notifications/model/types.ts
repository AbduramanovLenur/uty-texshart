export interface INotificationCard {
  id: string | number;
  label: string;
  description: string;
  record: string;
  timestamp: string;
};

export interface INotification {
  title: string;
  description: string;
  applicationId: string;
  route: string;
  time: string;
  read: boolean;
}

export interface INotificationGroup {
  date: string;
  items: INotification[];
}
