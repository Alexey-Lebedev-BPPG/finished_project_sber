import {
  useCallback,
  useContext,
  useEffect,
  type FC,
  type MouseEvent,
  type ReactNode,
} from 'react';
import { createPortal } from 'react-dom';
import cls from './Modal.module.css';
import { ThemeContext } from 'shared/lib/contexts/ThemeContext/ThemeContext';
import { Button } from '../Button/Button';

interface IModalBaseProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  children: ReactNode;
  confirmDisabled?: boolean;
  confirmText?: string;
}

interface NoneSubmitProps extends IModalBaseProps {
  typeConfirm?: 'reset' | 'button';
  formId?: undefined;
}

interface SubmitProps extends IModalBaseProps {
  typeConfirm: 'submit';
  formId: string;
}

type ModalProps = NoneSubmitProps | SubmitProps;

export const Modal: FC<ModalProps> = props => {
  const {
    isOpen,
    onConfirm,
    onCancel,
    children,
    confirmDisabled = false,
    confirmText = 'Подтвердить',
    typeConfirm = 'button',
    formId,
  } = props;

  const { theme } = useContext(ThemeContext);

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) =>
    e.target === e.currentTarget && onCancel();

  const modalRoot = document.getElementById('modal-root');

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => e.key === 'Escape' && onCancel(),
    [onCancel],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  if (!modalRoot || !isOpen) return null;

  return createPortal(
    <div
      className={`${cls.overlay} ${theme === 'dark' ? cls[theme] : undefined}`}
      onClick={handleOverlayClick}
    >
      <div className={cls.modal}>
        {children}
        <div className={cls.actions}>
          <Button
            className={cls.buttonCancel}
            disabled={confirmDisabled}
            onClick={onCancel}
          >
            Отмена
          </Button>
          <Button
            form={formId}
            className={cls.buttonConfirm}
            type={typeConfirm}
            onClick={typeConfirm === 'button' ? () => onConfirm() : undefined}
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </div>,
    modalRoot,
  );
};
