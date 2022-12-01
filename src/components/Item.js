import React, { useState } from 'react';

function Item({ name, category }) {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn((isOn) => !isOn);
  }

  const itemClass = isOn ? 'in-cart' : '';
  const inCart = isOn ? 'Remove From Cart' : 'Add to Cart';

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className='category'>{category}</span>
      <button className='add' onClick={handleClick}>
        {inCart}
      </button>
    </li>
  );
}

export default Item;
