import React from 'react'

import SHOP_DATA from './shop-data.js'

import CollectionPreview from '../../components/collection-preview/collection-preview'

const ShopPage = (props) => {
  props = { collections: SHOP_DATA }

  const { collections } = props
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )
}

export default ShopPage
