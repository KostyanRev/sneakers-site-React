import { useState } from 'react';
import styles from './Card.module.scss';

const Card = ({
  id,
  onFavourite,
  imageUrl,
  name,
  price,
  onPlus,
  favourited,
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavourite, setIsFavourite] = useState(favourited);

  const onClickPlus = () => {
    onPlus({ imageUrl, name, price });
    setIsAdded(!isAdded);
  };

  const onClickFavourite = () => {
    onFavourite({ id, imageUrl, name, price });
    setIsFavourite(!isFavourite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favourite}>
        <img
          onClick={onClickFavourite}
          src={isFavourite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'}
          alt="Unliked"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneakers" />
      <h5 className="">{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{price} usd</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'}
          alt="plus"
        />
      </div>
    </div>
  );
};

export default Card;
