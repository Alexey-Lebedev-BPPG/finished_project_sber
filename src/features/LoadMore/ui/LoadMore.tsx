import { Alert, CircularProgress, Stack } from '@mui/material';
import { useRef, type FC } from 'react';
import { useLoadMore } from '../model/lib/hooks/useLoadMore';

export const LoadMore: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { isEndOfList, isFetching, isEmpty } = useLoadMore({ ref });

  return (
    <Stack
      ref={ref}
      direction='row'
      justifyContent='center'
      alignItems='center'
      sx={{ my: 5 }}
    >
      {isFetching && <CircularProgress />}
      {isEndOfList && !isEmpty && (
        <Alert severity='success'>End of list!</Alert>
      )}
    </Stack>
  );
};
