export const mapTrendingData = (trendingData) => {
  let trendingCoins = [];
  if (trendingData) {
    const coins = trendingData?.coins;
    trendingCoins = coins?.map((coin) => {
      const { id, name, symbol, small } = coin.item;
      const { market_cap, total_volume, price } = coin.item.data;
      return {
        id,
        name,
        symbol,
        market_cap,
        total_volume,
        current_price: price,
        image: small,
        price_change_24h: coin.item?.data?.price_change_percentage_24h?.usd,
      };
    });
  }
  return trendingCoins;
};
