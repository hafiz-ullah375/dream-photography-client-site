import React from 'react';

const ReviewByProduct = ({ review }) => {
    const { name, photoURL, textarea } = review;
    console.log(review);
    return (
        <tr className='card border border-cyan-600 mx-4'>

            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={photoURL} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>

                    </div>
                </div>
            </td>
            <div className='mx-4'>
                <div className="font-bold">{textarea}</div>

            </div>

            <th className='flex justify-around'>

                <button className="btn btn-ghost btn-xs">edit</button>
                <button className="btn btn-ghost btn-xs">X</button>

            </th>
        </tr>
    );
};

export default ReviewByProduct;