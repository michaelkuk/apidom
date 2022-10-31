import { ObjectElement, Attributes, Meta } from '@swagger-api/apidom-core';

class GooglePubSubOperationBinding extends ObjectElement {
  constructor(content?: Record<string, unknown>, meta?: Meta, attributes?: Attributes) {
    super(content, meta, attributes);
    this.element = 'googlepubsubOperationBinding';
    this.classes.push('operation-binding');
  }
}

export default GooglePubSubOperationBinding;
