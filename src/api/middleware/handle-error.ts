import { NextApiRequest, NextApiResponse } from 'next';
import { ErrorHandler } from 'next-connect';

export const handleError: ErrorHandler<NextApiRequest, NextApiResponse> = (
  err,
  req,
  res,
  next
) => {
  console.log('this is error:', err);

  if (err instanceof Error) {
    res.status(401).json({
      ok: false,
      error: 'You are not authorized',
    });

    return;
  }

  res.status(500).json({
    ok: false,
    error: 'something went wrong',
  });
};
