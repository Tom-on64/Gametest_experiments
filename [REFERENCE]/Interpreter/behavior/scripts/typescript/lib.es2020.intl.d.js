export const lib_es2020_intl_d_ts='/*! *****************************************************************************\nCopyright (c) Microsoft Corporation. All rights reserved.\nLicensed under the Apache License, Version 2.0 (the "License"); you may not use\nthis file except in compliance with the License. You may obtain a copy of the\nLicense at http://www.apache.org/licenses/LICENSE-2.0\n\nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,\nMERCHANTABLITY OR NON-INFRINGEMENT.\n\nSee the Apache Version 2.0 License for specific language governing permissions\nand limitations under the License.\n***************************************************************************** */\n\n\n\n/// <reference no-default-lib="true"/>\n\n\ndeclare namespace Intl {\n\n    /**\n     * [Unicode BCP 47 Locale Identifiers](https://unicode.org/reports/tr35/#Unicode_Language_and_Locale_Identifiers) definition.\n     *\n     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).\n     */\n    type UnicodeBCP47LocaleIdentifier = string;\n\n    /**\n     * Unit to use in the relative time internationalized message.\n     *\n     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format#Parameters).\n     */\n    type RelativeTimeFormatUnit =\n        | "year"\n        | "years"\n        | "quarter"\n        | "quarters"\n        | "month"\n        | "months"\n        | "week"\n        | "weeks"\n        | "day"\n        | "days"\n        | "hour"\n        | "hours"\n        | "minute"\n        | "minutes"\n        | "second"\n        | "seconds";\n\n    /**\n     * The locale matching algorithm to use.\n     *\n     * [MDN](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation).\n     */\n    type RelativeTimeFormatLocaleMatcher = "lookup" | "best fit";\n\n    /**\n     * The format of output message.\n     *\n     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters).\n     */\n    type RelativeTimeFormatNumeric = "always" | "auto";\n\n    /**\n     * The length of the internationalized message.\n     *\n     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters).\n     */\n    type RelativeTimeFormatStyle = "long" | "short" | "narrow";\n\n    /**\n     * [BCP 47 language tag](http://tools.ietf.org/html/rfc5646) definition.\n     *\n     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument).\n     */\n    type BCP47LanguageTag = string;\n\n    /**\n     * An object with some or all of properties of `options` parameter\n     * of `Intl.RelativeTimeFormat` constructor.\n     *\n     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters).\n     */\n    interface RelativeTimeFormatOptions {\n        /** The locale matching algorithm to use. For information about this option, see [Intl page](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_negotiation). */\n        localeMatcher?: RelativeTimeFormatLocaleMatcher;\n        /** The format of output message. */\n        numeric?: RelativeTimeFormatNumeric;\n        /** The length of the internationalized message. */\n        style?: RelativeTimeFormatStyle;\n    }\n\n    /**\n     * An object with properties reflecting the locale\n     * and formatting options computed during initialization\n     * of the `Intl.RelativeTimeFormat` object\n     *\n     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions#Description).\n     */\n    interface ResolvedRelativeTimeFormatOptions {\n        locale: UnicodeBCP47LocaleIdentifier;\n        style: RelativeTimeFormatStyle;\n        numeric: RelativeTimeFormatNumeric;\n        numberingSystem: string;\n    }\n\n    /**\n     * An object representing the relative time format in parts\n     * that can be used for custom locale-aware formatting.\n     *\n     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts#Using_formatToParts).\n     */\n    interface RelativeTimeFormatPart {\n        type: string;\n        value: string;\n        unit?: RelativeTimeFormatUnit;\n    }\n\n    interface RelativeTimeFormat {\n        /**\n         * Formats a value and a unit according to the locale\n         * and formatting options of the given\n         * [`Intl.RelativeTimeFormat`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat)\n         * object.\n         *\n         * While this method automatically provides the correct plural forms,\n         * the grammatical form is otherwise as neutral as possible.\n         *\n         * It is the caller\'s responsibility to handle cut-off logic\n         * such as deciding between displaying "in 7 days" or "in 1 week".\n         * This API does not support relative dates involving compound units.\n         * e.g "in 5 days and 4 hours".\n         *\n         * @param value -  Numeric value to use in the internationalized relative time message\n         *\n         * @param unit - [Unit](https://tc39.es/ecma402/#sec-singularrelativetimeunit) to use in the relative time internationalized message.\n         *\n         * @throws `RangeError` if `unit` was given something other than `unit` possible values\n         *\n         * @returns {string} Internationalized relative time message as string\n         *\n         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/format).\n         */\n        format(value: number, unit: RelativeTimeFormatUnit): string;\n\n        /**\n         *  Returns an array of objects representing the relative time format in parts that can be used for custom locale-aware formatting.\n         *\n         *  @param value - Numeric value to use in the internationalized relative time message\n         *\n         *  @param unit - [Unit](https://tc39.es/ecma402/#sec-singularrelativetimeunit) to use in the relative time internationalized message.\n         *\n         *  @throws `RangeError` if `unit` was given something other than `unit` possible values\n         *\n         *  [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/formatToParts).\n         */\n        formatToParts(value: number, unit: RelativeTimeFormatUnit): RelativeTimeFormatPart[];\n\n        /**\n         * Provides access to the locale and options computed during initialization of this `Intl.RelativeTimeFormat` object.\n         *\n         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/resolvedOptions).\n         */\n        resolvedOptions(): ResolvedRelativeTimeFormatOptions;\n    }\n\n    /**\n     * The [`Intl.RelativeTimeFormat`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat)\n     * object is a constructor for objects that enable language-sensitive relative time formatting.\n     *\n     * [Compatibility](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat#Browser_compatibility).\n     */\n    const RelativeTimeFormat: {\n        /**\n         * Creates [Intl.RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat) objects\n         *\n         * @param locales - A string with a [BCP 47 language tag](http://tools.ietf.org/html/rfc5646), or an array of such strings.\n         *  For the general form and interpretation of the locales argument,\n         *  see the [`Intl` page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).\n         *\n         * @param options - An [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters)\n         *  with some or all of options of `RelativeTimeFormatOptions`.\n         *\n         * @returns [Intl.RelativeTimeFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RelativeTimeFormat) object.\n         *\n         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat).\n         */\n        new(\n            locales?: UnicodeBCP47LocaleIdentifier | UnicodeBCP47LocaleIdentifier[],\n            options?: RelativeTimeFormatOptions,\n        ): RelativeTimeFormat;\n\n        /**\n         * Returns an array containing those of the provided locales\n         * that are supported in date and time formatting\n         * without having to fall back to the runtime\'s default locale.\n         *\n         * @param locales - A string with a [BCP 47 language tag](http://tools.ietf.org/html/rfc5646), or an array of such strings.\n         *  For the general form and interpretation of the locales argument,\n         *  see the [`Intl` page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).\n         *\n         * @param options - An [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/RelativeTimeFormat#Parameters)\n         *  with some or all of options of the formatting.\n         *\n         * @returns An array containing those of the provided locales\n         *  that are supported in date and time formatting\n         *  without having to fall back to the runtime\'s default locale.\n         *\n         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/RelativeTimeFormat/supportedLocalesOf).\n         */\n        supportedLocalesOf(\n            locales?: UnicodeBCP47LocaleIdentifier | UnicodeBCP47LocaleIdentifier[],\n            options?: RelativeTimeFormatOptions,\n        ): UnicodeBCP47LocaleIdentifier[];\n    };\n\n    interface NumberFormatOptions {\n        compactDisplay?: "short" | "long" | undefined;\n        notation?: "standard" | "scientific" | "engineering" | "compact" | undefined;\n        signDisplay?: "auto" | "never" | "always" | "exceptZero" | undefined;\n        unit?: string | undefined;\n        unitDisplay?: "short" | "long" | "narrow" | undefined;\n        currencyDisplay?: string | undefined;\n        currencySign?: string | undefined;\n    }\n\n    interface ResolvedNumberFormatOptions {\n        compactDisplay?: "short" | "long";\n        notation?: "standard" | "scientific" | "engineering" | "compact";\n        signDisplay?: "auto" | "never" | "always" | "exceptZero";\n        unit?: string;\n        unitDisplay?: "short" | "long" | "narrow";\n        currencyDisplay?: string;\n        currencySign?: string;\n    }\n\n    interface DateTimeFormatOptions {\n        calendar?: string | undefined;\n        dayPeriod?: "narrow" | "short" | "long" | undefined;\n        numberingSystem?: string | undefined;\n\n        dateStyle?: "full" | "long" | "medium" | "short" | undefined;\n        timeStyle?: "full" | "long" | "medium" | "short" | undefined;\n        hourCycle?: "h11" | "h12" | "h23" | "h24" | undefined;\n    }\n\n    type LocaleHourCycleKey = "h12" | "h23" | "h11" | "h24";\n    type LocaleCollationCaseFirst = "upper" | "lower" | "false";\n\n    interface LocaleOptions {\n        /** A string containing the language, and the script and region if available. */\n        baseName?: string;\n        /** The part of the Locale that indicates the locale\'s calendar era. */\n        calendar?: string;\n        /** Flag that defines whether case is taken into account for the locale\'s collation rules. */\n        caseFirst?: LocaleCollationCaseFirst;\n        /** The collation type used for sorting */\n        collation?: string;\n        /** The time keeping format convention used by the locale. */\n        hourCycle?: LocaleHourCycleKey;\n        /** The primary language subtag associated with the locale. */\n        language?: string;\n        /** The numeral system used by the locale. */\n        numberingSystem?: string;\n        /** Flag that defines whether the locale has special collation handling for numeric characters. */\n        numeric?: boolean;\n        /** The region of the world (usually a country) associated with the locale. Possible values are region codes as defined by ISO 3166-1. */\n        region?: string;\n        /** The script used for writing the particular language used in the locale. Possible values are script codes as defined by ISO 15924. */\n        script?: string;\n    }\n\n    interface Locale extends LocaleOptions {\n        /** Gets the most likely values for the language, script, and region of the locale based on existing values. */\n        maximize(): Locale;\n        /** Attempts to remove information about the locale that would be added by calling `Locale.maximize()`. */\n        minimize(): Locale;\n        /** Returns the locale\'s full locale identifier string. */\n        toString(): BCP47LanguageTag;\n    }\n\n    /**\n     * Constructor creates [Intl.Locale](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale)\n     * objects\n     *\n     * @param tag - A string with a [BCP 47 language tag](http://tools.ietf.org/html/rfc5646).\n     *  For the general form and interpretation of the locales argument,\n     *  see the [`Intl` page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation).\n     *\n     * @param options - An [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/Locale#Parameters) with some or all of options of the locale.\n     *\n     * @returns [Intl.Locale](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale) object.\n     *\n     * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale).\n     */\n    const Locale: {\n        new (tag?: BCP47LanguageTag, options?: LocaleOptions): Locale;\n    };\n\n     interface DisplayNamesOptions {\n        locale: UnicodeBCP47LocaleIdentifier;\n        localeMatcher: RelativeTimeFormatLocaleMatcher;\n        style: RelativeTimeFormatStyle;\n        type: "language" | "region" | "script" | "currency";\n        fallback: "code" | "none";\n    }\n\n    interface DisplayNames {\n        /**\n         * Receives a code and returns a string based on the locale and options provided when instantiating\n         * [`Intl.DisplayNames()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames)\n         *\n         * @param code The `code` to provide depends on the `type` passed to display name during creation:\n         *  - If the type is `"region"`, code should be either an [ISO-3166 two letters region code](https://www.iso.org/iso-3166-country-codes.html),\n         *    or a [three digits UN M49 Geographic Regions](https://unstats.un.org/unsd/methodology/m49/).\n         *  - If the type is `"script"`, code should be an [ISO-15924 four letters script code](https://unicode.org/iso15924/iso15924-codes.html).\n         *  - If the type is `"language"`, code should be a `languageCode` ["-" `scriptCode`] ["-" `regionCode` ] *("-" `variant` )\n         *    subsequence of the unicode_language_id grammar in [UTS 35\'s Unicode Language and Locale Identifiers grammar](https://unicode.org/reports/tr35/#Unicode_language_identifier).\n         *    `languageCode` is either a two letters ISO 639-1 language code or a three letters ISO 639-2 language code.\n         *  - If the type is `"currency"`, code should be a [3-letter ISO 4217 currency code](https://www.iso.org/iso-4217-currency-codes.html).\n         *\n         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/of).\n         */\n        of(code: string): string | undefined;\n        /**\n         * Returns a new object with properties reflecting the locale and style formatting options computed during the construction of the current\n         * [`Intl/DisplayNames`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames) object.\n         *\n         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/resolvedOptions).\n         */\n        resolvedOptions(): DisplayNamesOptions;\n    }\n\n    /**\n     * The [`Intl.DisplayNames()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames)\n     * object enables the consistent translation of language, region and script display names.\n     *\n     * [Compatibility](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames#browser_compatibility).\n     */\n    const DisplayNames: {\n        prototype: DisplayNames;\n\n        /**\n         * @param locales A string with a BCP 47 language tag, or an array of such strings.\n         *   For the general form and interpretation of the `locales` argument, see the [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation)\n         *   page.\n         *\n         * @param options An object for setting up a display name.\n         *\n         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/DisplayNames).\n         */\n        new(locales?: BCP47LanguageTag | BCP47LanguageTag[], options?: Partial<DisplayNamesOptions>): DisplayNames;\n\n        /**\n         * Returns an array containing those of the provided locales that are supported in display names without having to fall back to the runtime\'s default locale.\n         *\n         * @param locales A string with a BCP 47 language tag, or an array of such strings.\n         *   For the general form and interpretation of the `locales` argument, see the [Intl](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locale_identification_and_negotiation)\n         *   page.\n         *\n         * @param options An object with a locale matcher.\n         *\n         * @returns An array of strings representing a subset of the given locale tags that are supported in display names without having to fall back to the runtime\'s default locale.\n         *\n         * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DisplayNames/supportedLocalesOf).\n         */\n        supportedLocalesOf(locales: BCP47LanguageTag | BCP47LanguageTag[], options?: {localeMatcher: RelativeTimeFormatLocaleMatcher}): BCP47LanguageTag[];\n    };\n\n}\n';