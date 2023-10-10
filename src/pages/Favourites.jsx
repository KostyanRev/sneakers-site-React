import React, { useContext } from 'react';

import AppContext from '../context';
import Card from '../components/Card/Card';
import EmptyPage from '../components/EmptyPage';

const Favourites = () => {
  const { favourites, onAddToFavourite } = useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1 className="title-size">My bookmarks</h1>
      </div>

      {favourites.length > 0 ? (
        <div className="cardItems d-flex flex-wrap">
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
      ) : (
        <EmptyPage
          title={'No bookmarks :('}
          description={"You didn't bookmark anything"}
          image={'/img/smile-for-bookmarks.png'}
        />
      )}
    </div>
  );
};

export default Favourites;
