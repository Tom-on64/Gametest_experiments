export const lib_es2020_promise_d_ts='/*! *****************************************************************************\nCopyright (c) Microsoft Corporation. All rights reserved.\nLicensed under the Apache License, Version 2.0 (the "License"); you may not use\nthis file except in compliance with the License. You may obtain a copy of the\nLicense at http://www.apache.org/licenses/LICENSE-2.0\n\nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,\nMERCHANTABLITY OR NON-INFRINGEMENT.\n\nSee the Apache Version 2.0 License for specific language governing permissions\nand limitations under the License.\n***************************************************************************** */\n\n\n\n/// <reference no-default-lib="true"/>\n\n\ninterface PromiseFulfilledResult<T> {\n    status: "fulfilled";\n    value: T;\n}\n\ninterface PromiseRejectedResult {\n    status: "rejected";\n    reason: any;\n}\n\ntype PromiseSettledResult<T> = PromiseFulfilledResult<T> | PromiseRejectedResult;\n\ninterface PromiseConstructor {\n    /**\n     * Creates a Promise that is resolved with an array of results when all\n     * of the provided Promises resolve or reject.\n     * @param values An array of Promises.\n     * @returns A new Promise.\n     */\n    allSettled<T extends readonly unknown[] | []>(values: T): Promise<{ -readonly [P in keyof T]: PromiseSettledResult<Awaited<T[P]>> }>;\n\n    /**\n     * Creates a Promise that is resolved with an array of results when all\n     * of the provided Promises resolve or reject.\n     * @param values An array of Promises.\n     * @returns A new Promise.\n     */\n    allSettled<T>(values: Iterable<T | PromiseLike<T>>): Promise<PromiseSettledResult<Awaited<T>>[]>;\n}\n';