import React, { useEffect } from "react";
import Image from "next/image";
//Redux stuff
import { navBarActions } from "../../logica/reduxStore/slices/interfazGrafica/navBar";
import { useAppDispatch } from "../../logica/reduxStore/customizedHooks";
//</>
//Swiper stuff
import { Swiper, SwiperSlide } from "swiper/react";
//</>
//Css and images stuff
import styles from "./Homepage.module.css";
import abstractPinkBackground from "../../public/abstractPinkBackground.jpg";
//</>
//Components
import ContenedorDeTarjetasDeProductos from "../UI/contenedorDeTarjetasDeProductos/ContenedorDeTarjetasDeProductos";
import { A11y, Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import TarjetaDeCategoria from "../UI/tarjetasMostradorasDeCategorias/TarjetaDeCategoria";
//Carrousel images
import image_1 from "../../public/homepage/carrousel_1/1.jpg";
import image_3 from "../../public/homepage/carrousel_1/3.jpg";
//</>

import { categorias } from "../../modelosPreliminares/preliminares";

function Homepage() {
    //Hooks calling    
    const dispatcher = useAppDispatch();
    useEffect(() => {
        dispatcher(navBarActions.indicarQueEstaEnZonaClara());
        dispatcher(navBarActions.aplicarEstiloDeNoExpandida());
        
    }, []);
    //</>
    //Intersection obserser API instance for putting the navbar dark when reaching a dark zone.
    // useEffect(() => {
    //     //Intersection observer. 
    //     const intersectionObserverOptions = {
    //         root: null,
    //         rootMargin: "50px",
    //         threshold: 1.0
    //     };
    //     let observer = new IntersectionObserver((entries, observer) => {
    //         if (entries) {

    //             entries[0].isIntersecting === false ? dispatcher(navBarActions.indicarQueEstaEnZonaOscura()) : dispatcher(navBarActions.indicarQueEstaEnZonaClara());
    //         }
    //     }, intersectionObserverOptions);
    //     let target = document.getElementById("intersectionObserver")!;
    //     observer.observe(target); //Consider binding the div to a useRef returned object, and add it to the intersector.
    //     //Selectingth the carrousel 1
    //     return () => { observer.unobserve(target) }
    // }, []);
    //</>
    
    return (
        <section>
            <section className={`${styles.header}`}>
                <Image src={abstractPinkBackground} alt="Fondo" style={{ "zIndex": -1 }} priority fill></Image>
                <div className={`${styles.blureador}`}>
                    <Swiper
                        modules={[Navigation, A11y, Autoplay, Pagination, EffectFade]}
                        autoplay={{ delay: 5000 }}
                        speed={1000}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => {
                            swiper.$el.children()[1].classList.add(styles.prevButtonStyled);
                            swiper.$el.children()[2].classList.add(styles.nextButtonStyled);}
                        }
                        effect={"fade"}
                    >
                        <SwiperSlide>
                            <div style={{ "width": "100%", "height": "540px", position: "relative" }}>
                                {/* Important: To keep an adequate aspect ratio, consider using object-fit: contain or cover in the image component,
                                 and overflow=hidden in the parent element */}
                                <Image style={{ "zIndex": -1 }} src={image_1} alt="Imagen" fill priority></Image>
                                <div>
                                    <div style={{ "height": "200px", "width": "100%" }}>

                                    </div>
                                    <div className="carousel-caption d-md-block">
                                        <h5>2x1 e</h5>
                                        <p>Aprovechá el descuento</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div style={{ "width": "100%", "height": "540px", position: "relative" }}>
                                <Image style={{ "zIndex": -1 }} src={image_3} alt="Imagen" fill priority></Image>
                                <div>
                                    <div style={{ "height": "200px", "width": "100%" }}>

                                    </div>
                                    <div className="carousel-caption d-md-block">
                                        <h5>¡Vamos a la feria!</h5>
                                        <p>Estamos en la feria ba bla</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div id="intersectionObserver"></div>
            </section>
            <section className={styles.anuncios}>
                <div className="container-sm mt-5 mb-3" id={styles.categorias}>
                    <TarjetaDeCategoria nombreDeCategoria={categorias[0].nombre} imagenes={[{url: categorias[0].imagenes[0], alt: "Catuchera 1"}, {url: categorias[0].imagenes[1], alt: "Cartuchera 2"}]}/>
                    <TarjetaDeCategoria nombreDeCategoria="Cuadernos" imagenes={[{url: categorias[0].imagenes[0], alt: "Catuchera 1"}, {url: categorias[0].imagenes[1], alt: "Cartuchera 2"}]} />
                </div>
                <div id="promociones" className="container-sm">
                
                    <h1 className="text-center">
                        BEST-SELLERS
                    </h1>
                    <ContenedorDeTarjetasDeProductos></ContenedorDeTarjetasDeProductos>
                </div>
                <div id="instagram" className="container-sm">
                    <h1>
                        Tengo posts de Instagram
                    </h1>
                </div>
            </section>
        </section>
    );
}
export default Homepage