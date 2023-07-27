import { useState } from 'react';

interface ToggleSwitchProps {
  enabled: boolean;
  onToggle: (value: boolean) => void;
}

const ToggleSwitch = ({ enabled, onToggle }: ToggleSwitchProps) => {
  const [isChecked, setIsChecked] = useState(enabled);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setIsChecked(isChecked);
    onToggle(isChecked);
  };

  return (
    <div className="relative inline-block w-10 mr-2 align-middle select-none">
      <input
        type="checkbox"
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        checked={isChecked}
        onChange={handleChange}
      />
      <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
    </div>
  
  );
};

export default ToggleSwitch;
