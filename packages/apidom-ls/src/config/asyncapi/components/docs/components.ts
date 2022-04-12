const componentsDocs = [
  {
    target: 'schemas',
    docs: 'Map[`string`, [Schema Object](https://www.asyncapi.com/docs/specifications/v2.3.0#schemaObject) | [Reference Object](https://www.asyncapi.com/docs/specifications/v2.3.0#referenceObject)]\n\\\n\\\nAn object to hold reusable [Schema Objects](https://www.asyncapi.com/docs/specifications/v2.3.0#schemaObject).',
  },
  {
    target: 'servers',
    docs: 'Map[`string`, [Server Object](https://www.asyncapi.com/docs/specifications/v2.3.0#serverObject) | [Reference Object](https://www.asyncapi.com/docs/specifications/v2.3.0#referenceObject)]\n\\\n\\\nAn object to hold reusable [Server Objects](https://www.asyncapi.com/docs/specifications/v2.3.0#serverObject).',
  },
  {
    target: 'channels',
    docs: 'Map[`string`, [Server Object](https://www.asyncapi.com/docs/specifications/v2.3.0#serverObject) | [Reference Object](https://www.asyncapi.com/docs/specifications/v2.3.0#referenceObject)]\n\\\n\\\nAn object to hold reusable [Server Objects](https://www.asyncapi.com/docs/specifications/v2.3.0#serverObject).',
  },
  {
    target: 'messages',
    docs: 'Map[`string`, [Message Object](https://www.asyncapi.com/docs/specifications/v2.3.0#messageObject) \\| [Reference Object](https://www.asyncapi.com/docs/specifications/v2.3.0#referenceObject)]\n\\\n\\\nAn object to hold reusable [Message Objects](https://www.asyncapi.com/docs/specifications/v2.3.0#messageObject).',
  },
  {
    target: 'securitySchemes',
    docs: 'Map[`string`, [Security Scheme Object](https://www.asyncapi.com/docs/specifications/v2.3.0#securitySchemeObject) \\| [Reference Object](https://www.asyncapi.com/docs/specifications/v2.3.0#referenceObject)]\n\\\n\\\nAn object to hold reusable [Security Scheme Object](https://www.asyncapi.com/docs/specifications/v2.3.0#securitySchemeObject).',
  },
  {
    target: 'parameters',
    docs: 'Map[`string`, [Parameter Object](https://www.asyncapi.com/docs/specifications/v2.3.0#parameterObject) | [Reference Object](https://www.asyncapi.com/docs/specifications/v2.3.0#referenceObject)]\n\\\n\\\nAn object to hold reusable [Parameter Objects](https://www.asyncapi.com/docs/specifications/v2.3.0#parameterObject).',
  },
  {
    target: 'correlationIds',
    docs: 'Map[`string`, [Correlation ID Object](https://www.asyncapi.com/docs/specifications/v2.3.0#correlationIdObject) | [Reference Object](https://www.asyncapi.com/docs/specifications/v2.3.0#referenceObject)]\n\\\n\\\nAn object to hold reusable [Correlation ID Objects](https://www.asyncapi.com/docs/specifications/v2.3.0#correlationIdObject).',
  },
  {
    target: 'operationTraits',
    docs: 'Map[`string`, [Operation Trait Object](https://www.asyncapi.com/docs/specifications/v2.3.0#operationTraitObject) | [Reference Object](https://www.asyncapi.com/docs/specifications/v2.3.0#referenceObject)]\n\\\n\\\nAn object to hold reusable [Operation Trait Objects](https://www.asyncapi.com/docs/specifications/v2.3.0#operationTraitObject).',
  },
  {
    target: 'messageTraits',
    docs: 'Map[`string`, [Message Trait Object](https://www.asyncapi.com/docs/specifications/v2.3.0#messageTraitObject) | [Reference Object](https://www.asyncapi.com/docs/specifications/v2.3.0#referenceObject)]\n\\\n\\\nAn object to hold reusable [Message Trait Objects](https://www.asyncapi.com/docs/specifications/v2.3.0#messageTraitObject).',
  },
  {
    target: 'serverBindings',
    docs: 'Map[`string`, [Server Bindings Object](https://www.asyncapi.com/docs/specifications/v2.3.0#serverBindingsObject) | [Reference Object](https://www.asyncapi.com/docs/specifications/v2.3.0#referenceObject)]\n\\\n\\\nAn object to hold reusable [Server Bindings Objects](https://www.asyncapi.com/docs/specifications/v2.3.0#serverBindingsObject).',
  },
  {
    target: 'channelBindings',
    docs: 'Map[`string`, [Channel Bindings Object](https://www.asyncapi.com/docs/specifications/v2.3.0#channelBindingsObject) | [Reference Object](https://www.asyncapi.com/docs/specifications/v2.3.0#referenceObject)]\n\\\n\\\nAn object to hold reusable [Channel Bindings Objects](https://www.asyncapi.com/docs/specifications/v2.3.0#channelBindingsObject).',
  },
  {
    target: 'operationBindings',
    docs: 'Map[`string`, [Operation Bindings Object](https://www.asyncapi.com/docs/specifications/v2.3.0#operationBindingsObject) | [Reference Object](https://www.asyncapi.com/docs/specifications/v2.3.0#referenceObject)]\n\\\n\\\nAn object to hold reusable [Operation Bindings Objects](https://www.asyncapi.com/docs/specifications/v2.3.0#operationBindingsObject).',
  },
  {
    target: 'messageBindings',
    docs: 'Map[`string`, [Message Bindings Object](https://www.asyncapi.com/docs/specifications/v2.3.0#messageBindingsObject) | [Reference Object](https://www.asyncapi.com/docs/specifications/v2.3.0#referenceObject)]\n\\\n\\\nAn object to hold reusable [Message Bindings Objects](https://www.asyncapi.com/docs/specifications/v2.3.0#messageBindingsObject).',
  },
  {
    docs: '#### [Components Object](https://www.asyncapi.com/docs/specifications/v2.3.0#componentsObject)\n\nHolds a set of reusable objects for different aspects of the AsyncAPI specification.\nAll objects defined within the components object will have no effect on the API unless they are explicitly referenced from properties outside the components object.\n\n##### Fixed Fields\n\nField Name | Type | Description\n---|:---|---\nschemas | Map[`string`, [Schema Object](https://www.asyncapi.com/docs/specifications/v2.3.0#schemaObject) \\| [Reference Object](https://www.asyncapi.com/docs/specifications/v2.3.0#referenceObject)] | An object to hold reusable [Schema Objects](https://www.asyncapi.com/docs/specifications/v2.3.0#schemaObject).\nservers | Map[`string`, [Server Object](https://www.asyncapi.com/docs/specifications/v2.3.0#serverObject) \\| [Reference Object](https://www.asyncapi.com/docs/specifications/v2.3.0#referenceObject)] | An object to hold reusable [Server Objects](https://www.asyncapi.com/docs/specifications/v2.3.0#serverObject).\nchannels | Map[`string`, [Channel Item Object](https://www.asyncapi.com/docs/specifications/v2.3.0#channelItemObject)] | An object to hold reusable [Channel Item Objects](https://www.asyncapi.com/docs/specifications/v2.3.0#channelItemObject).\nmessages | Map[`string`, [Message Object](https://www.asyncapi.com/docs/specifications/v2.3.0#messageObject) \\| [Reference Object](https://www.asyncapi.com/docs/specifications/v2.3.0#referenceObject)] | An object to hold reusable [Message Objects](https://www.asyncapi.com/docs/specifications/v2.3.0#messageObject).\nsecuritySchemes| Map[`string`, [Security Scheme Object](https://www.asyncapi.com/docs/specifications/v2.3.0#securitySchemeObject) \\| [Reference Object](https://www.asyncapi.com/docs/specifications/v2.3.0#referenceObject)] | An object to hold reusable [Security Scheme Objects](https://www.asyncapi.com/docs/specifications/v2.3.0#securitySchemeObject).\nparameters | Map[`string`, [Parameter Object](https://www.asyncapi.com/docs/specifications/v2.3.0#parameterObject) \\| [Reference Object](https://www.asyncapi.com/docs/specifications/v2.3.0#referenceObject)] | An object to hold reusable [Parameter Objects](https://www.asyncapi.com/docs/specifications/v2.3.0#parameterObject).\ncorrelationIds | Map[`string`, [Correlation ID Object](https://www.asyncapi.com/docs/specifications/v2.3.0#correlationIdObject) \\| [Reference Object](https://www.asyncapi.com/docs/specifications/v2.3.0#referenceObject)] | An object to hold reusable [Correlation ID Objects](https://www.asyncapi.com/docs/specifications/v2.3.0#correlationIdObject).\noperationTraits | Map[`string`, [Operation Trait Object](https://www.asyncapi.com/docs/specifications/v2.3.0#operationTraitObject) \\| [Reference Object](https://www.asyncapi.com/docs/specifications/v2.3.0#referenceObject)]  | An object to hold reusable [Operation Trait Objects](https://www.asyncapi.com/docs/specifications/v2.3.0#operationTraitObject).\nmessageTraits | Map[`string`, [Message Trait Object](https://www.asyncapi.com/docs/specifications/v2.3.0#messageTraitObject) \\| [Reference Object](https://www.asyncapi.com/docs/specifications/v2.3.0#referenceObject)]  | An object to hold reusable [Message Trait Objects](https://www.asyncapi.com/docs/specifications/v2.3.0#messageTraitObject).\nserverBindings | Map[`string`, [Server Bindings Object](https://www.asyncapi.com/docs/specifications/v2.3.0#serverBindingsObject) \\| [Reference Object](https://www.asyncapi.com/docs/specifications/v2.3.0#referenceObject)]  | An object to hold reusable [Server Bindings Objects](https://www.asyncapi.com/docs/specifications/v2.3.0#serverBindingsObject).\nchannelBindings | Map[`string`, [Channel Bindings Object](https://www.asyncapi.com/docs/specifications/v2.3.0#channelBindingsObject) \\| [Reference Object](https://www.asyncapi.com/docs/specifications/v2.3.0#referenceObject)]  | An object to hold reusable [Channel Bindings Objects](https://www.asyncapi.com/docs/specifications/v2.3.0#channelBindingsObject).\noperationBindings | Map[`string`, [Operation Bindings Object](https://www.asyncapi.com/docs/specifications/v2.3.0#operationBindingsObject) \\| [Reference Object](https://www.asyncapi.com/docs/specifications/v2.3.0#referenceObject)]  | An object to hold reusable [Operation Bindings Objects](https://www.asyncapi.com/docs/specifications/v2.3.0#operationBindingsObject).\nmessageBindings | Map[`string`, [Message Bindings Object](https://www.asyncapi.com/docs/specifications/v2.3.0#messageBindingsObject) \\| [Reference Object](https://www.asyncapi.com/docs/specifications/v2.3.0#referenceObject)]  | An object to hold reusable [Message Bindings Objects](https://www.asyncapi.com/docs/specifications/v2.3.0#messageBindingsObject).\n\nThis object can be extended with [Specification Extensions](https://www.asyncapi.com/docs/specifications/v2.3.0#specificationExtensions).\n\\\n\\\nAll the fixed fields declared above are objects that MUST use keys that match the regular expression: `^[a-zA-Z0-9\\.\\-_]+$`.\n\\\n\\\nField Name Examples:\n\n```\nUser\nUser_1\nUser_Name\nuser-name\nmy.org.User\n```\n\n##### Components Object Example\n\n\n\\\nJSON\n```json\n{\n  "components": {\n    "schemas": {\n      "Category": {\n        "type": "object",\n        "properties": {\n          "id": {\n            "type": "integer",\n            "format": "int64"\n          },\n          "name": {\n            "type": "string"\n          }\n        }\n      },\n      "Tag": {\n        "type": "object",\n        "properties": {\n          "id": {\n            "type": "integer",\n            "format": "int64"\n          },\n          "name": {\n            "type": "string"\n          }\n        }\n      }\n    },\n    "servers": {\n      "development": {\n        "url": "development.gigantic-server.com",\n        "description": "Development server",\n        "protocol": "amqp",\n        "protocolVersion": "0.9.1"\n      }\n    },\n    "channels": {\n      "user/signedupages/userSignUp"\n          }\n        }\n      }\n    },\n    "messages": {\n      "userSignUp": {\n        "summary": "Action to sign a user up.",\n        "description": "Multiline description of what this action does.\\nHere you have another line.\\n",\n        "tags": [\n          {\n            "name": "user"\n          },\n          {\n            "name": "signup"\n          }\n        ],\n        "headers": {\n          "type": "object",\n          "properties": {\n            "applicationInstanceId": {\n              "description": "Unique identifier for a given instance of the publishing application",\n              "type": "string"\n            }\n          }\n        },\n        "payload": {\n          "type": "object",\n          "properties": {\n            "user": {\n              "$ref": "#/components/schemas/userCreate"\n            },\n            "signup": {\n              "$ref": "#/components/schemas/signu: {\n        "description": "Id of the user.",\n        "schema": {\n          "type": "string"\n        }\n      }\n    },\n    "correlationIds": {\n      "default": {\n        "description": "Default Correlation ID",\n        "location": "$message.header#/correlationId"\n      }\n    },\n    "messageTraits": {\n      "commonHeaders": {\n        "headers": {\n          "type": "object",\n          "properties": {\n            "my-app-header": {\n              "type": "integer",\n              "minimum": 0,\n              "maximum": 100\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```\n\n\n\\\nYAML\n```yaml\ncomponents:\n  schemas:\n    Category:\n      type: object\n      properties:\n        id:\n          type: integer\n          format: int64\n        name:\n          type: string\n    Tag:\n      type: object\n      properties:\n        id:\n          type: integer\n          format: int64\n        name:\n          type: string\n  servers:\n    development:\n      url: development.gigantic-server.com\n      description: Development server\n      protocol: amqp\n      protocolVersion: 0.9.1\n  channels:\n    user/signedup:\n      subscribe:\n        message:\n          $ref: "#/components/messages/userSignUp"\n  messages:\n    userSignUp:\n      summary: Action to sign a user up.\n      description: |\n        Multiline description of what this action does.\n        Here you have another line.\n      tags:\n        - name: user\n        - name: signup\n      headers:\n        type: object\n        properties:\n          applicationInstanceId:\n            description: Unique identifier for a given instance of the publishing application\n            type: string\n      payload:\n        type: object\n        properties:\n          user:\n            $ref: "#/components/schemas/userCreate"\n          signup:\n            $ref: "#/components/schemas/signup"\n  parameters:\n    userId:\n      description: Id of the user.\n      schema:\n        type: string\n  correlationIds:\n    default:\n      description: Default Correlation ID\n      location: $message.header#/correlationId\n  messageTraits:\n    commonHeaders:\n      headers:\n        type: object\n        properties:\n          my-app-header:\n            type: integer\n            minimum: 0\n            maximum: 100\n```',
  },
];
export default componentsDocs;
