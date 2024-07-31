import { useNavigate, useSearchParams } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    const [params] = useSearchParams();
    const source = params.get('source');
    const destination = params.get('destination');


    return (
        <>
            <div className='p-4 bg-primary font-bold uppercase text-secondary flex justify-start items-center gap-4'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left h-6 w-6 hover:cursor-pointer" onClick={() => (navigate('/'))}>
                    <path d="M19 12H5m7-7l-7 7 7 7"></path>
                </svg>
                {source} &nbsp; TO &nbsp; {destination}
            </div>
        </>
    )
}

export default Header