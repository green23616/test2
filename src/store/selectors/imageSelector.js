import { selector } from 'recoil';
import { searchState } from '../atoms/searchState';
import { pageState } from '../atoms/pageState';

export const imageData = selector({
  key: 'imageData',
  get: async ({ get }) => {
    const searchValue = get(searchState);
    const pageValue = get(pageState);
  },
});
