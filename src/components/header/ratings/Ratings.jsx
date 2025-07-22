import React, { useEffect, useState } from 'react';

const Ratings = ({ defaultRating = 1, isEditable, onRatingChange = () => { }  }) => {
    const [selectRating, setSelectRating] = useState(defaultRating);

    useEffect(() => {

        onRatingChange(selectRating);

    }, [selectRating])

    return (
        <div className={`rating ${!isEditable && "pointer-events-none"}`}>
            {[1, 2, 3, 4, 5].map((value) => (
                <input
                    key={value}
                    type="radio"
                    className={`mask mask-star-2 ${value <= selectRating ? 'bg-orange-400' : 'bg-gray-200'}`}
                    onClick={() => setSelectRating(value)}
                />
            ))}
        </div>
    );
};

export default Ratings;
