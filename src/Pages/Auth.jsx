import LeftAuth from "../Auth/LeftAuth.jsx";
import RightAuth from "../Auth/RightAuth.jsx";





const Auth = () => {
    return (
        <div className={`flex gap-2 w-full justify-center`}>
            <LeftAuth />
            <RightAuth />
        </div>
    );
};

export default Auth;