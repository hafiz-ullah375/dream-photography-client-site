import React from 'react';

const HeaderSection = () => {
    return (
        <div className="hero lg:min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1530348097767-16a75a3b7c6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl font-bold">Hi. I am a photographer
                    </h1>
                    <p className="mb-5 text-2xl">I am capture Your happiness and impression</p>

                </div>
            </div>
        </div>
    );
};

export default HeaderSection;