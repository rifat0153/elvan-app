import create from 'zustand';
type State = {
  item: item;
  items: item[];
  AddOneItem: (newItem: item) => void;
  AddItem: (newItem: item) => void;
  RemoveItem: (item: item) => void;
};

export type item = {
  name?: string;
  price?: number;
};

const remove = (items: item[], itm: item) =>
  items.filter(item => item.name != itm.name);

export const UseAddOnStore = create<State>(set => ({
  item: {} as item,
  items: [] as item[],

  AddOneItem(newItem) {
    set(state => ({
      ...state,
      item: newItem,
    }));
  },
  AddItem(newItem: item) {
    set(state => ({
      items: [...state.items, newItem],
    }));
  },

  RemoveItem(item: item) {
    set(state => ({
      ...state,
      items: remove(state.items, item),
    }));
  },
}));
