import React from 'react';

const Contact = () => {
    return (
        <main>
        <section className="hero min-h-screen px-0 lg:px-8">
            <div className="flex justify-center flex-col lg:flex-row-reverse">
                <div className="card shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24" placeholder="Send Message"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
                {/* End contact Form */}
                <div className=" lex-shrink-0 w-full max-w-5xl text-center lg:text-left pt-4 lg:pt-0 px-2 lg:px-0">
                    <h1 className="text-lg lg:text-5xl font-bold">Contact now!</h1>
                    <p className="py-2 lg:py-6 pr-0 lg:pr-8 text-justify">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                    <div className="flex justify-center gap-1 flex-col lg:flex-row-reverse">
						
							<div className="md:w-12/12 lg:w-3/12">
                                <h3 className='text-lg font-semibold'>Colaborate</h3>
                                <p>Support@example.com</p>
                                <p>+880-1617892323</p>
							</div>
							<div className="md:w-12/12 lg:w-3/12">
                                <h3 className='text-lg font-semibold'>Support</h3>
                                <p>Support@example.com</p>
                                <p>+880-1617892323</p>
                            </div>
                            
                            <div className="md:w-12/12 lg:w-3/12">
                                <h3 className='text-lg font-semibold'>Join our team</h3>
                                <p>Support@example.com</p>
                                <p>+880-1617892323</p>
                            </div>
                            <div className="md:w-12/12 lg:w-3/12">
                                <h3 className='text-lg font-semibold'>Say hello</h3>
                                <p>Support@example.com</p>
                                <p>+880-1617892323</p>
                            </div>
                    </div>
                </div>
                
            </div>
        </section>
        {/* end contact section */}
        <section className='mb-8 px-0 lg:px-8'>

        <div className="hero" style={{backgroundImage: 'url(https://placeimg.com/1000/800/arch)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className="hero-overlay py-8 bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
                <h1 className="mb-5 text-xl lg:text-5xl font-bold">Looking for new career?</h1>
                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">We are Hiring</button>
            </div>
        </div>
        </div>
        </section>
        </main>
    );
};

export default Contact;