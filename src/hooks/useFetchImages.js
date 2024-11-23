import { fetchImages } from '@/apis/images';
import { useQuery } from '@tanstack/react-query';

const useFetchImages = (searchValue, pageValue) => {
  return useQuery({
    queryKey: ['images', searchValue, pageValue],
    queryFn: () =>
      // API분리
      fetchImages(searchValue, pageValue),
  });
};

export default useFetchImages;
