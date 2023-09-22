import { useState } from 'react';
import styles from './Card.module.scss';

const Card = ({ onClickFavourite, imageUrl, title, price, onPlus }) => {
  const [isAdded, setIsAdded] = useState(false);

  const onClickPlus = () => {
    onPlus({ imageUrl, title, price });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favourite} onClick={onClickFavourite}>
        <img src="/img/heart-unliked.svg" alt="Unliked" />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneakers" />
      <h5 className="">{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Price:</span>
          <b>{price}</b>
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
