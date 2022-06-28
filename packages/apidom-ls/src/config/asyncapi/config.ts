import ApilintCodes from '../codes';
/**
 * AsyncApi >= 2.0.0 <=2.4.0 specification metas.
 */
import asyncapi2Meta from './asyncapi2/meta';
import asyncapiVersionMeta from './async-api-version/meta';
import jsonSchemaMeta from '../common/schema/meta';
import securitySchemeMeta from './security-scheme/meta';
import infoMeta from './info/meta';
import contactMeta from './contact/meta';
import channelItemMeta from './channel-item/meta';
import channelBindingsMeta from './channel-bindings/meta';
import serversMeta from './servers/meta';
import externalDocsMeta from './external-documentation/meta';
import licenseMeta from './license/meta';
import serverMeta from './server/meta';
import securityRequirementMeta from './security-requirement/meta';
import serverVariableMeta from './server-variable/meta';
import channelsMeta from './channels/meta';
import parametersMeta from './parameters/meta';
import parameterMeta from './parameter/meta';
import operationMeta from './operation/meta';
import operationBindingsMeta from './operation-bindings/meta';
import operationTraitMeta from './operation-trait/meta';
import serverBindingsMeta from './server-bindings/meta';
import messageBindingsMeta from './message-bindings/meta';
import messageMeta from './message/meta';
import messageTraitMeta from './message-trait/meta';
import componentsMeta from './components/meta';
import tagsMeta from './tags/meta';
import tagMeta from './tag/meta';
import correlationIDMeta from './correlation-ID/meta';
import oAuthFlowsMeta from './oauth-flows/meta';
import oAuthFlowMeta from './oauth-flow/meta';
/**
 * Binding metas.
 */
// HTTP
import httpMessageBindingMeta from './bindings/http/message-binding/meta';
import httpServerBindingMeta from './bindings/http/server-binding/meta';
// Kafka
import kafkaMessageBindingMeta from './bindings/kafka/message-binding/meta';
import kafkaServerBindingMeta from './bindings/kafka/server-binding/meta';

/**
 * Keys in this object represents either element type names
 * or value of one of the meta classes.
 */

export default {
  '*': {
    lint: [
      {
        code: ApilintCodes.DUPLICATE_KEYS,
        source: 'apilint',
        message: 'an object cannot contain duplicate keys',
        severity: 1,
        linterFunction: 'apilintNoDuplicateKeys',
        marker: 'key',
      },
    ],
  },
  /**
   * AsyncApi >= 2.0.0 <=2.4.0 specification metas.
   */
  info: infoMeta,
  contact: contactMeta,
  license: licenseMeta,
  operation: operationMeta,
  operationBindings: operationBindingsMeta,
  operationTrait: operationTraitMeta,
  channelItem: channelItemMeta,
  channelBindings: channelBindingsMeta,
  channels: channelsMeta,
  asyncApi2: asyncapi2Meta,
  asyncApiVersion: asyncapiVersionMeta,
  parameters: parametersMeta,
  parameter: parameterMeta,
  // 'json-schema-type': jsonSchemaTypeMeta,
  schema: jsonSchemaMeta,
  securityScheme: securitySchemeMeta,
  securityRequirement: securityRequirementMeta,
  servers: serversMeta,
  server: serverMeta,
  serverVariable: serverVariableMeta,
  externalDocumentation: externalDocsMeta,
  serverBindings: serverBindingsMeta,
  messageBindings: messageBindingsMeta,
  message: messageMeta,
  messageTrait: messageTraitMeta,
  components: componentsMeta,
  tags: tagsMeta,
  tag: tagMeta,
  correlationID: correlationIDMeta,
  oAuthFlows: oAuthFlowsMeta,
  oAuthFlow: oAuthFlowMeta,
  /**
   * Binding metas.
   */
  // HTTP
  httpServerBinding: httpServerBindingMeta,
  httpMessageBinding: httpMessageBindingMeta,
  // Kafka
  kafkaServerBinding: kafkaServerBindingMeta,
  kafkaMessageBinding: kafkaMessageBindingMeta,
};
