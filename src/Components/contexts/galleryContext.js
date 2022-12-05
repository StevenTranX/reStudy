import { useContext, useState } from "react";
import { createContext } from "react";

const GalleryContext = createContext()
const fakeData = [
    {
        id : 1,
        url : 'https://images.unsplash.com/photo-1670161599938-3c143c778231?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80',
        isFavorite : false,
    },
    {
        id : 2,
        url : 'https://images.unsplash.com/photo-1669926468703-3bd11bad8609?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        isFavorite : false,
    },
    {
        id : 3,
        url : 'https://images.unsplash.com/photo-1670140274562-2496ccaa5271?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        isFavorite : false,
    },
    {
        id : 4,
        url : 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Riley_Steele_at_AVN_Adult_Entertainment_Expo_2012_1.jpg/800px-Riley_Steele_at_AVN_Adult_Entertainment_Expo_2012_1.jpg',
        isFavorite : false,
    },
    {
        id : 5,
        url : 'https://pbs.twimg.com/media/EjRCdI1XYAAlydM.jpg:large',
        isFavorite : false,
    },
    {
        id : 6,
        url : 'http://beta.ems.ladbiblegroup.com/s3/content/acc92e7460de5ab3b895af300548b517.png',
        isFavorite : false,
    },
]
function GalleryProvider (props) {
    const [photos, setPhotos] = useState(fakeData)
    const [cartItems, setCartItems] = useState([])
    const [favoriteList, setFavoriteList] = useState([]);
    
    const value = { photos, setPhotos, cartItems, setCartItems, favoriteList, setFavoriteList}
    return (
        <GalleryContext.Provider {...props} value = {value}></GalleryContext.Provider>
    )
}
const useGallery = () => {
    const context = useContext(GalleryContext)
    if (typeof context === 'undefined') throw new Error ('useGallery must be used within a GalleryProvider')
    return context
}
export {GalleryProvider , useGallery}