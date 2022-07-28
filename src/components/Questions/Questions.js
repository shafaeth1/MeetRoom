import React from 'react';

const Questions = () => {
    return (
        <div>
            <h2 className="text-center text-2xl my-4"> Frequently Ask Questions</h2>
            <div tabIndex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div class="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div class="collapse-content">
                    <p>tabIndex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
            <div tabIndex="0" class="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box  mt-4">
                <div class="collapse-title text-xl font-medium">
                    Focus me to see content
                </div>
                <div class="collapse-content">
                    <p>tabIndex="0" attribute is necessary to make the div focusable</p>
                </div>
            </div>
        </div>
    );
};

export default Questions;