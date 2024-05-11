import React from 'react'

const HomePage = () => {
  return (
    <div>
      <div className="container">
                <div className="row g-3">
                    <h1>Home</h1>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div id="carouselExample" class="carousel slide">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTPF3AeMIaaLLNFs57gNj_Vys2IQS14rkBUwv4OlN9A&s" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTPF3AeMIaaLLNFs57gNj_Vys2IQS14rkBUwv4OlN9A&s" class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQTPF3AeMIaaLLNFs57gNj_Vys2IQS14rkBUwv4OlN9A&s" class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                    <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                        <div class="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxW0vxekzrOGprKjsb4vNqawbj24TQJbOlNkQ-gnbvTA&s" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <p class="card-text">Sree Buddha College of Engineering, Pattoor</p>
                                </div>
                        </div>
                    </div>

                    <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cupiditate nobis sed mollitia harum nisi obcaecati soluta ea nam, error odit vel dolores qui doloribus culpa ipsum. Eveniet, nam itaque?
                        Officia, quidem repellendus, ducimus dolorem ea sunt voluptatem commodi, quis sint laboriosam quos reiciendis excepturi est error fuga suscipit ad corporis numquam cumque? Odit quia esse perferendis quas, provident nulla.
                        Voluptatum inventore et, consectetur numquam mollitia quaerat nam maiores modi, odio optio non eum asperiores quia at ullam delectus, molestias porro aperiam ducimus consequuntur commodi. Blanditiis mollitia ducimus odio iusto!</p>
                    </div>

                    <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                        <div class="card">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxW0vxekzrOGprKjsb4vNqawbj24TQJbOlNkQ-gnbvTA&s" class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <p class="card-text">Sree Buddha College of Engineering, Pattoor</p>
                                </div>
                        </div>
                    </div>

                </div>
            </div>

    </div>
  )
}

export default HomePage
