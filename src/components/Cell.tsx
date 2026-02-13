interface CellProps {
    value: number;
    onClick: () => void;
}

const Cell = ({ value, onClick }: CellProps) => {
    const isLocked = value >= 15;
    const isEven = value % 2 === 0;

    let bgColor = isEven ? 'bg-[#e0e0e0]' : 'bg-[#1a237e]';
    let textColor = isEven ? 'text-black' : 'text-white';

    if (isLocked) {
        bgColor = 'bg-red-600';
        textColor = 'text-white';
    }

    return (
        <button
            onClick={onClick}
            disabled={isLocked}
            className={`
        w-24 h-24 
        flex items-center justify-center 
        text-2xl font-bold 
        rounded-[4px] 
        shadow-[2px_2px_0px_black]
        transition-transform duration-100 active:scale-95 hover:brightness-110
        ${bgColor} ${textColor}
        ${isLocked ? 'cursor-not-allowed opacity-90' : 'cursor-pointer'}
      `}
        >
            {value}
        </button>
    );
};

export default Cell;
