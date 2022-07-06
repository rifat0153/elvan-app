import create from 'zustand';
import Food from '../interfaces/Food';

type State = {
  totalPrice: number;
  cartItems: CartItem[];

  AddCartItem: (newCartItem: CartItem) => void;
  IncreaseItemCount: (id: string, text: number) => void;
};

export type CartItem = {
  itemCount: number;
  food: Food;
};

const increaseQuantity = (cartItems: CartItem[], id: string, text: number) =>
  cartItems.map(item => ({
    ...item,
    itemCount: item.food.id == id ? item.itemCount + text : item.itemCount,
  }));

export const UseCartStore = create<State>(set => ({
  totalPrice: 0,
  cartItems: [] as CartItem[],

  AddCartItem(newCartItem: CartItem) {
    set(state => ({
      cartItems: [...state.cartItems, newCartItem],
    }));
  },

  IncreaseItemCount(id, text) {
    set(state => ({
      ...state,
      cartItems: increaseQuantity(state.cartItems, id, text),
    }));
  },
}));
