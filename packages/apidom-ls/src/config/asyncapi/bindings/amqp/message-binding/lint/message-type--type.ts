import ApilintCodes from '../../../../../codes';
import { LinterMeta } from '../../../../../../apidom-language-types';

const messageTypeTypeLint: LinterMeta = {
  code: ApilintCodes.ASYNCAPI2_AMQP_MESSAGE_BINDING_FIELD_MESSAGE_TYPE_TYPE,
  source: 'apilint',
  message: "'messageType' value must be a string",
  severity: 1,
  linterFunction: 'apilintType',
  linterParams: ['string'],
  marker: 'value',
  target: 'messageType',
  data: {},
};

export default messageTypeTypeLint;