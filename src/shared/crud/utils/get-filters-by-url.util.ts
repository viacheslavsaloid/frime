import { CRUD_FILTERS, CRUD_QUERY } from '../regexes';
import { decodeUnicodeString } from '../../../shared/utils';

export function getFiltersByUrl(url: string) {
  const decodedUrl = decodeUnicodeString(url);

  if (!decodedUrl.includes('?')) {
    return [];
  }

  const [_, queryUrl] = CRUD_QUERY.exec(decodedUrl) as any;
  const queryParts = queryUrl.split('&');

  return queryParts.map((queryPart: string) => {
    const [_, key, operator, value] = CRUD_FILTERS.exec(queryPart) as any;

    const isArray = key.includes('[]');

    return {
      key: isArray ? key.replace('[]', '') : key,
      operator,
      value: isArray ? [value] : value.includes(',') ? value.split(',') : value,
    };
  });
}
