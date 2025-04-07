import "./Konum.css";

const Konum = () => {
  return (
    <section className="konum">
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d754.7124363721686!2d29.310564128562547!3d40.83126389820354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadc324ffcf869%3A0x244e36dfd897d8fb!2sYayla%2C%20Fevzi%20%C3%87akmak%20Cd.%20No%3A%2050%2C%2034944%20Tuzla%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1735402022387!5m2!1str!2str"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div>
        <p>
          Marmaray'a yakın ama "inen bize gelsin çok kazanalım" açgözlülüğüyle
          marmarayın hemen çıkışına kurulacak kadar da yüzsüz olmadığımızdan
          ötürü marmaraya yürüme mesafesinde.{" "}
        </p>
        <p>"Meryem Ulusoy Diş Sağlığı Merkezi"nin karşısında</p>
        <p>"Uçan Ticareti'in ve Ezgi Kuyumculuk"un bitişiğinde</p>
      </div>
    </section>
  );
};

export default Konum;
