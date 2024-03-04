import React from 'react';
import ImageSlider from './SliderComponets';
import OptionsColumnsComponets from './OptionsColumnsComponets';
import EmployeePostComponets from './EmployeePostComponets';
const Frontpagebody = () => {
    return (
        <div className='w-full md:w-10/12 mx-auto mt-5'>

            <div className='flex flex-wrap justify-between h-400px'>
                <div className='sliders w-full md:w-2/3 h-full border mr-4 md:mr-0 mb-4 md:mb-0'>
                    <ImageSlider />
                </div>

                <div className='options-verticals w-full md:w-1/3 h-full border'>
                    <OptionsColumnsComponets />
                </div>
            </div>

            <div>
               <EmployeePostComponets/>
            </div>
        </div>
    );
};

export default Frontpagebody;
