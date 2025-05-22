// StartButton.jsx
import { useNavigate } from 'react-router-dom';
import ClickableButton from '../ClickableButton/ClickableButton';

export default function NavigateButton({ className, disabled, sound, route, children }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <ClickableButton
      className={className}
      onClick={handleClick}
      disabled={disabled}
      sound={sound}
    >
      {children}
    </ClickableButton>
  );
}
