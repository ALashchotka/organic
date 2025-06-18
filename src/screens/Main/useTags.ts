import { useMemo, useState } from 'react';
import { useQuery } from '@realm/react';
import uniq from 'lodash.uniq';

import { Product } from '@organic/models/Product';

export default function useTags() {
  const products = useQuery(Product);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const tags = useMemo<string[]>(
    () => uniq(products.reduce((acc: string[], item) => [...acc, ...item.tags], [])).splice(0, 10),
    [products],
  );

  const toggleTag = (tag: string) => {
    setSelectedTags((prevState) =>
      prevState.find((item) => item === tag)
        ? prevState.filter((item) => item !== tag)
        : [...prevState, tag],
    );
  };

  return { tags, selectedTags, toggleTag };
}
