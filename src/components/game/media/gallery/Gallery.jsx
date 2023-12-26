"use client"
import { map } from 'lodash';
import styles from './gallery.module.scss'
import Slider from "react-slick";
import FullModal from '@/components/shared/fullModal/FullModal';
import { useState, useRef, useEffect } from 'react';


const Gallery = ({ screenshots }) => {

    const [show, setShow] = useState(false);
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);

    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    const onOpenClose = () => {
        setShow(!show)
    }

    const settings = {
        dots: true,
        lazyLoad: true,
        speed: 500,
        infinite: false,
    };


    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);

    return (
        <>
            <div className={styles.gallery}>
                <div className={styles.mobile}>
                    <Slider {...settings} slidesToShow={2} slidesToScroll={2} focusOnSelect={true} asNavFor={nav1} ref={slider => (sliderRef2 = slider)}>
                        {
                            map(screenshots, (screenshot) => (
                                <div key={screenshot.id} className={styles.image} onClick={onOpenClose}>
                                    <img src={process.env.NEXT_PUBLIC_SERVER_HOST + screenshot.attributes.url} alt="" />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
                <div className={styles.desk}>
                    <Slider {...settings} slidesToShow={3} slidesToScroll={3} focusOnSelect={true} asNavFor={nav1} ref={slider => (sliderRef2 = slider)}>
                        {
                            map(screenshots, (screenshot) => (
                                <div key={screenshot.id} className={styles.image} onClick={onOpenClose}>
                                    <img src={process.env.NEXT_PUBLIC_SERVER_HOST + screenshot.attributes.url} alt="" />
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
            <FullModal show={show} onClose={onOpenClose}>
                <div className={styles.carouselContainer}>
                    <Slider {...settings} slidesToScroll={1} slidesToShow={1} asNavFor={nav2} ref={slider => (sliderRef1 = slider)}>
                        {
                            map(screenshots, (screenshot) => (
                                <div key={screenshot.id} className={styles.image} >
                                    <img src={process.env.NEXT_PUBLIC_SERVER_HOST + screenshot.attributes.url} alt="" />
                                </div>
                            ))
                        }
                    </Slider>

                </div>
            </FullModal>
        </>
    )
}

export default Gallery