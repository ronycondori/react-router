import { useTranslation } from 'react-i18next';
import ServicesComponent from './components/ServicesComponent';
import Testimonials from './components/Testimonials';

function App() {
  const { t } = useTranslation();

  return (
    <>
      <section id="hero" className="hero">
        <div className="info d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <h2 data-aos="fade-down">{t('title')}</h2>
                <p data-aos="fade-up">{t('subtitle')}</p>
                <a data-aos="fade-up" data-aos-delay="200" href="#get-started" className="btn-get-started">
                  {t('button')}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-item active" style={{ backgroundImage: `url("/assets/img/golden/CHOQUEQUIRAO3.jpg")` }}></div>
          <div className="carousel-item" style={{ backgroundImage: `url("/assets/img/golden/MACHUPICCHU 1.jpg")` }}></div>
          <div className="carousel-item" style={{ backgroundImage: `url("/assets/img/golden/CUSCO 22.jpg")` }}></div>
          <div className="carousel-item" style={{ backgroundImage: `url("/assets/img/golden/ISLA AMANTANI 70.jpg")` }}></div>
          <div className="carousel-item" style={{ backgroundImage: `url("/assets/img/golden/ISLA DE LOS UROS MF 100.jpg")` }}></div>

          <a className="carousel-control-prev" href="#hero-carousel" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bi bi-chevron-left" aria-hidden="true"></span>
          </a>

          <a className="carousel-control-next" href="#hero-carousel" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon bi bi-chevron-right" aria-hidden="true"></span>
          </a>
        </div>
      </section>

      <main id="main">
        <section id="constructions" className="constructions">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h2>Destinos</h2>
              <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
            </div>

            <div className="row gy-4">
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                <div className="card-item">
                  <div className="row">
                    <div className="col-xl-5">
                      <div className="card-bg" style={{ backgroundImage: `url("/assets/img/travel/services-1.jpg")` }}></div>
                    </div>
                    <div className="col-xl-7 d-flex align-items-center">
                      <div className="card-body">
                        <h4 className="card-title">Eligendi omnis sunt veritatis.</h4>
                        <p>
                          Fuga in dolorum et iste et culpa. Commodi possimus nesciunt modi voluptatem placeat deleniti adipisci. Cum delectus doloribus non veritatis.
                          Officia temporibus illo magnam. Dolor eos et.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div className="card-item">
                  <div className="row">
                    <div className="col-xl-5">
                      <div className="card-bg" style={{ backgroundImage: `url("/assets/img/travel/services-2.jpg")` }}></div>
                    </div>
                    <div className="col-xl-7 d-flex align-items-center">
                      <div className="card-body">
                        <h4 className="card-title">Possimus ut sed velit assumenda</h4>
                        <p>
                          Sunt deserunt maiores voluptatem autem est rerum perferendis rerum blanditiis. Est laboriosam qui iste numquam laboriosam voluptatem architecto.
                          Est laudantium sunt at quas aut hic. Eum dignissimos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="300">
                <div className="card-item">
                  <div className="row">
                    <div className="col-xl-5">
                      <div className="card-bg" style={{ backgroundImage: `url("/assets/img/travel/services-3.jpg")` }}></div>
                    </div>
                    <div className="col-xl-7 d-flex align-items-center">
                      <div className="card-body">
                        <h4 className="card-title">Error beatae dolor inventore aut</h4>
                        <p>
                          Dicta porro nobis. Velit cum in. Nesciunt dignissimos enim molestiae facilis numquam quae quaerat ipsam omnis. Neque debitis ipsum at architecto
                          officia laboriosam odit. Ut sunt temporibus nulla culpa.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="400">
                <div className="card-item">
                  <div className="row">
                    <div className="col-xl-5">
                      <div className="card-bg" style={{ backgroundImage: `url("/assets/img/travel/services-4.jpg")` }}></div>
                    </div>
                    <div className="col-xl-7 d-flex align-items-center">
                      <div className="card-body">
                        <h4 className="card-title">Expedita voluptas ut ut nesciunt</h4>
                        <p>
                          Aut est quidem doloremque voluptatem magnam quis excepturi vero quia. Eum eos doloremque architecto illo at beatae dolore. Fugiat suscipit et
                          sint ratione dolores. Aut aliquid ea dolores libero nobis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesComponent />

        <section id="alt-services" className="alt-services">
          <div className="container" data-aos="fade-up">
            <div className="row justify-content-around gy-4">
              <div
                className="col-lg-6 img-bg"
                style={{ backgroundImage: `url("/assets/img/golden/GRUPO\ MEXICO\ 8.jpg")` }}
                data-aos="zoom-in"
                data-aos-delay="100"
              ></div>

              <div className="col-lg-5 d-flex flex-column justify-content-center">
                <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                <p>
                  Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere
                  corporis dolores excepturi
                </p>

                <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="100">
                  <i className="bi bi-easel flex-shrink-0"></i>
                  <div>
                    <h4>
                      <a href="" className="stretched-link">
                        Lorem Ipsum
                      </a>
                    </h4>
                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                  </div>
                </div>

                <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="200">
                  <i className="bi bi-patch-check flex-shrink-0"></i>
                  <div>
                    <h4>
                      <a href="" className="stretched-link">
                        Nemo Enim
                      </a>
                    </h4>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                  </div>
                </div>

                <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="300">
                  <i className="bi bi-brightness-high flex-shrink-0"></i>
                  <div>
                    <h4>
                      <a href="" className="stretched-link">
                        Dine Pad
                      </a>
                    </h4>
                    <p>Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                  </div>
                </div>

                <div className="icon-box d-flex position-relative" data-aos="fade-up" data-aos-delay="400">
                  <i className="bi bi-brightness-high flex-shrink-0"></i>
                  <div>
                    <h4>
                      <a href="" className="stretched-link">
                        Tride clov
                      </a>
                    </h4>
                    <p>Est voluptatem labore deleniti quis a delectus et. Saepe dolorem libero sit non aspernatur odit amet. Et eligendi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="features section-bg">
          <div className="container" data-aos="fade-up">
            <ul className="nav nav-tabs row g-2 d-flex">
              <li className="nav-item col-3">
                <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1">
                  <h4>Modisit</h4>
                </a>
              </li>

              <li className="nav-item col-3">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                  {' '}
                  <h4>Praesenti</h4>{' '}
                </a>
              </li>

              <li className="nav-item col-3">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                  <h4>Explica</h4>
                </a>
              </li>

              <li className="nav-item col-3">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-4">
                  <h4>Nostrum</h4>
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane active show" id="tab-1">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
                    <h3>Voluptatem dignissimos provident</h3>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                    <img src="/assets/img/golden/CONDOR PARA EL MAPA.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>

              <div className="tab-pane" id="tab-2">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                    <h3>Neque exercitationem debitis</h3>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check2-all"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.
                      </li>
                      <li>
                        <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img src="/assets/img/golden/SALAR DE UYUNI 500.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>

              <div className="tab-pane" id="tab-3">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                    <h3>Voluptatibus commodi accusamu</h3>
                    <ul>
                      <li>
                        <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check2-all"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.
                      </li>
                    </ul>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img src="/assets/img/golden/TUBULARES ICA 21.png" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>

              <div className="tab-pane" id="tab-4">
                <div className="row">
                  <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                    <h3>Omnis fugiat ea explicabo sunt</h3>
                    <p className="fst-italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
                        <i className="bi bi-check2-all"></i> Duis aute irure dolor in reprehenderit in voluptate velit.
                      </li>
                      <li>
                        <i className="bi bi-check2-all"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img src="/assets/img/golden/ISLA DE LOS UROS 509.jpg" alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="blog">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4 posts-list">
              <div className="section-header">
                <h2>Nuestros Paquetes</h2>
                <p>Encuentra aquí algunos de los mejores Itinerarios y tours.</p>
                <p>Tenga en cuenta que todos los elementos de estos itinerarios pueden adaptarse a sus intereses y estilo de viaje.</p>
              </div>

              <div className="col-xl-4 col-md-6">
                <div className="post-item position-relative h-100">
                  <div className="post-img position-relative overflow-hidden">
                    <img src="/assets/img/golden/MACHUPICCHU 5.jpg" className="img-fluid" alt="" />
                    <span className="post-date">December 12</span>
                  </div>

                  <div className="post-content d-flex flex-column">
                    <h3 className="post-title">Dolorum optio tempore voluptas dignissimos</h3>

                    <div className="meta d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-person"></i> <span className="ps-2">John Doe</span>
                      </div>
                      <span className="px-3 text-black-50">/</span>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-folder2"></i> <span className="ps-2">Politics</span>
                      </div>
                    </div>

                    <p>
                      Similique neque nam consequuntur ad non maxime aliquam quas. Quibusdam animi praesentium. Aliquam et laboriosam eius aut nostrum quidem aliquid
                      dicta.
                    </p>

                    <hr />

                    <a href="blog-details.html" className="readmore stretched-link">
                      <span>Read More</span>
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6">
                <div className="post-item position-relative h-100">
                  <div className="post-img position-relative overflow-hidden">
                    <img src="/assets/img/golden/LAGUNA HUMANTAY 3.jpg" className="img-fluid" alt="" />
                    <span className="post-date">March 19</span>
                  </div>

                  <div className="post-content d-flex flex-column">
                    <h3 className="post-title">Nisi magni odit consequatur autem nulla dolorem</h3>

                    <div className="meta d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-person"></i> <span className="ps-2">Julia Parker</span>
                      </div>
                      <span className="px-3 text-black-50">/</span>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-folder2"></i> <span className="ps-2">Economics</span>
                      </div>
                    </div>

                    <p>Incidunt voluptate sit temporibus aperiam. Quia vitae aut sint ullam quis illum voluptatum et. Quo libero rerum voluptatem pariatur nam.</p>

                    <hr />

                    <a href="blog-details.html" className="readmore stretched-link">
                      <span>Read More</span>
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6">
                <div className="post-item position-relative h-100">
                  <div className="post-img position-relative overflow-hidden">
                    <img src="/assets/img/golden/IQUITOS 2.jpg" className="img-fluid" alt="" />
                    <span className="post-date">June 24</span>
                  </div>

                  <div className="post-content d-flex flex-column">
                    <h3 className="post-title">Possimus soluta ut id suscipit ea ut. In quo quiat</h3>

                    <div className="meta d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-person"></i> <span className="ps-2">Maria Doe</span>
                      </div>
                      <span className="px-3 text-black-50">/</span>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-folder2"></i> <span className="ps-2">Sports</span>
                      </div>
                    </div>

                    <p>
                      Aut iste neque ut illum qui perspiciatis similique recusandae non. Fugit autem dolorem labore omnis et. Eum temporibus fugiat voluptate enim tenetur
                      sunt omnis.
                    </p>

                    <hr />

                    <a href="blog-details.html" className="readmore stretched-link">
                      <span>Read More</span>
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6">
                <div className="post-item position-relative h-100">
                  <div className="post-img position-relative overflow-hidden">
                    <img src="/assets/img/golden/LOS UROS 9.jpg" className="img-fluid" alt="" />
                    <span className="post-date">August 05</span>
                  </div>

                  <div className="post-content d-flex flex-column">
                    <h3 className="post-title">Non rem rerum nam cum quo minus. Dolor distinctio</h3>

                    <div className="meta d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-person"></i> <span className="ps-2">Maria Doe</span>
                      </div>
                      <span className="px-3 text-black-50">/</span>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-folder2"></i> <span className="ps-2">Sports</span>
                      </div>
                    </div>

                    <p>Aspernatur rerum perferendis et sint. Voluptates cupiditate voluptas atque quae. Rem veritatis rerum enim et autem.</p>

                    <hr />

                    <a href="blog-details.html" className="readmore stretched-link">
                      <span>Read More</span>
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6">
                <div className="post-item position-relative h-100">
                  <div className="post-img position-relative overflow-hidden">
                    <img src="/assets/img/golden/TUBULARES ICA 26.jpg" className="img-fluid" alt="" />
                    <span className="post-date">September 17</span>
                  </div>

                  <div className="post-content d-flex flex-column">
                    <h3 className="post-title">Accusamus quaerat aliquam qui debitis facilis consequatur</h3>

                    <div className="meta d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-person"></i> <span className="ps-2">John Parker</span>
                      </div>
                      <span className="px-3 text-black-50">/</span>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-folder2"></i> <span className="ps-2">Politics</span>
                      </div>
                    </div>

                    <p>In itaque assumenda aliquam voluptatem qui temporibus iusto nisi quia. Autem vitae quas aperiam nesciunt mollitia tempora odio omnis. Ipsa</p>

                    <hr />

                    <a href="blog-details.html" className="readmore stretched-link">
                      <span>Read More</span>
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6">
                <div className="post-item position-relative h-100">
                  <div className="post-img position-relative overflow-hidden">
                    <img src="/assets/img/golden/MONTAÑA 7 COLORES 1.jpg" className="img-fluid" alt="" />
                    <span className="post-date">December 07</span>
                  </div>

                  <div className="post-content d-flex flex-column">
                    <h3 className="post-title">Distinctio provident quibusdam numquam aperiam aut</h3>

                    <div className="meta d-flex align-items-center">
                      <div className="d-flex align-items-center">
                        <i className="bi bi-person"></i> <span className="ps-2">Julia White</span>
                      </div>
                      <span className="px-3 text-black-50">/</span>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-folder2"></i> <span className="ps-2">Economics</span>
                      </div>
                    </div>

                    <p>Expedita et temporibus eligendi enim molestiae est architecto praesentium dolores. Illo laboriosam officiis quis. Labore officia quia sit</p>

                    <hr />

                    <a href="blog-details.html" className="readmore stretched-link">
                      <span>Read More</span>
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
      </main>
    </>
  );
}

export default App;
