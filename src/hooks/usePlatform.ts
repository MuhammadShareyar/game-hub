import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data } = usePlatforms();
  const platform = data?.results.find((pl) => pl.id === id);

  return platform;
};

export default usePlatform;
