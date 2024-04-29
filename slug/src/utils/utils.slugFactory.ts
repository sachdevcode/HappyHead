import slugify from 'slugify';
import * as dayjs from 'dayjs';

export const slugGenerator = async (
  firstName: string,
  lastName: string,
  fruit: string,
  dateOfBirth: string,
): Promise<string> => {
  const year = dayjs(dateOfBirth).year();
  const slug = slugify(`${firstName}_${lastName}_${fruit}${year}`, {
    lower: true,
    remove: /[!@#$%^&*()\+={}\[\]|;:'"<>,?/]/g,
  });

  return slug;
};
