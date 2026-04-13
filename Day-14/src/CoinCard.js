export default function CoinCard({ coin }) {
  return (
    <>
      <div
        style={{
          border: "1px solid gray",
          padding: "15px",
          margin: "10px",
          width: "220px",
          borderRadius: "10px",
          textAlign: "center",
          boxShadow: "2px 2px 8px lightgray"
        }}
      >
        <img
          src={coin.image}
          alt={coin.name}
          width="80"
          height="80"
        />

        <h2>{coin.name}</h2>

        <h3>{coin.symbol.toUpperCase()}</h3>

        <p>Price: ${coin.current_price}</p>

        <p>Rank: {coin.market_cap_rank}</p>

        <p>
          24h Change: {coin.price_change_percentage_24h?.toFixed(2)}%
        </p>
      </div>
    </>
  );
}