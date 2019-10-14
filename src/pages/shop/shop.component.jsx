import React,{useEffect,useState} from 'react'
import './shop.scss'
import {Route} from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/collections.overview.component'
import CollectionPage from '../collection/collection.component'
import{firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import { updateCollections } from '../../redux/shop/shop.actions'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner =WithSpinner(CollectionPage);

const ShopPage =({match,updateCollections})=> {
const [loading, setLoading] = useState(true);
    useEffect(() => {

    const collectionRef = firestore.collection("collections");

    /* fetch("https://firestore.googleapis.com/v1/projects/clothingstore-db-74c09/databases/(default)/documents/collections")
    .then(response=>response.json())
    .then(collections=>console.log(collections)) */
    collectionRef.get().then(snapshot=>{;
      const collectionsMap=  convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setLoading(false);
    })
    //name of our collection inside firestore
        
    
    }
    )
        return (
            <div className='shop-page'>
        <Route exact path={`${match.path}`} render={(props)=><CollectionsOverviewWithSpinner isLoading={loading} {...props}/> }/>
        <Route path ={`${match.path}/:collectionId`} render ={(props)=><CollectionPageWithSpinner isLoading={loading} {...props} />} />
</div>)
    
}


const mapDispatchToProps = dispatch=> ({
    updateCollections: collectionsMap=>
    dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopPage)