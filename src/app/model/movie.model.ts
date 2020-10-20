export interface Movie {
  id?: number;
  title: string;
  year: number;
  runtime?: number;
  plot?: string;
  poster: string;
  rating?: number;
  onlineId?: number;
  seen?: boolean;
  status?: string;
}
