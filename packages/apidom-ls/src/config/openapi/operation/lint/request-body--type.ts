import ApilintCodes from '../../../codes';
import { LinterMeta } from '../../../../apidom-language-types';

const requestBodyTypeLint: LinterMeta = {
  code: ApilintCodes.OPENAPI3_0_OPERATION_FIELD_REQUEST_BODY_TYPE,
  source: 'apilint',
  message: 'requestBody must be an object',
  severity: 1,
  linterFunction: 'apilintElementOrClass',
  linterParams: ['requestBody'],
  marker: 'value',
  target: 'requestBody',
  data: {},
};

export default requestBodyTypeLint;