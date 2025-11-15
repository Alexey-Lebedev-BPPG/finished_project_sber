import { useNavigate } from 'react-router-dom';
import BackSvg from 'shared/assets/icons/back.svg';
import { Icon } from 'shared/ui/Icon';

export const ButtonBack = () => {
	const navigate = useNavigate();
	return (
		<button onClick={() => navigate(-1)}>
			<Icon Svg={BackSvg} />
		</button>
	);
};
