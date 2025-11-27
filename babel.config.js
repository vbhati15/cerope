module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    // NativeWind babel plugin removed for web compatibility
    // The app doesn't use className, so NativeWind isn't needed
    plugins: [],
  };
};
