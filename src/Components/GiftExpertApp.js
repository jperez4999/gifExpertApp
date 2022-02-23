import { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['One Piece']);

  return (
    <>
      <h2>Gift Expert App</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category, i) => (
          <GifGrid key={category + i} category={category} />
        ))}
      </ol>
    </>
  );
};
