import type { FC } from 'react';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Controller, type SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signFormSchema } from 'shared/lib/helpers/validator';
import { setAccessToken, setUser, useSignInMutation } from 'entities/User';
import { getMessageFromError } from 'shared/lib/helpers/getMessageFromError';
import { getRouteMain, getRouteSignUp } from 'shared/consts/router';
import type { SignFormValues } from 'shared/types/signFormValues';

export const SignInForm: FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [signInRequestFn] = useSignInMutation();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting, isSubmitted },
  } = useForm<SignFormValues>({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(signFormSchema),
  });

  const submitHandler: SubmitHandler<SignFormValues> = async values => {
    try {
      const response = await signInRequestFn(values).unwrap();

      dispatch(setUser(response.user));
      dispatch(setAccessToken(response.accessToken));

      toast.success('Вы успешно авторизованы!');

      if (location.state?.from) navigate(location.state.from);

      navigate(getRouteMain());
    } catch (error) {
      toast.error(
        getMessageFromError(
          error,
          'Не известная ошибка при авторизации пользователя',
        ),
      );
    }
  };

  return (
    <Container component='main' style={{ flexGrow: 1 }} maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign In
        </Typography>
        <Box
          component='form'
          onSubmit={handleSubmit(submitHandler)}
          noValidate
          sx={{ my: 1 }}
        >
          <Controller
            name='email'
            control={control}
            render={({ field }) => (
              <TextField
                margin='normal'
                label='Email Address'
                type='email'
                fullWidth
                required
                autoComplete='email'
                error={!!errors.email?.message}
                helperText={errors.email?.message}
                {...field}
              />
            )}
          />
          <Controller
            name='password'
            control={control}
            render={({ field }) => (
              <TextField
                label='Password'
                type='password'
                error={!!errors.password?.message}
                helperText={errors.password?.message}
                margin='normal'
                fullWidth
                required
                {...field}
              />
            )}
          />
          <Button
            type='submit'
            disabled={isSubmitted && (!isValid || isSubmitting)}
            loading={isSubmitting}
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign IN
          </Button>
          <Box display='flex' justifyContent='center' flexGrow={1}>
            <Link component={RouterLink} to={getRouteSignUp()}>
              SIGN UP
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
