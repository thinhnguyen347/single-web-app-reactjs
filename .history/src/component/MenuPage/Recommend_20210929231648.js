import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default fu'c'n'ti'o'n Recommend(){

    return(
        <>
        <div className="pb-3 overflow-hidden">
        <p className="h3 mt-5 py-3 text-center">BEST-SELLER CỦA THÁNG</p>
        {isLoading ? (
          <div className="home loadingio-spinner-rolling-ejs4tg3ktq7">
            <div className="ldio-i7neyuiwdre d-flex justify-content-center">
              <div></div>
            </div>
          </div>
        ) : (
          <div className="pb-5">
            <Slider {...settings}>
              {products.map(({ id, img, title, price, slug }) => (
                <HomeContent
                  key={id}
                  img={img}
                  title={title}
                  price={price}
                  slug={slug}
                />
              ))}
            </Slider>
          </div>
        )}
      </div>
    </>
    )
}