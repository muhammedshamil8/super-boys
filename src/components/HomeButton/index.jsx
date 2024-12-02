import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ArrowBtn = ({ }) => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/');
    }
    return (
        <div onClick={handleNavigate} className='flex items-center gap-2   w-fit cursor-pointer'>
            <div className='bg-white rounded-full'>
                <ArrowLeft size='16' color='black' className='stroke-[3px] p-[2px] m-[1px]' />
            </div>
            <span className='font-semibold text-white'>Home</span>
        </div>
    );
};

export default ArrowBtn;
