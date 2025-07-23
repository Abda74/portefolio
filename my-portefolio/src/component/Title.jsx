import React from 'react';

const Title = ({title}) => {
    return (
        <div className="flex flex-col items-center justify-center p-5" >
            <h1 className="uppercase font-bold text-3xl p-10">{title}</h1>
        </div>
    );
};

export default Title;