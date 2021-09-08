import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { CardBox, Container } from "../../Styles";
import { Image } from "react-bootstrap";

export default function CarouselLayout() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const CardVariants = {
    beforeHover: {},
    onHover: {
      scale: 1.1,
    },
  };

  return (
    <div>
      <Container initial={{ y: -700 }} animate={{ y: 0 }}>
        <Carousel
          className="border mt-5"
          activeIndex={index}
          onSelect={handleSelect}
        >
          <Carousel.Item style={{ height: "300px" }}>
            <img
              className="d-block w-100"
              src="https://png.pngtree.com/background/20210711/original/pngtree-nut-food-simple-black-banner-picture-image_1070844.jpg"
              alt="First slide"
            />
            <Carousel.Caption style={{ position: "absolute", top: "0" }}>
              <h2 style={{ color: "#A0522D", marginLeft: "50px" }}>
                TOPLAM <b>100 TL</b> LİK KURUYEMİŞ ALIŞVERİŞİNE <b>JAVA</b> TÜRK
                KAHVESİ HEDİYE
              </h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "300px" }}>
            <img
              className="d-block w-100"
              src="https://png.pngtree.com/background/20210711/original/pngtree-fresh-fruit-and-vegetable-mall-poster-psd-picture-image_1126270.jpg"
              alt="Second slide"
            />

            <Carousel.Caption style={{ position: "absolute", top: "30px" }}>
              <h2 style={{ color: "green" }}>
                BİZDE BİR GÜN DEĞİL HER GÜN MANAV GÜNÜ !
              </h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "300px" }}>
            <img
              className="d-block w-100"
              src="https://www.tadacaksin.com/images/kampanya/banner-yeni-01-resimJS-10.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        <CardBox
          style={{
            backgroundImage: `url("https://res.cloudinary.com/ahmettanrikulu/image/upload/v1629632698/eCommerce/tereyag_ukrtlq.jpg")`,
            cursor: "pointer",
            width: "400px",
            height: "250px",
            display: "inline-block",
            marginTop: "150px",
            overflow: "hidden",
          }}
          className=""
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        >
          <h4
            style={{
              color: "white",
              marginTop: "100px",
              marginRight: "250px",
            }}
          >
            Torku Tereyağ <br />
            49,90 TL
          </h4>
        </CardBox>

        <CardBox
          style={{
            backgroundImage: `url("https://res.cloudinary.com/ahmettanrikulu/image/upload/v1629632697/eCommerce/7689-fairy-fairy-120_vsoaph.jpg")`,
            cursor: "pointer",
            width: "400px",
            height: "250px",
            display: "inline-block",
            marginTop: "150px",
            overflow: "hidden",
          }}
          className="ms-5 "
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        >
          <h4
            style={{
              color: "white",

              marginTop: "100px",
              marginRight: "250px",
            }}
          >
            Torku Tereyağ <br />
            49,90 TL
          </h4>
        </CardBox>

        <CardBox
          style={{
            backgroundImage: `url("https://res.cloudinary.com/ahmettanrikulu/image/upload/v1629632697/eCommerce/beyazpeynir_eb7efc.jpg")`,
            cursor: "pointer",
            width: "400px",
            height: "250px",
            display: "inline-block",
            overflow: "hidden",
          }}
          className="mt-5 "
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        >
          <h4
            style={{
              color: "white",

              marginTop: "100px",
              marginRight: "250px",
            }}
          >
            Torku Tereyağ <br />
            49,90 TL
          </h4>
        </CardBox>

        <CardBox
          style={{
            backgroundImage: `url("https://res.cloudinary.com/ahmettanrikulu/image/upload/v1629632698/eCommerce/tereyag_ukrtlq.jpg")`,
            cursor: "pointer",
            width: "400px",
            height: "250px",
            display: "inline-block",
            overflow: "hidden",
          }}
          className="mt-5 ms-5 "
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        >
          <h4
            style={{
              color: "white",

              marginTop: "100px",
              marginRight: "250px",
            }}
          >
            Torku Tereyağ <br />
            49,90 TL
          </h4>
        </CardBox>

        <CardBox
          style={{
            backgroundImage: `url("https://res.cloudinary.com/ahmettanrikulu/image/upload/v1629632697/eCommerce/7689-fairy-fairy-120_vsoaph.jpg")`,
            cursor: "pointer",
            width: "400px",
            height: "250px",
            display: "inline-block",
            marginTop: "150px",
            overflow: "hidden",
          }}
          className="mt-5 "
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        >
          <h4
            style={{
              color: "white",

              marginTop: "100px",
              marginRight: "250px",
            }}
          >
            Torku Tereyağ <br />
            49,90 TL
          </h4>
        </CardBox>

        <CardBox
          style={{
            backgroundImage: `url("https://res.cloudinary.com/ahmettanrikulu/image/upload/v1629632697/eCommerce/beyazpeynir_eb7efc.jpg")`,
            cursor: "pointer",
            width: "400px",
            height: "250px",
            display: "inline-block",
            overflow: "hidden",
          }}
          className="mt-5 ms-5 "
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        >
          <h4
            style={{
              color: "white",

              marginTop: "100px",
              marginRight: "250px",
            }}
          >
            Torku Tereyağ <br />
            49,90 TL
          </h4>
        </CardBox>
        <CardBox
          style={{
            backgroundImage: `url("https://res.cloudinary.com/ahmettanrikulu/image/upload/v1629632698/eCommerce/tereyag_ukrtlq.jpg")`,
            cursor: "pointer",
            width: "400px",
            height: "250px",
            display: "inline-block",
            overflow: "hidden",
          }}
          className="mt-5 "
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        >
          <h4
            style={{
              color: "white",

              marginTop: "100px",
              marginRight: "250px",
            }}
          >
            Torku Tereyağ <br />
            49,90 TL
          </h4>
        </CardBox>

        <CardBox
          style={{
            backgroundImage: `url("https://res.cloudinary.com/ahmettanrikulu/image/upload/v1629632697/eCommerce/7689-fairy-fairy-120_vsoaph.jpg")`,
            cursor: "pointer",
            width: "400px",
            height: "250px",
            display: "inline-block",
            marginTop: "150px",
            overflow: "hidden",
          }}
          className="mt-5 ms-5 "
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        >
          <h4
            style={{
              color: "white",

              marginTop: "100px",
              marginRight: "250px",
            }}
          >
            Torku Tereyağ <br />
            49,90 TL
          </h4>
        </CardBox>

        <CardBox
          style={{
            backgroundImage: `url("https://res.cloudinary.com/ahmettanrikulu/image/upload/v1629632697/eCommerce/beyazpeynir_eb7efc.jpg")`,
            cursor: "pointer",
            width: "400px",
            height: "250px",
            display: "inline-block",
            overflow: "hidden",
          }}
          className="mt-5 "
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        >
          <h4
            style={{
              color: "white",

              marginTop: "100px",
              marginRight: "250px",
            }}
          >
            Torku Tereyağ <br />
            49,90 TL
          </h4>
        </CardBox>
        <CardBox
          style={{
            backgroundImage: `url("https://res.cloudinary.com/ahmettanrikulu/image/upload/v1629632698/eCommerce/tereyag_ukrtlq.jpg")`,
            cursor: "pointer",
            width: "400px",
            height: "250px",
            display: "inline-block",
            overflow: "hidden",
          }}
          className="mt-5 ms-5 "
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        >
          <h4
            style={{
              color: "white",

              marginTop: "100px",
              marginRight: "250px",
            }}
          >
            Torku Tereyağ <br />
            49,90 TL
          </h4>
        </CardBox>

        <CardBox
          style={{
            backgroundImage: `url("https://res.cloudinary.com/ahmettanrikulu/image/upload/v1629632697/eCommerce/7689-fairy-fairy-120_vsoaph.jpg")`,
            cursor: "pointer",
            width: "400px",
            height: "250px",
            display: "inline-block",
            marginTop: "150px",
            overflow: "hidden",
          }}
          className="mt-5 "
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        >
          <h4
            style={{
              color: "white",

              marginTop: "100px",
              marginRight: "250px",
            }}
          >
            Torku Tereyağ <br />
            49,90 TL
          </h4>
        </CardBox>

        <CardBox
          style={{
            backgroundImage: `url("https://res.cloudinary.com/ahmettanrikulu/image/upload/v1629632697/eCommerce/beyazpeynir_eb7efc.jpg")`,
            cursor: "pointer",
            width: "400px",
            height: "250px",
            display: "inline-block",
            overflow: "hidden",
          }}
          className="mt-5 ms-5 "
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        >
          <h4
            style={{
              color: "white",

              marginTop: "100px",
              marginRight: "250px",
            }}
          >
            Torku Tereyağ <br />
            49,90 TL
          </h4>
        </CardBox>
        <CardBox
          style={{
            backgroundImage: `url("https://res.cloudinary.com/ahmettanrikulu/image/upload/v1629632698/eCommerce/tereyag_ukrtlq.jpg")`,
            cursor: "pointer",
            width: "400px",
            height: "250px",
            display: "inline-block",
            overflow: "hidden",
          }}
          className="mt-5 "
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        >
          <h4
            style={{
              color: "white",

              marginTop: "100px",
              marginRight: "250px",
            }}
          >
            Torku Tereyağ <br />
            49,90 TL
          </h4>
        </CardBox>

        <CardBox
          style={{
            backgroundImage: `url("https://res.cloudinary.com/ahmettanrikulu/image/upload/v1629632697/eCommerce/7689-fairy-fairy-120_vsoaph.jpg")`,
            cursor: "pointer",
            width: "400px",
            height: "250px",
            display: "inline-block",
            marginTop: "150px",
            overflow: "hidden",
          }}
          className="ms-5 mt-5 "
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        >
          <h4
            style={{
              color: "white",
              marginTop: "100px",
              marginRight: "250px",
            }}
          >
            Torku Tereyağ <br />
            49,90 TL
          </h4>
        </CardBox>
        <CardBox
          style={{
            backgroundImage: `url("https://res.cloudinary.com/ahmettanrikulu/image/upload/v1629632697/eCommerce/beyazpeynir_eb7efc.jpg")`,
            cursor: "pointer",
            width: "400px",
            height: "250px",
            display: "inline-block",
            overflow: "hidden",
          }}
          className="mt-5 "
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        >
          <h4
            style={{
              color: "white",
              marginTop: "100px",
              marginRight: "250px",
            }}
          >
            Torku Tereyağ <br />
            49,90 TL
          </h4>
        </CardBox>
        <CardBox
          style={{
            backgroundImage: `url("https://res.cloudinary.com/ahmettanrikulu/image/upload/v1629632698/eCommerce/tereyag_ukrtlq.jpg")`,
            cursor: "pointer",
            width: "400px",
            height: "250px",
            display: "inline-block",
            overflow: "hidden",
          }}
          className="mt-5 ms-5 "
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        >
          <h4
            style={{
              color: "white",
              marginTop: "100px",
              marginRight: "250px",
            }}
          >
            Torku Tereyağ <br />
            49,90 TL
          </h4>
        </CardBox>
        <CardBox
          style={{
            backgroundImage: `url("https://res.cloudinary.com/ahmettanrikulu/image/upload/v1629632697/eCommerce/beyazpeynir_eb7efc.jpg")`,
            cursor: "pointer",
            width: "400px",
            height: "250px",
            display: "inline-block",
            overflow: "hidden",
          }}
          className="mt-5 "
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        >
          <h4
            style={{
              color: "white",
              marginTop: "100px",
              marginRight: "250px",
            }}
          >
            Torku Tereyağ <br />
            49,90 TL
          </h4>
        </CardBox>
        <CardBox
          style={{
            backgroundImage: `url("https://res.cloudinary.com/ahmettanrikulu/image/upload/v1629632698/eCommerce/tereyag_ukrtlq.jpg")`,
            cursor: "pointer",
            width: "400px",
            height: "250px",
            display: "inline-block",
            overflow: "hidden",
          }}
          className="mt-5 ms-5 "
          variants={CardVariants}
          initial="beforeHover"
          whileHover="onHover"
        >
          <h4
            style={{
              color: "white",
              marginTop: "100px",
              marginRight: "250px",
            }}
          >
            Torku Tereyağ <br />
            49,90 TL
          </h4>
        </CardBox>
        <div>
          <CardBox
            style={{
              backgroundImage: `url("https://res.cloudinary.com/ahmettanrikulu/image/upload/v1629632378/eCommerce/sanalmarket_shfxst.jpg")`,
              cursor: "pointer",
              height: "200px",
              width: "100%",
            }}
            className="mt-5"
            variants={CardVariants}
            initial="beforeHover"
            whileHover="onHover"
          >
            <h5
              className=""
              style={{
                color: "white",
                marginTop: "70px",
                marginRight: "300px",
              }}
            >
              TANNET SANAL MARKET <b>AÇILDI</b>! <br />
              ÜRÜNLERDE UYGULANAN <b>% 10</b> ve <b>% 40</b> İNDİRİMLER HARİCİ{" "}
              <br />
              İLK SİPARİŞE ÖZEL <b>30 TL İNDİRİM !</b>
            </h5>
          </CardBox>
        </div>
      </Container>
    </div>
  );
}
