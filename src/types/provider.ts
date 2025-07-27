export interface Provider {
  id: string;
  name: string;
  specialty: string;
  address: string;
  distance: number;
  phone: string;
  isInNetwork: boolean;
  isAcceptingNewPatients: boolean;
  languages: string[];
  photo?: string;
  rating?: number;
  hours?: {
    [key: string]: string;
  };
  website?: string;
}
