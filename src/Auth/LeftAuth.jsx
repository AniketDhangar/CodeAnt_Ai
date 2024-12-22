import {ArrowLongUpIcon} from "@heroicons/react/16/solid";

const LeftAuth = () => {
    return (
        <div className={`hidden text-xl md:flex font-bold h-full w-1/2 bg-white border-r relative flex-col justify-center items-center`}>
            <img src={'/png/logoFaded.png'} alt={'logo'}
                 className={`absolute left-0 bottom-0 w-[300px] aspect-square`}/>
            <div className={`flex rounded-xl border-2 shadow-lg  h-40 flex-col w-full max-w-[400px]`}>
                <div className={`flex gap-2 items-center border-b p-4`}>
                    <img src={'/svg/logo.svg'} alt={'logo'} className={`w-6 h-6`}/>
                    <span className={`font-semibold`}>AI to Detect & Autofix Bad Code</span>
                </div>
                <div className={`flex gap-4 justify-between items-center p-4 border-t-2 border-gray-100 `}>
                    <div className={`flex flex-col items-center`}>
                        <span className={`font-bold`}>30+</span>
                        <span className={`text-sm`}>Language Support</span>
                    </div>

                    <div className={`flex flex-col items-center`}>
                        <span className={`font-semibold`}>10K+</span>
                        <span className={`text-sm`}>Developers</span>
                    </div>

                    <div className={`flex flex-col items-center`}>
                        <span className={`font-semibold`}>100K+</span>
                        <span className={`text-sm`}>Hours Saved</span>
                    </div>
                </div>
            </div>
            <div className={`flex rounded-xl border-2 shadow-2xl  flex-col gap-2 p-4 px-8 translate-x-[50%] -translate-y-[10px] bg-white`}>
                <div className={`flex justify-between min-w-40`}>
                    <img src={'/svg/GraphAuth.svg'} alt={'graph'} className={``}/>
                    <div className={`flex flex-col`}>
                        <div className={`flex items-center text-primary text-blue-500`}>        
                            <ArrowLongUpIcon className={`w-5`}/>
                            14%
                        </div>
                        <div className={`font-light text-sm`}>
                            This week
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`flex flex-col w-full gap-2 space-x-4`}>
                        <span className={`font-semibold`}>Issues Fixed</span>
                        <span className={`font-bold text-4xl `}>500K+</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftAuth;