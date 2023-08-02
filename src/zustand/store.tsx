import create from 'zustand';
import { _notifications } from 'src/_mock/arrays';
interface Store {
  totalUnRead: number;
  onClickBadge: VoidFunction;
}
export const useStore = create<Store>((set) => ({
  totalUnRead: _notifications.filter((item: any) => item.isUnRead === true).length,
  onClickBadge: () => set({ totalUnRead: 0 }),
}));
