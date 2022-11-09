import React from 'react';

const AddReview = () => {
    return (
        <div className='w-screen my-12'>
            {/* The button to open modal */}
            <div className='flex justify-around items-center'>
                <h1>AllReview review</h1>
                <label htmlFor="my-modal-6" className="btn">Add Review</label>
            </div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal-6" className="btn">ADD</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddReview;