import React from 'react';

const Contact = () => {
    return (
        <main>
          <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="card shadow-2xl bg-base-100">
                <div class="card-body">
                    <div class="form-control">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" class="input input-bordered" />
                    </div>
                    <div class="form-control">
                    <label class="label">
                        <span class="label-text">Message</span>
                    </label>
                    <textarea class="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                    </div>
                    <div class="form-control mt-6">
                    <button class="btn btn-primary">Send</button>
                    </div>
                    </div>
                    </div>
                <div class=" flex-shrink-0 w-full max-w-sm text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Contact now!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>

                </div>
            </div>
        </div>
        </main>
    );
};

export default Contact;