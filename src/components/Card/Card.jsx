import React, { useState, useContext } from 'react';
import ContentLoader from 'react-content-loader';

import AppContext from '../../context';

import styles from './Card.module.scss';

const Card = ({
  id,
  onFavourite,
  imageUrl,
  name,
  price,
  onPlus,
  favourited = false,
  loading = false,
}) => {
  const { isItemAdded } = useContext(AppContext);
  const [isFavourite, setIsFavourite] = useState(favourited);
  const itemObj = { id, parentId: id, imageUrl, name, price };

  const onClickPlus = () => {
    onPlus(itemObj);
  };

  const onClickFavourite = () => {
    onFavourite(itemObj);
    setIsFavourite(!isFavourite);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={158}
          height={190}
          viewBox="0 0 150 190"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="100" rx="3" ry="3" width="150" height="15" />
          <rect x="0" y="120" rx="3" ry="3" width="90" height="15" />
          <rect x="0" y="163" rx="8" ry="8" width="80" height="25" />
          <rect x="118" y="156" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.favourite}>
            {onFavourite && (
              <img
                onClick={onClickFavourite}
                src={
                  isFavourite
                    ? '/img/heart-liked.svg'
                    : '/img/heart-unliked.svg'
                }
                alt="Unliked"
              />
            )}
          </div>
          <img width={133} height={112} src={imageUrl} alt="sneakers" />
          <h5 className="">{name}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>{price} usd</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={
                  isItemAdded(id) ? '/img/btn-checked.svg' : '/img/btn-plus.svg'
                }
                alt="plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
