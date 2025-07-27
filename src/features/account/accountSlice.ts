import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { InsurancePlan } from '../../types/plan';

interface AccountState {
  userName: string;
  activePlan: InsurancePlan | null;
}

const initialState: AccountState = {
  userName: 'Sarah',
  activePlan: {
    id: '1',
    name: 'Cigna Open Access Plus',
    type: 'PPO',
    carrier: 'Cigna',
    memberId: 'U12345678',
    groupNumber: 'GRP123456',
    deductible: {
      individual: 3000,
      family: 6000,
      used: 1250,
    },
    outOfPocketMax: {
      individual: 6500,
      family: 13000,
      reached: 1800,
    },
  },
};

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    setActivePlan: (state, action: PayloadAction<InsurancePlan>) => {
      state.activePlan = action.payload;
    },
    updateUserName: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
  },
});

export const { setActivePlan, updateUserName } = accountSlice.actions;
export default accountSlice.reducer;
