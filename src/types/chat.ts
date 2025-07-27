export interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  attachments?: Array<{
    type: 'image' | 'document';
    url: string;
  }>;
}
