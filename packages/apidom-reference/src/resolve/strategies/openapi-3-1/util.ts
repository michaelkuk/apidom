import { reduce } from 'ramda';
import { Element, isPrimitiveElement, toValue } from '@swagger-api/apidom-core';
import { SchemaElement } from '@swagger-api/apidom-ns-openapi-3-1';

import * as url from '../../../util/url';

export const resolveSchema$refField = (retrievalURI: string, schemaElement: SchemaElement) => {
  if (typeof schemaElement.$ref === 'undefined') {
    return undefined;
  }

  const hash = url.getHash(toValue(schemaElement.$ref));
  const inherited$id = toValue(schemaElement.meta.get('inherited$id'));
  const $refBaseURI = reduce(
    (acc: string, uri: string): string => {
      return url.resolve(acc, url.sanitize(url.stripHash(uri)));
    },
    retrievalURI,
    [...inherited$id, toValue(schemaElement.$ref)],
  );

  return `${$refBaseURI}${hash === '#' ? '' : hash}`;
};

export const resolveSchema$idField = (retrievalURI: string, schemaElement: SchemaElement) => {
  if (typeof schemaElement.$id === 'undefined') {
    return undefined;
  }

  const inherited$id = toValue(schemaElement.meta.get('inherited$id'));

  return reduce(
    (acc: string, $id: string): string => {
      return url.resolve(acc, url.sanitize(url.stripHash($id)));
    },
    retrievalURI,
    [...inherited$id, toValue(schemaElement.$id)],
  );
};

/**
 * Cached version of SchemaElement.refract.
 */
export const refractToSchemaElement = <T extends Element>(element: T) => {
  if (refractToSchemaElement.cache.has(element)) {
    return refractToSchemaElement.cache.get(element);
  }

  const refracted = SchemaElement.refract(element);
  refractToSchemaElement.cache.set(element, refracted);
  return refracted;
};
refractToSchemaElement.cache = new WeakMap();

export const maybeRefractToSchemaElement = <T extends Element>(element: T) => {
  /**
   * Conditional version of refractToSchemaElement, that acts as an identity
   * function for all non-primitive Element instances.
   */
  if (isPrimitiveElement(element)) {
    return refractToSchemaElement(element);
  }

  return element;
};
