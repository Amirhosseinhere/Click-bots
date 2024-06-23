import { useEffect, useState } from "react";
import coin from "../assets/images/coin.webp";
interface FloatingText {
    id:number;
    x:number;
    y:number;
}
const Mine = () => {
    const maxEnergy = 400;
    const [value, setValue] = useState(10000);
    const [floatingTexts, setFloatingTexts] = useState<FloatingText[]>([]);
    const [nextId, setNextId] = useState(0);
    const [energy, setEnergy] = useState(maxEnergy);
    const handleClick = (e:any) =>{
        if (energy){
            setValue((perv) => perv +1);
            setEnergy((perv) => (perv > 0 ? perv - 1 : 0));
            const {clinteX: x, clinteY: y} = e;
            const newText : FloatingText = {id: nextId,x,y};
            setFloatingTexts((perv)=>[...perv,newText]);
            setNextId ((perv)=>perv + 1); 
            setTimeout(()=>{
                setFloatingTexts ((perv)=>
                perv.filter((text)=>text.id !== newText.id)
            );
            },2000);
        }
    };
    const energyPercentage = (energy / maxEnergy)*100;
    useEffect(()=>{
        const interval = setInterval (()=>{
            setEnergy((pervEnergy)=>{
                if(pervEnergy < maxEnergy){
                    return pervEnergy +1;
                }
                return pervEnergy;
            });
        },1500);
        return () => clearInterval(interval);
    },[]);
return (
<div className="w-full h-full flex flex-col justify-between py-4">
    {/* <LevelBar /> */}
    {/* <StatusBar /> */}
    <div className="w-full flex items-center justify-center">
        <span className="font-bold text-[60px]">
        {value.toLocaleString()}
        </span>
    </div>
    <div className="flex items-center justify-center">
        <img src={coin} alt="coin" onClick={handleClick} className="w-[70%] cursor-pointer drop-shadow-2xl coin-button"/>
    </div>
</div>
)
}

export default Mine;