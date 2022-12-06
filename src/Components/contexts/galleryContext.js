import { element } from 'prop-types';
import { useContext, useState } from 'react';
import { createContext } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';

const GalleryContext = createContext();
const fakeData = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1670161599938-3c143c778231?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80',
    isFavorite: false,
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1669926468703-3bd11bad8609?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    isFavorite: false,
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1670140274562-2496ccaa5271?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    isFavorite: false,
  },
  {
    id: 4,
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Riley_Steele_at_AVN_Adult_Entertainment_Expo_2012_1.jpg/800px-Riley_Steele_at_AVN_Adult_Entertainment_Expo_2012_1.jpg',
    isFavorite: false,
  },
  {
    id: 5,
    url: 'https://pbs.twimg.com/media/EjRCdI1XYAAlydM.jpg:large',
    isFavorite: false,
  },
  {
    id: 6,
    url: 'http://beta.ems.ladbiblegroup.com/s3/content/acc92e7460de5ab3b895af300548b517.png',
    isFavorite: false,
  },
];
function GalleryProvider(props) {
    const {storedValue, setValue} = useLocalStorage('photo', fakeData)
    const {storedValue : storedCart, setValue : setStoredCart} = useLocalStorage('cartItem', [])
  const [photos, setPhotos] = useState(storedValue);
  const [cartItems, setCartItems] = useState(storedCart);
  const [favoriteList, setFavoriteList] = useState([]);
  const toggleFavorite = (photoId) => {
    const updatedArray = photos.map((photo) => {
      if (photo.id === photoId)
        return { ...photo, isFavorite: !photo.isFavorite };
      return photo;
    });
    setPhotos(updatedArray);
    // * Chức năng toggleFavorite, nếu hình đó được click vào có photoId,
    // * ta sẽ tạo ra 1 updated Array bằng cách map lại data
    // * Duyệt map lại data 1 lần nữa, nếu photo.id = photoId thì trả ra cái photo đó, kèm theo isFavorite toggle !isFavorite
    // * Cuối cùng trả ra photo đó và setPhotos array mới
    setValue(updatedArray)

  };
  const addToCart = (newItem) => {
    setCartItems((prevItems) => {
      // Giải thích prevItem là những item trước đó
      // * some() hàm dùng để kiểm tra xem phần tử param có thỏa điều kiện hay không ?
      // [2, 5, 8, 1, 4].some(x => x > 10);  -> false
      const isExisted = prevItems.some((item) => item.id === newItem.id);
      // * Vậy hàm này mình sẽ hiểu là những phần tử trước đó có item id trùng với new item id không
      if (isExisted) {
        setStoredCart([...prevItems])
        return [...prevItems]
      } ;
      // * Nếu trùng thì trả ra cái phần tử giống trước đó chứ không add vào
      setStoredCart([...prevItems, newItem])
      return [...prevItems, newItem];
      // còn không thì add thêm newItems
      
    });
    // * Chỗ này phải dùng previousItems để lấy phần tử trước đó rồi mới thêm item mới vào
  };
  const deleteCartItem = (itemId) => {
    // const newCart = cartItems.filter((item) => item.id !== itemId);
    // ? Tại sao là !== itemId
    // * Vì mình sẽ lọc ra chỉ còn các sản phẩm có id khác với id ta truyền vào
    // Ví dụ filter với id ta truyền vào là 1, thì ta giữ lại 2 ,3 ,4 ,5 và loại id 1 ra
    // setCartItems(newCart);

    // ! Bài sửa của thầy
    setCartItems((prevItems) => {
        const result = prevItems.filter((prevItems) => prevItems.id !== itemId)
        setStoredCart(result)
        return result;
    });
  };
  const value = {
    photos,
    setPhotos,
    cartItems,
    setCartItems,
    favoriteList,
    setFavoriteList,
    toggleFavorite,
    addToCart,
    deleteCartItem,
  };
  return (
    <GalleryContext.Provider {...props} value={value}></GalleryContext.Provider>
  );
}
const useGallery = () => {
  const context = useContext(GalleryContext);
  if (typeof context === 'undefined')
    throw new Error('useGallery must be used within a GalleryProvider');
  return context;
};
export { GalleryProvider, useGallery };
