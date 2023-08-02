import create from 'zustand';
import { _notifications } from 'src/_mock/arrays';
interface Store {
  totalUnRead: number;
  onClickBadge: VoidFunction;
  initialInputValue : string;
  count : number;
  countUp : VoidFunction;
}
export const useStore = create<Store>((set) => ({
  totalUnRead: _notifications.filter((item: any) => item.isUnRead === true).length,
  onClickBadge: () => set({ totalUnRead: 0 }),
  initialInputValue : "",
  changeInputValue : (value : any) => set({initialInputValue: value }),
  count : 0,
  countUp : () => set((state : any) =>   ({count : state.count + 1}))
}));
