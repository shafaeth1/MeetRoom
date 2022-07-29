import React from 'react';
import Questions from '../../components/Questions/Questions';

const SupportPage = () => {
    return (
        <div className=" grid lg:grid-rows-1 items-center my-20" >
            <div className=" w-96 mx-auto  text-center">
                <span class="footer-title">How can we help you?</span>
                <div class="relative form-control w-96 my-5 ">
                    <input type="text" placeholder="describe your issues" class="input input-bordered w-full pr-16" />
                </div>
            </div>

            <div className="w-full mx-auto px-40 ">
                <Questions></Questions>
            </div>
        </div>
    );
};

export default SupportPage;