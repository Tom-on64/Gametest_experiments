export default"// Type definitions for Minecraft Bedrock Edition script APIs (experimental) 0.1\n// Project: https://docs.microsoft.com/minecraft/creator/\n// Definitions by: Jake Shirley <https://github.com/JakeShirley>\n//                 Mike Ammerlaan <https://github.com/mammerla>\n// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped\n\n/* *****************************************************************************\n   Copyright (c) Microsoft Corporation.\n   ***************************************************************************** */\n/**\n * This represents a placeholder object that represents a\n * secret string. The contents of that string are not available\n * to script; this object is just a placeholder.\n */\ndeclare class SecretString {\n    constructor(value: string);\n    equals(other: SecretString): boolean;\n}\n/**\n * A collection of server secrets defined in dedicated server\n * configuration.\n */\ndeclare class ServerSecrets {\n    /**\n     * A list of available, configured server secrets.\n     */\n    readonly 'names': string[];\n    /**\n     * @remarks\n     * Returns a SecretString that is a placeholder for a secret\n     * configured in a JSON file. In certain objects, like an\n     * HttpHeader, this Secret is resolved at the time of execution\n     * but is not made available to the script environment.\n     * @param name\n     */\n    get(name: string): SecretString;\n    protected constructor();\n}\n/**\n * A collection of server variables defined in dedicated server\n * configuration.\n */\ndeclare class ServerVariables {\n    /**\n     * A list of available, configured server variables.\n     */\n    readonly 'names': string[];\n    /**\n     * @remarks\n     * Returns the value of variable that has been configured in a\n     * dedicated server configuration JSON file.\n     * @param name\n     */\n    get(name: string): any;\n    protected constructor();\n}\n/**\n * A globally available object that returns a list of\n * dedicated-server configured secrets.\n */\ndeclare const secrets: ServerSecrets;\n/**\n * A globally available object that returns a list of\n * dedicated-server configured variables.\n */\ndeclare const variables: ServerVariables;\n";export const Namespace="declare namespace mojangminecraftserveradmin {\n    export class SecretString {\n        constructor(value: string);\n        equals(other: SecretString): boolean;\n    }\n    export class ServerSecrets {\n        readonly 'names': string[];\n        get(name: string): SecretString;\n        protected constructor();\n    }\n    export class ServerVariables {\n        readonly 'names': string[];\n        get(name: string): any;\n        protected constructor();\n    }\n    export const secrets: ServerSecrets;\n    export const variables: ServerVariables;\n}";