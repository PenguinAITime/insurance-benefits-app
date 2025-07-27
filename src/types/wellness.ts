export interface WellnessRecommendation {
  id: string;
  title: string;
  description: string;
  category: 'preventive' | 'screening' | 'vaccination' | 'lifestyle';
  completed: boolean;
  dueDate?: Date;
  searchSpecialty?: string;
}
