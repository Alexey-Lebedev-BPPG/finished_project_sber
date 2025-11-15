import {
	type TypedUseSelectorHook,
	useDispatch,
	useSelector,
} from 'react-redux';
import type { StateSchema, AppDispatch } from 'app/providers/StoreProvider';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<StateSchema> = useSelector;
