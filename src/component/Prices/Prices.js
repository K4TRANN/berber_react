import "./Prices.css";

const Prices = () => {
  return (
    <section className="prices">
      <h1 className="heading">
        ÜCRETLER <span>PRICES</span>{" "}
      </h1>
      <div className="pricesContainer">
        <div className="manList">
          <div className="manHeading">
            <h3>Erkek Tıraşı</h3>
          </div>
          <div className="manBottom">
            <table>
              <tr>
                <td>Saç + Sakal</td>
                <td>₺300</td>
              </tr>
              <tr>
                <td>Saç</td>
                <td>₺280</td>
              </tr>
              <tr>
                <td>Sakal</td>
                <td>₺150</td>
              </tr>
              <tr>
                <td>Ağda</td>
                <td>₺100</td>
              </tr>
              <tr>
                <td>Yıkama</td>
                <td>₺30</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
