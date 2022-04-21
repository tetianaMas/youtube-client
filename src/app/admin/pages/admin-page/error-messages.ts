import { TValidationError } from 'src/app/shared/models/error-type';

export const ERRORS_MESSAGES: TValidationError = {
  title: [
    {
      type: 'required',
      message: 'Please enter a title.',
    },
    {
      type: 'minlength',
      message: 'The title is too short.',
    },
    {
      type: 'maxlength',
      message: 'The title is too long.',
    },
  ],
  description: [
    {
      type: 'maxlength',
      message: 'The description is too long.',
    },
  ],
  img: [
    {
      type: 'required',
      message: 'Please enter a link to the image.',
    },
    { type: 'invalidUrl', message: 'The image link is invalid.' },
  ],
  linkVideo: [
    {
      type: 'required',
      message: 'Please enter a link to the video.',
    },
    { type: 'invalidUrl', message: 'The video link is invalid.' },
  ],
  dateCreation: [
    { type: 'required', message: 'Please enter a creation date' },
    {
      type: 'invalidDate',
      message: 'The date is invalid. The date cannot be in the past.',
    },
  ],
};
