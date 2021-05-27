import './refractor/registration';

export {
  isRefElement,
  isLinkElement,
  isMemberElement,
  isObjectElement,
  isArrayElement,
  isBooleanElement,
  isNullElement,
  isElement,
  isNumberElement,
  isStringElement,
} from 'apidom';

export { default } from './namespace';

export {
  isAsyncApi2_0Element,
  isAsyncApiVersionElement,
  isChannelBindingsElement,
  isChannelItemElement,
  isChannelsElement,
  isComponentsElement,
  isContactElement,
  isIdentifierElement,
  isInfoElement,
  isLicenseElement,
  isOperationElement,
  isParameterElement,
  isParametersElement,
  isReferenceElement,
  isReferenceElementExternal,
  isSchemaElement,
  isSecurityRequirementElement,
  isServerElement,
  isServerBindingsElement,
  isServersElement,
  isServerVariableElement,
} from './predicates';

export {
  isAsyncApi2_0LikeElement,
  isParameterLikeElement,
  isReferenceLikeElement,
  isSchemaLikeElement,
  isSecurityRequirementLikeElement,
  isServerLikeElement,
  isAsyncApiExtension,
} from './refractor/predicates';

export { keyMap, getNodeType } from './traversal/visitor';

/**
 * AsyncApi 2.0.0 specification elements.
 */
export { default as AsyncApi2_0Element } from './elements/AsyncApi2-0';
export { default as AsyncApiVersionElement } from './elements/AsyncApiVersion';
export { default as ChannelBindingsElement } from './elements/ChannelBindings';
export { default as ChannelItemElement } from './elements/ChannelItem';
export { default as ChannelsElement } from './elements/Channels';
export { default as ComponentsElement } from './elements/Components';
export { default as ContactElement } from './elements/Contact';
export { default as CorrelationIDElement } from './elements/CorrelationID';
export { default as DefaultContentTypeElement } from './elements/DefaultContentType';
export { default as ExternalDocumentationElement } from './elements/ExternalDocumentation';
export { default as IdentifierElement } from './elements/Identifier';
export { default as InfoElement } from './elements/Info';
export { default as LicenseElement } from './elements/License';
export { default as OAuthFlowElement } from './elements/OAuthFlow';
export { default as OAuthFlowsElement } from './elements/OAuthFlows';
export { default as OperationElement } from './elements/Operation';
export { default as ParameterElement } from './elements/Parameter';
export { default as ParametersElement } from './elements/Parameters';
export { default as ReferenceElement } from './elements/Reference';
export { default as SchemaElement } from './elements/Schema';
export { default as SecurityRequirementElement } from './elements/SecurityRequirement';
export { default as ServerElement } from './elements/Server';
export { default as ServerBindingsElement } from './elements/ServerBindings';
export { default as ServersElement } from './elements/Servers';
export { default as ServerVariableElement } from './elements/ServerVariable';
export { default as TagElement } from './elements/Tag';
export { default as TagsElement } from './elements/Tags';

/**
 * Binding elements.
 */
// AMQP
export { default as AmqpChannelBindingElement } from './elements/bindings/amqp/AmqpChannelBinding';
export { default as AmqpMessageBindingElement } from './elements/bindings/amqp/AmqpMessageBinding';
export { default as AmqpOperationBindingElement } from './elements/bindings/amqp/AmqpOperationBinding';
// HTTP
export { default as HttpMessageBindingElement } from './elements/bindings/http/HttpMessageBinding';
export { default as HttpOperationBindingElement } from './elements/bindings/http/HttpOperationBinding';
// Kafka
export { default as KafkaMessageBindingElement } from './elements/bindings/kafka/KafkaMessageBinding';
export { default as KafkaOperationBindingElement } from './elements/bindings/kafka/KafkaOperationBinding';
// MQTT
export { default as MqttChannelBindingElement } from './elements/bindings/mqtt/MqttChannelBinding';
export { default as MqttMessageBindingElement } from './elements/bindings/mqtt/MqttMessageBinding';
export { default as MqttServerBindingElement } from './elements/bindings/mqtt/MqttServerBinding';
// WebSocket
export { default as WebSocketChannelBindingElement } from './elements/bindings/web-socket/WebSocketChannelBinding';
