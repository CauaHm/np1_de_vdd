import styles from "./styles.module.css";
import strogonoff from "../../assets/imgs/Strogonoff.jpg";
import cocaCola from "../../assets/imgs/cocaCola.jpg";
import parmegiana from "../../assets/imgs/parmegiana.jpg";

function Portifolio() {
  const strogonoffImg = {
    backgroundImage: `url(${strogonoff})`,
  };

  const cocaColaImg = {
    backgroundImage: `url(${cocaCola})`,
  };

  const parmegianaImg = {
    backgroundImage: `url(${parmegiana})`,
  };

  return (
      <main className={styles.main}>
        <div className={styles.div}>
          <div className={styles.img} style={strogonoffImg}></div>
          <div className={styles.info}>
            <h2>Strogonoff</h2>
            <p>
              Strogonoff é aquele clássico que não tem erro: tirinhas de carne ou
              frango num molho cremoso que, com o nosso jeitinho e um toque de
              catchup, ficou ainda melhor. É a comida perfeita pra abraçar o
              estômago, servida com arroz branquinho e uma montanha de batata
              palha.
            </p>
          </div>
        </div>
        <div className={styles.div}>
          <div className={styles.info}>
            <h2>Coca Cola</h2>
            <p>
              A Coca-Cola é aquele sabor que ninguém consegue copiar. É a pedida certa pra juntar a galera, seja na pizza ou no churrasco. Trincando de gelada, com gelo e limão, é simplesmente o sinônimo mundial dos bons momentos.
            </p>
          </div>
          <div className={styles.img} style={cocaColaImg}></div>
        </div>
        <div className={styles.div}>
          <div className={styles.img} style={parmegianaImg}></div>
          <div className={styles.info}>
            <h2>Parmegiana</h2>
            <p>
              Parmegiana é felicidade pura no prato! Um bife crocante, afogado no molho de tomate e com aquela camada absurda de queijo borbulhando por cima. Acompanhado do trio sagrado, arroz e batata frita, é o prato oficial do "hoje eu mereço".
            </p>
          </div>
        </div>
      </main>
  );
}
export default Portifolio;
