import React from 'react';

const Contact = () => {
    return (
        <main>
          <div class="hero min-h-screen">
            <div class="flex justify-center flex-col lg:flex-row-reverse">
                <div class="card shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Message</span>
                            </label>
                            <textarea class="textarea textarea-bordered h-24" placeholder="Send Message"></textarea>
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Send</button>
                        </div>
                    </div>
                </div>
                <div class=" lex-shrink-0 w-full max-w-5xl px-0 lg:px-6 text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Contact now!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                </div>
            </div>
        </div>
        </main>
    );
};

export default Contact;