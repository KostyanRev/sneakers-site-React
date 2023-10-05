import React, { useContext } from 'react';

import AppContext from '../context';
import Card from '../components/Card/Card';

const Favourites = () => {
  const { favourites, onAddToFavourite } = useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My bookmarks</h1>
      </div>

      <div className="d-flex flex-wrap">
        {favourites.map((item, idx) => {
          return (
            <Card
              key={idx}
              favourited={true}
              onFavourite={onAddToFavourite}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favourites;
