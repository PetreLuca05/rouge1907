export default function MenuItem({ name, price }) {
  return (
    <div className="menu-item">
      <h3 className="menu-item-name">{name}</h3>
      <p className="menu-item-price">{price}</p>
    </div>
  );
}
