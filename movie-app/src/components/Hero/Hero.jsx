import style from './Hero.module.css';

function Hero() {
    return (
        <div className={style.container}>
            <section className={style.hero}>
                <div className={style.hero__left}>
                    <h2 className={style.hero__title}>Spiderman</h2>
                    <h3 className={style.hero__genre}>
                        Genre: Thriller, Drama, Romance</h3>
                    <p className={style.hero__description}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam dolores, est inventore numquam labore, dolore illum aspernatur cum nemo laudantium voluptate quo. Amet earum aperiam ab est ullam perferendis ipsam.</p>
                    <button className={style.hero__button}>Watch</button>
                </div>
                <div className={style.hero__right}>
                    <img className={style.hero__image} src="https://picsum.photos/536/354" alt="placeholder" />
                </div>
            </section>
        </div>
    );
}

export default Hero;