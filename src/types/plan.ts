export interface InsurancePlan {
  id: string;
  name: string;
  type: 'PPO' | 'HMO' | 'EPO' | 'POS';
  carrier: string;
  memberId: string;
  groupNumber: string;
  deductible: {
    individual: number;
    family: number;
    used: number;
  };
  outOfPocketMax: {
    individual: number;
    family: number;
    reached: number;
  };
}
