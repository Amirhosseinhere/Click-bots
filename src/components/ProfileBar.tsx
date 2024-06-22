import { LogoGithub, Person, Rocket, Wallet } from "react-ionicons";
const ProfileBar = () => {
return (
<div className="w-full flex flex-col gap-3">
    <div className="w-full flex items-center justify-center gap-3">
        <div className="w-full rounded-xl bg-[#012237] h-[50px] flex items-center gap-3 px-3 cursor-pointer">
            <Person cssClasses={"!fill-[#fdb224]"} />
            <span className="font-semibold pr-4">Amirhossein shirzadi</span>
        </div>
        <div className="w-full rounded-xl bg-[#012237] h-[50px] flex items-center justify-center gap-3 px-3 cursor-pointer">
            <Rocket cssClasses={"!fill-[#fdb224]"}/>
            <span className="font-semibold pr-4">Boost</span>
        </div>
        <div className="w-full rounded-xl bg-[#012237] h-[50px] flex items-center justify-center gap-3 px-3 cursor-pointer">
            <Wallet cssClasses={"!fill-[#fdb224]"}/>
            <span className="font-semibold pr-4">Wallet</span>
        </div>
    </div>
    <div className="w-full rounded-xl bg-[#012237] h-[60px] flex items-center justify-center gap-3 px-3 cursor-pointer">
        <LogoGithub cssClasses={"!fill-[#181717]"} width="32px" height="32px" />
        <span className="font-semibold pr-4">Project source code</span>
    </div>
</div>
)
}

export default ProfileBar;