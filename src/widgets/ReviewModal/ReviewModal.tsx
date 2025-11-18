import { type FC, useActionState, useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './ReviewModal.module.css';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { Spinner } from 'shared/ui/Spinner/Spinner';

interface ReviewState {
  reviewText: string;
  error?: string;
  success?: boolean;
}

const initialState: ReviewState = {
  reviewText: '',
  error: undefined,
  success: false,
};

const submitReview = async (prevState: ReviewState, formData: FormData) => {
  const reviewText = formData.get('review') as string;

  if (!reviewText?.trim()) {
    return {
      ...prevState,
      error: 'Отзыв не может быть пустым',
      success: false,
    };
  }

  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          reject(new Error('Ошибка сервера'));
        } else {
          resolve(true);
        }
      }, 1500);
    });

    return { reviewText, error: undefined, success: true };
  } catch {
    return {
      ...prevState,
      error: 'Не удалось отправить отзыв.',
      success: false,
    };
  }
};

export const ReviewModal: FC = () => {
  const focusTransitionCountRef = useRef(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [isOpenModal, setIsOpenModal] = useState(false);

  const [state, formAction, isPending] = useActionState(
    submitReview,
    initialState,
  );

  const handleOpen = () => setIsOpenModal(true);
  const handleClose = () => {
    // focus to trigger element
    triggerRef.current?.focus();
    setIsOpenModal(false);
  };
  const handleConfirm = () => {
    formRef.current?.requestSubmit();
    handleClose();
  };

  const handleFocus = () => {
    focusTransitionCountRef.current += 1;
    console.log('количество фокусов', focusTransitionCountRef.current);
  };

  useEffect(() => {
    if (state.success && !isPending) {
      const timer = setTimeout(() => {
        formRef.current?.reset();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [state.success, isPending]);

  useEffect(() => {
    if (isOpenModal) inputRef.current?.focus();
  }, [isOpenModal]);

  return (
    <Box display='flex' style={{ cursor: 'pointer' }} alignItems='center'>
      {/* if element is focused then it is red color */}
      <Button onClick={handleOpen} ref={triggerRef} className={cls.button}>
        Оставить отзыв
      </Button>
      <Modal
        isOpen={isOpenModal}
        onConfirm={handleConfirm}
        onCancel={handleClose}
        confirmDisabled={isPending}
        confirmText={isPending ? 'Отправка...' : 'Отправить'}
        typeConfirm='submit'
        formId='review'
      >
        <Box display='flex' width='100%' minHeight='50px'>
          <form
            ref={formRef}
            id='review'
            action={formAction}
            style={{ width: '100%' }}
          >
            <Input
              ref={inputRef}
              type='text'
              name='review'
              onFocus={handleFocus}
            />
            {state.error && <Box className={cls.error}>{state.error}</Box>}
            {state.success && (
              <Box className={cls.success}>Отзыв успешно отправлен!</Box>
            )}
            {isPending && (
              <Box display='flex' alignItems='center' gap={1} color='#666'>
                <Spinner />
                Отправка отзыва...
              </Box>
            )}
          </form>
        </Box>
      </Modal>
    </Box>
  );
};
