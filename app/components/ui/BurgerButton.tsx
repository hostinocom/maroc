'use client';

interface BurgerButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function BurgerButton({ isOpen, onToggle }: BurgerButtonProps) {
    console.log('BurgerButton render, isOpen:', isOpen);
  return (
    <>
      <label 
        className="relative block w-8 h-8 rounded text-title cursor-pointer"
        //onClick={onToggle}
      >
        <input
          type="checkbox"
          checked={isOpen}
          onChange={onToggle}
          className="absolute invisible w-0 h-0"
        />
        <span className={`burger-line ${isOpen ? 'open' : ''}`}></span>
      </label>


    </>
  );
}