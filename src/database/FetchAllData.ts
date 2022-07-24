import React, {useEffect} from 'react';
import {collection, onSnapshot} from 'firebase/firestore';
import {db} from '../database/Firebase';
import Food from '../interfaces/Food';
import AddOn from '../interfaces/AddOn';
import {UseAddOnList} from '../zustand/AddOnList';
import {UseFoodStore} from '../zustand/FoodMenuList';
import {UseCategoriesStore} from '../zustand/Categories';
import Category from '../interfaces/Category';
import {UseFavoritesStore} from '../zustand/FavoritesList';

const FetchAllData = () => {
  const addOnList = UseAddOnList();
  const foodStore = UseFoodStore();
  const categoriesStore = UseCategoriesStore();
  const favoritesStore = UseFavoritesStore();

  useEffect(() => {
    const FetchCategories = async () => {
      try {
        const colRef = collection(db, 'Food_Categories');
        const unsub = onSnapshot(colRef, snapshot => {
          categoriesStore.EmptyCategories();
          snapshot.docs.map(doc => {
            let category: Category = {
              id: doc.id,
              name: doc.data().name,
              image: doc.data().image,
              layout: doc.data().layout
            };
            categoriesStore.AddCategory(category);
          });
        });
        return unsub;
      } catch (err) {
        console.log(err);
      }
    };

    FetchCategories();

    const FetchMenu = async () => {
      try {
        const colRef = collection(db, 'Food_menu');
        const unsub = onSnapshot(colRef, snapshot => {
          foodStore.EmptyItems();
          snapshot.docs.map(doc => {
            let item: Food = {
              id: doc.id,
              title: doc.data().title,
              subtitle: doc.data().subtitle,
              image: doc.data().image,
              price: doc.data().price,
              category: doc.data().category,
              addonType: doc.data().addonType,
            };

            foodStore.AddFoodItem(item);
          });
        });
        return unsub;
      } catch (err) {
        console.log(err);
      }
    };

    const FetchFavorites = async () => {
      try {
        const colRef = collection(db, 'Favorites');
        const unsub = onSnapshot(colRef, snapshot => {
          favoritesStore.EmptyItems();
          snapshot.docs.map(doc => {
            let item: Food = {
              id: doc.id,
              title: doc.data().title,
              subtitle: doc.data().subtitle,
              image: doc.data().image,
              price: doc.data().price,
              category: doc.data().category,
              addonType: doc.data().addonType,
            };

            favoritesStore.AddFoodItem(item);
          });
        });
        return unsub;
      } catch (err) {
        console.log(err);
      }
    };

    const FetchAddOnList = async () => {
      try {
        const colRef = collection(db, 'Add_On');
        const unsub = onSnapshot(colRef, snapshot => {
          addOnList.EmptyItems();
          snapshot.docs.map(doc => {
            let item: AddOn = {
              id: doc.id,
              name: doc.data().name,
              price: doc.data().price,
              category: doc.data().category,
            };

            addOnList.AddItem(item);
          });
        });
        return unsub;
      } catch (err) {
        console.log(err);
      }
    };
    FetchAddOnList();
    FetchMenu();
    FetchFavorites();
  }, []);
};

export default FetchAllData;
