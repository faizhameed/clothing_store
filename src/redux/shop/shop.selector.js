import {createSelector} from 'reselect';
import { objectExpression } from '@babel/types';
const selectShop =state=>state.shop;



export const selectShopCollections=createSelector(
    [selectShop],
    shop=>shop.collections
)
export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections=>Object.keys(collections).map(key=>collections[key])
)

export const selectCollection = collectionUrlParam=> 
createSelector(
    [selectShopCollections],
    collections=>collections[collectionUrlParam]
) 