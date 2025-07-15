import React, { useEffect, useState } from 'react';

function InfiniteScroll() {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    loadMore();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 10 >=
      document.documentElement.offsetHeight
    ) {
      loadMore();
    }
  };

  const loadMore = () => {
    if (!hasMore) return;
    const newItems = [];
    for (let i = items.length + 1; i <= items.length + 10; i++) {
      newItems.push(`Item ${i}`);
    }
    setItems(prev => [...prev, ...newItems]);
    if (items.length + newItems.length >= 100) {
      setHasMore(false);
    }
  };

  return (
    <div>
   
      <ul>
        {items.map((item, index) => (
          <li key={index} style={{ padding: "10px", borderBottom: "1px solid #ddd" }}>
            {item}
          </li>
        ))}
      </ul>
      {!hasMore && <p>🎉 You have reached the end!</p>}
    </div>
  );
}

export default InfiniteScroll;
