import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
declare const _default: import("vue").DefineComponent<{
    readonly parsedValue: {
        readonly type: import("vue").PropType<[dayjs.Dayjs, dayjs.Dayjs]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly visible: BooleanConstructor;
    readonly actualVisible: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly format: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly parsedValue: {
            readonly type: import("vue").PropType<[dayjs.Dayjs, dayjs.Dayjs]>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly visible: BooleanConstructor;
        readonly actualVisible: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
        readonly format: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
    }>> & {
        onPick?: ((...args: any[]) => any) | undefined;
        "onSelect-range"?: ((...args: any[]) => any) | undefined;
        "onSet-picker-option"?: ((...args: any[]) => any) | undefined;
    }>>;
    emit: (event: "pick" | "select-range" | "set-picker-option", ...args: any[]) => void;
    makeSelectRange: (start: number, end: number) => number[];
    t: import("element-plus/es/hooks").Translator;
    lang: import("vue").Ref<string>;
    nsTime: {
        namespace: import("vue").ComputedRef<string>;
        b: (blockSuffix?: string) => string;
        e: (element?: string | undefined) => string;
        m: (modifier?: string | undefined) => string;
        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
        em: (element?: string | undefined, modifier?: string | undefined) => string;
        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
        cssVar: (object: Record<string, string>) => Record<string, string>;
        cssVarName: (name: string) => string;
        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
        cssVarBlockName: (name: string) => string;
    };
    nsPicker: {
        namespace: import("vue").ComputedRef<string>;
        b: (blockSuffix?: string) => string;
        e: (element?: string | undefined) => string;
        m: (modifier?: string | undefined) => string;
        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
        em: (element?: string | undefined, modifier?: string | undefined) => string;
        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
        is: {
            (name: string, state: boolean | undefined): string;
            (name: string): string;
        };
        cssVar: (object: Record<string, string>) => Record<string, string>;
        cssVarName: (name: string) => string;
        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
        cssVarBlockName: (name: string) => string;
    };
    pickerBase: any;
    arrowControl: any;
    disabledHours: any;
    disabledMinutes: any;
    disabledSeconds: any;
    defaultValue: any;
    startContainerKls: import("vue").ComputedRef<string[]>;
    endContainerKls: import("vue").ComputedRef<string[]>;
    startTime: import("vue").ComputedRef<dayjs.Dayjs>;
    endTime: import("vue").ComputedRef<dayjs.Dayjs>;
    oldValue: import("vue").Ref<string | {
        clone: () => dayjs.Dayjs;
        isValid: () => boolean;
        year: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        month: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        date: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        day: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        hour: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        minute: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        second: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        millisecond: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        set: (unit: dayjs.UnitType, value: number) => dayjs.Dayjs;
        get: (unit: dayjs.UnitType) => number;
        add: (value: number, unit?: dayjs.ManipulateType | undefined) => dayjs.Dayjs;
        subtract: (value: number, unit?: dayjs.ManipulateType | undefined) => dayjs.Dayjs;
        startOf: (unit: dayjs.OpUnitType) => dayjs.Dayjs;
        endOf: (unit: dayjs.OpUnitType) => dayjs.Dayjs;
        format: (template?: string | undefined) => string;
        diff: (date?: string | number | Date | dayjs.Dayjs | null | undefined, unit?: "year" | "years" | "month" | "date" | "dates" | "week" | "D" | "M" | "y" | "weeks" | "months" | "m" | "s" | "day" | "hour" | "minute" | "second" | "millisecond" | "hours" | "minutes" | "seconds" | "milliseconds" | "days" | "d" | "h" | "ms" | "w" | "quarter" | "quarters" | "Q" | undefined, float?: boolean | undefined) => number;
        valueOf: () => number;
        unix: () => number;
        daysInMonth: () => number;
        toDate: () => Date;
        toJSON: () => string;
        toISOString: () => string;
        toString: () => string;
        utcOffset: () => number;
        isBefore: (date: string | number | Date | dayjs.Dayjs | null | undefined, unit?: dayjs.OpUnitType | undefined) => boolean;
        isSame: (date: string | number | Date | dayjs.Dayjs | null | undefined, unit?: dayjs.OpUnitType | undefined) => boolean;
        isAfter: (date: string | number | Date | dayjs.Dayjs | null | undefined, unit?: dayjs.OpUnitType | undefined) => boolean;
        locale: {
            (): string;
            (preset: string | ILocale, object?: Partial<ILocale> | undefined): dayjs.Dayjs;
        };
        localeData: () => dayjs.InstanceLocaleDataReturn;
        week: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        weekYear: () => number;
        dayOfYear: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        isSameOrAfter: (date: string | number | Date | dayjs.Dayjs | null | undefined, unit?: dayjs.OpUnitType | undefined) => boolean;
        isSameOrBefore: (date: string | number | Date | dayjs.Dayjs | null | undefined, unit?: dayjs.OpUnitType | undefined) => boolean;
    } | {
        clone: () => dayjs.Dayjs;
        isValid: () => boolean;
        year: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        month: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        date: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        day: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        hour: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        minute: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        second: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        millisecond: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        set: (unit: dayjs.UnitType, value: number) => dayjs.Dayjs;
        get: (unit: dayjs.UnitType) => number;
        add: (value: number, unit?: dayjs.ManipulateType | undefined) => dayjs.Dayjs;
        subtract: (value: number, unit?: dayjs.ManipulateType | undefined) => dayjs.Dayjs;
        startOf: (unit: dayjs.OpUnitType) => dayjs.Dayjs;
        endOf: (unit: dayjs.OpUnitType) => dayjs.Dayjs;
        format: (template?: string | undefined) => string;
        diff: (date?: string | number | Date | dayjs.Dayjs | null | undefined, unit?: "year" | "years" | "month" | "date" | "dates" | "week" | "D" | "M" | "y" | "weeks" | "months" | "m" | "s" | "day" | "hour" | "minute" | "second" | "millisecond" | "hours" | "minutes" | "seconds" | "milliseconds" | "days" | "d" | "h" | "ms" | "w" | "quarter" | "quarters" | "Q" | undefined, float?: boolean | undefined) => number;
        valueOf: () => number;
        unix: () => number;
        daysInMonth: () => number;
        toDate: () => Date;
        toJSON: () => string;
        toISOString: () => string;
        toString: () => string;
        utcOffset: () => number;
        isBefore: (date: string | number | Date | dayjs.Dayjs | null | undefined, unit?: dayjs.OpUnitType | undefined) => boolean;
        isSame: (date: string | number | Date | dayjs.Dayjs | null | undefined, unit?: dayjs.OpUnitType | undefined) => boolean;
        isAfter: (date: string | number | Date | dayjs.Dayjs | null | undefined, unit?: dayjs.OpUnitType | undefined) => boolean;
        locale: {
            (): string;
            (preset: string | ILocale, object?: Partial<ILocale> | undefined): dayjs.Dayjs;
        };
        localeData: () => dayjs.InstanceLocaleDataReturn;
        week: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        weekYear: () => number;
        dayOfYear: {
            (): number;
            (value: number): dayjs.Dayjs;
        };
        isSameOrAfter: (date: string | number | Date | dayjs.Dayjs | null | undefined, unit?: dayjs.OpUnitType | undefined) => boolean;
        isSameOrBefore: (date: string | number | Date | dayjs.Dayjs | null | undefined, unit?: dayjs.OpUnitType | undefined) => boolean;
    }[] | undefined>;
    handleCancel: () => void;
    showSeconds: import("vue").ComputedRef<boolean>;
    amPmMode: import("vue").ComputedRef<"" | "A" | "a">;
    handleConfirm: (visible?: boolean) => void;
    handleMinChange: (date: Dayjs) => void;
    handleMaxChange: (date: Dayjs) => void;
    isValidValue: (_date: Dayjs[]) => boolean;
    handleChange: (start: Dayjs, end: Dayjs) => void;
    btnConfirmDisabled: import("vue").ComputedRef<boolean>;
    selectionRange: import("vue").Ref<number[]>;
    setMinSelectionRange: (start: number, end: number) => void;
    offset: import("vue").ComputedRef<11 | 8>;
    setMaxSelectionRange: (start: number, end: number) => void;
    changeSelectionRange: (step: number) => void;
    handleKeydown: (event: KeyboardEvent) => void;
    disabledHours_: (role: string, compare?: dayjs.Dayjs | undefined) => number[];
    disabledMinutes_: (hour: number, role: string, compare?: dayjs.Dayjs | undefined) => any;
    disabledSeconds_: (hour: number, minute: number, role: string, compare?: dayjs.Dayjs | undefined) => any;
    getRangeAvailableTime: ([start, end]: Array<Dayjs>) => readonly [dayjs.Dayjs, dayjs.Dayjs];
    getAvailableHours: import("../types").GetDisabledHoursState;
    getAvailableMinutes: import("../types").GetDisabledMinutesState;
    getAvailableSeconds: import("../types").GetDisabledSecondsState;
    timePickerOptions: Record<string, (...args: any[]) => void>;
    getAvailableTime: (date: dayjs.Dayjs, role: string, first: boolean, compareDate?: dayjs.Dayjs | undefined) => dayjs.Dayjs;
    onSetOption: ([key, val]: [string, (...args: any[]) => void]) => void;
    parseUserInput: (days: Dayjs[] | Dayjs) => dayjs.Dayjs | dayjs.Dayjs[] | null;
    formatToString: (days: Dayjs[] | Dayjs) => string | string[] | null;
    getDefaultValue: () => dayjs.Dayjs[];
    TimeSpinner: import("vue").DefineComponent<{
        readonly disabledHours: {
            readonly type: import("vue").PropType<import("../props/shared").GetDisabledHours>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabledMinutes: {
            readonly type: import("vue").PropType<import("../props/shared").GetDisabledMinutes>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabledSeconds: {
            readonly type: import("vue").PropType<import("../props/shared").GetDisabledSeconds>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly role: {
            readonly type: import("vue").PropType<string>;
            readonly required: true;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly spinnerDate: {
            readonly type: import("vue").PropType<dayjs.Dayjs>;
            readonly required: true;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly showSeconds: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly arrowControl: BooleanConstructor;
        readonly amPmMode: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => ("" | "A" | "a") & {}) | (() => "" | "A" | "a") | ((new (...args: any[]) => ("" | "A" | "a") & {}) | (() => "" | "A" | "a"))[], unknown, unknown, "", boolean>;
    }, {
        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
            readonly disabledHours: {
                readonly type: import("vue").PropType<import("../props/shared").GetDisabledHours>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabledMinutes: {
                readonly type: import("vue").PropType<import("../props/shared").GetDisabledMinutes>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly disabledSeconds: {
                readonly type: import("vue").PropType<import("../props/shared").GetDisabledSeconds>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly role: {
                readonly type: import("vue").PropType<string>;
                readonly required: true;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly spinnerDate: {
                readonly type: import("vue").PropType<dayjs.Dayjs>;
                readonly required: true;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly showSeconds: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
            readonly arrowControl: BooleanConstructor;
            readonly amPmMode: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => ("" | "A" | "a") & {}) | (() => "" | "A" | "a") | ((new (...args: any[]) => ("" | "A" | "a") & {}) | (() => "" | "A" | "a"))[], unknown, unknown, "", boolean>;
        }>> & {
            onChange?: ((...args: any[]) => any) | undefined;
            "onSelect-range"?: ((...args: any[]) => any) | undefined;
            "onSet-option"?: ((...args: any[]) => any) | undefined;
        }>>;
        emit: (event: "change" | "select-range" | "set-option", ...args: any[]) => void;
        ns: {
            namespace: import("vue").ComputedRef<string>;
            b: (blockSuffix?: string) => string;
            e: (element?: string | undefined) => string;
            m: (modifier?: string | undefined) => string;
            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
            em: (element?: string | undefined, modifier?: string | undefined) => string;
            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
            is: {
                (name: string, state: boolean | undefined): string;
                (name: string): string;
            };
            cssVar: (object: Record<string, string>) => Record<string, string>;
            cssVarName: (name: string) => string;
            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
            cssVarBlockName: (name: string) => string;
        };
        getHoursList: (role: string, compare?: dayjs.Dayjs | undefined) => boolean[];
        getMinutesList: (hour: number, role: string, compare?: dayjs.Dayjs | undefined) => boolean[];
        getSecondsList: (hour: number, minute: number, role: string, compare?: dayjs.Dayjs | undefined) => boolean[];
        isScrolling: boolean;
        currentScrollbar: import("vue").Ref<"hours" | "minutes" | "seconds" | undefined>;
        listHoursRef: import("vue").Ref<({
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                readonly height: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly always: boolean;
                readonly maxHeight: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly native: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly wrapStyle: import("vue").StyleValue;
                readonly wrapClass: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewClass: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewStyle: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
                readonly tag: string;
                readonly minSize: number;
                readonly noresize: boolean;
            }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                readonly ariaLabel: StringConstructor;
                readonly ariaOrientation: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
                readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
                readonly noresize: BooleanConstructor;
                readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                readonly always: BooleanConstructor;
                readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
                readonly id: StringConstructor;
                readonly role: StringConstructor;
            }>> & {
                onScroll?: ((args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => any) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "height" | "always" | "maxHeight" | "native" | "wrapStyle" | "wrapClass" | "viewClass" | "viewStyle" | "tag" | "minSize" | "noresize">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $emit: (event: "scroll", args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                readonly ariaLabel: StringConstructor;
                readonly ariaOrientation: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
                readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
                readonly noresize: BooleanConstructor;
                readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                readonly always: BooleanConstructor;
                readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
                readonly id: StringConstructor;
                readonly role: StringConstructor;
            }>> & {
                onScroll?: ((args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => any) | undefined;
            }, {
                COMPONENT_NAME: string;
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly ariaLabel: StringConstructor;
                    readonly ariaOrientation: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                    readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                    readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
                    readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                    readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                    readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
                    readonly noresize: BooleanConstructor;
                    readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                    readonly always: BooleanConstructor;
                    readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
                    readonly id: StringConstructor;
                    readonly role: StringConstructor;
                }>> & {
                    onScroll?: ((args_0: {
                        scrollTop: number;
                        scrollLeft: number;
                    }) => any) | undefined;
                }>>;
                emit: (event: "scroll", args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => void;
                ns: {
                    namespace: import("vue").ComputedRef<string>;
                    b: (blockSuffix?: string) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                stopResizeObserver: undefined;
                stopResizeListener: undefined;
                scrollbarRef: import("vue").Ref<HTMLDivElement | undefined>;
                wrapRef: import("vue").Ref<HTMLDivElement | undefined>;
                resizeRef: import("vue").Ref<HTMLElement | undefined>;
                barRef: import("vue").Ref<({
                    $: import("vue").ComponentInternalInstance;
                    $data: {};
                    $props: Partial<{
                        readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly minSize: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "always">;
                    $attrs: {
                        [x: string]: unknown;
                    };
                    $refs: {
                        [x: string]: unknown;
                    };
                    $slots: Readonly<{
                        [name: string]: import("vue").Slot | undefined;
                    }>;
                    $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                    $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                    $emit: (event: string, ...args: any[]) => void;
                    $el: any;
                    $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly minSize: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>>, {
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly minSize: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        scrollbar: import("../../..").ScrollbarContext | undefined;
                        moveX: import("vue").Ref<number>;
                        moveY: import("vue").Ref<number>;
                        sizeWidth: import("vue").Ref<string>;
                        sizeHeight: import("vue").Ref<string>;
                        ratioY: import("vue").Ref<number>;
                        ratioX: import("vue").Ref<number>;
                        handleScroll: (wrap: HTMLDivElement) => void;
                        update: () => void;
                        Thumb: import("vue").DefineComponent<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }, {
                            COMPONENT_NAME: string;
                            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                                readonly vertical: BooleanConstructor;
                                readonly size: StringConstructor;
                                readonly move: NumberConstructor;
                                readonly ratio: {
                                    readonly type: import("vue").PropType<number>;
                                    readonly required: true;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly always: BooleanConstructor;
                            }>> & {
                                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                            }>>;
                            scrollbar: import("../../..").ScrollbarContext;
                            ns: {
                                namespace: import("vue").ComputedRef<string>;
                                b: (blockSuffix?: string) => string;
                                e: (element?: string | undefined) => string;
                                m: (modifier?: string | undefined) => string;
                                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                                em: (element?: string | undefined, modifier?: string | undefined) => string;
                                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                                is: {
                                    (name: string, state: boolean | undefined): string;
                                    (name: string): string;
                                };
                                cssVar: (object: Record<string, string>) => Record<string, string>;
                                cssVarName: (name: string) => string;
                                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                                cssVarBlockName: (name: string) => string;
                            };
                            instance: import("vue").Ref<HTMLDivElement | undefined>;
                            thumb: import("vue").Ref<HTMLDivElement | undefined>;
                            thumbState: import("vue").Ref<{
                                X?: number | undefined;
                                Y?: number | undefined;
                            }>;
                            visible: import("vue").Ref<boolean>;
                            cursorDown: boolean;
                            cursorLeave: boolean;
                            originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                            bar: import("vue").ComputedRef<{
                                readonly offset: "offsetHeight";
                                readonly scroll: "scrollTop";
                                readonly scrollSize: "scrollHeight";
                                readonly size: "height";
                                readonly key: "vertical";
                                readonly axis: "Y";
                                readonly client: "clientY";
                                readonly direction: "top";
                            } | {
                                readonly offset: "offsetWidth";
                                readonly scroll: "scrollLeft";
                                readonly scrollSize: "scrollWidth";
                                readonly size: "width";
                                readonly key: "horizontal";
                                readonly axis: "X";
                                readonly client: "clientX";
                                readonly direction: "left";
                            }>;
                            thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                            offsetRatio: import("vue").ComputedRef<number>;
                            clickThumbHandler: (e: MouseEvent) => void;
                            clickTrackHandler: (e: MouseEvent) => void;
                            startDrag: (e: MouseEvent) => void;
                            mouseMoveDocumentHandler: (e: MouseEvent) => void;
                            mouseUpDocumentHandler: () => void;
                            mouseMoveScrollbarHandler: () => void;
                            mouseLeaveScrollbarHandler: () => void;
                            restoreOnselectstart: () => void;
                        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }>>, {
                            readonly vertical: boolean;
                            readonly always: boolean;
                        }>;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                        readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    }> & {
                        beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                        created?: ((() => void) | (() => void)[]) | undefined;
                        beforeMount?: ((() => void) | (() => void)[]) | undefined;
                        mounted?: ((() => void) | (() => void)[]) | undefined;
                        beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                        updated?: ((() => void) | (() => void)[]) | undefined;
                        activated?: ((() => void) | (() => void)[]) | undefined;
                        deactivated?: ((() => void) | (() => void)[]) | undefined;
                        beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                        beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                        destroyed?: ((() => void) | (() => void)[]) | undefined;
                        unmounted?: ((() => void) | (() => void)[]) | undefined;
                        renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                        renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                        errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
                    };
                    $forceUpdate: () => void;
                    $nextTick: typeof import("vue").nextTick;
                    $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                } & Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & import("vue").ShallowUnwrapRef<{
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly minSize: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext | undefined;
                    moveX: import("vue").Ref<number>;
                    moveY: import("vue").Ref<number>;
                    sizeWidth: import("vue").Ref<string>;
                    sizeHeight: import("vue").Ref<string>;
                    ratioY: import("vue").Ref<number>;
                    ratioX: import("vue").Ref<number>;
                    handleScroll: (wrap: HTMLDivElement) => void;
                    update: () => void;
                    Thumb: import("vue").DefineComponent<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }, {
                        COMPONENT_NAME: string;
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        scrollbar: import("../../..").ScrollbarContext;
                        ns: {
                            namespace: import("vue").ComputedRef<string>;
                            b: (blockSuffix?: string) => string;
                            e: (element?: string | undefined) => string;
                            m: (modifier?: string | undefined) => string;
                            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                            em: (element?: string | undefined, modifier?: string | undefined) => string;
                            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                            is: {
                                (name: string, state: boolean | undefined): string;
                                (name: string): string;
                            };
                            cssVar: (object: Record<string, string>) => Record<string, string>;
                            cssVarName: (name: string) => string;
                            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                            cssVarBlockName: (name: string) => string;
                        };
                        instance: import("vue").Ref<HTMLDivElement | undefined>;
                        thumb: import("vue").Ref<HTMLDivElement | undefined>;
                        thumbState: import("vue").Ref<{
                            X?: number | undefined;
                            Y?: number | undefined;
                        }>;
                        visible: import("vue").Ref<boolean>;
                        cursorDown: boolean;
                        cursorLeave: boolean;
                        originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                        bar: import("vue").ComputedRef<{
                            readonly offset: "offsetHeight";
                            readonly scroll: "scrollTop";
                            readonly scrollSize: "scrollHeight";
                            readonly size: "height";
                            readonly key: "vertical";
                            readonly axis: "Y";
                            readonly client: "clientY";
                            readonly direction: "top";
                        } | {
                            readonly offset: "offsetWidth";
                            readonly scroll: "scrollLeft";
                            readonly scrollSize: "scrollWidth";
                            readonly size: "width";
                            readonly key: "horizontal";
                            readonly axis: "X";
                            readonly client: "clientX";
                            readonly direction: "left";
                        }>;
                        thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                        offsetRatio: import("vue").ComputedRef<number>;
                        clickThumbHandler: (e: MouseEvent) => void;
                        clickTrackHandler: (e: MouseEvent) => void;
                        startDrag: (e: MouseEvent) => void;
                        mouseMoveDocumentHandler: (e: MouseEvent) => void;
                        mouseUpDocumentHandler: () => void;
                        mouseMoveScrollbarHandler: () => void;
                        mouseLeaveScrollbarHandler: () => void;
                        restoreOnselectstart: () => void;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>>, {
                        readonly vertical: boolean;
                        readonly always: boolean;
                    }>;
                }> & {} & import("vue").ComponentCustomProperties) | undefined>;
                wrapStyle: import("vue").ComputedRef<import("vue").StyleValue>;
                wrapKls: import("vue").ComputedRef<(string | unknown[] | {
                    [x: string]: boolean;
                })[]>;
                resizeKls: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>[]>;
                handleScroll: () => void;
                scrollTo: (arg1: unknown, arg2?: number | undefined) => void;
                setScrollTop: (value: number) => void;
                setScrollLeft: (value: number) => void;
                update: () => void;
                Bar: import("vue").DefineComponent<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly minSize: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext | undefined;
                    moveX: import("vue").Ref<number>;
                    moveY: import("vue").Ref<number>;
                    sizeWidth: import("vue").Ref<string>;
                    sizeHeight: import("vue").Ref<string>;
                    ratioY: import("vue").Ref<number>;
                    ratioX: import("vue").Ref<number>;
                    handleScroll: (wrap: HTMLDivElement) => void;
                    update: () => void;
                    Thumb: import("vue").DefineComponent<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }, {
                        COMPONENT_NAME: string;
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        scrollbar: import("../../..").ScrollbarContext;
                        ns: {
                            namespace: import("vue").ComputedRef<string>;
                            b: (blockSuffix?: string) => string;
                            e: (element?: string | undefined) => string;
                            m: (modifier?: string | undefined) => string;
                            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                            em: (element?: string | undefined, modifier?: string | undefined) => string;
                            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                            is: {
                                (name: string, state: boolean | undefined): string;
                                (name: string): string;
                            };
                            cssVar: (object: Record<string, string>) => Record<string, string>;
                            cssVarName: (name: string) => string;
                            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                            cssVarBlockName: (name: string) => string;
                        };
                        instance: import("vue").Ref<HTMLDivElement | undefined>;
                        thumb: import("vue").Ref<HTMLDivElement | undefined>;
                        thumbState: import("vue").Ref<{
                            X?: number | undefined;
                            Y?: number | undefined;
                        }>;
                        visible: import("vue").Ref<boolean>;
                        cursorDown: boolean;
                        cursorLeave: boolean;
                        originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                        bar: import("vue").ComputedRef<{
                            readonly offset: "offsetHeight";
                            readonly scroll: "scrollTop";
                            readonly scrollSize: "scrollHeight";
                            readonly size: "height";
                            readonly key: "vertical";
                            readonly axis: "Y";
                            readonly client: "clientY";
                            readonly direction: "top";
                        } | {
                            readonly offset: "offsetWidth";
                            readonly scroll: "scrollLeft";
                            readonly scrollSize: "scrollWidth";
                            readonly size: "width";
                            readonly key: "horizontal";
                            readonly axis: "X";
                            readonly client: "clientX";
                            readonly direction: "left";
                        }>;
                        thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                        offsetRatio: import("vue").ComputedRef<number>;
                        clickThumbHandler: (e: MouseEvent) => void;
                        clickTrackHandler: (e: MouseEvent) => void;
                        startDrag: (e: MouseEvent) => void;
                        mouseMoveDocumentHandler: (e: MouseEvent) => void;
                        mouseUpDocumentHandler: () => void;
                        mouseMoveScrollbarHandler: () => void;
                        mouseLeaveScrollbarHandler: () => void;
                        restoreOnselectstart: () => void;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>>, {
                        readonly vertical: boolean;
                        readonly always: boolean;
                    }>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>>, {
                    readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                }>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                scroll: ({ scrollTop, scrollLeft, }: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => boolean;
            }, string, {
                readonly height: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly always: boolean;
                readonly maxHeight: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly native: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly wrapStyle: import("vue").StyleValue;
                readonly wrapClass: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewClass: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewStyle: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
                readonly tag: string;
                readonly minSize: number;
                readonly noresize: boolean;
            }> & {
                beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                created?: ((() => void) | (() => void)[]) | undefined;
                beforeMount?: ((() => void) | (() => void)[]) | undefined;
                mounted?: ((() => void) | (() => void)[]) | undefined;
                beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                updated?: ((() => void) | (() => void)[]) | undefined;
                activated?: ((() => void) | (() => void)[]) | undefined;
                deactivated?: ((() => void) | (() => void)[]) | undefined;
                beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                destroyed?: ((() => void) | (() => void)[]) | undefined;
                unmounted?: ((() => void) | (() => void)[]) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{
            readonly ariaLabel: StringConstructor;
            readonly ariaOrientation: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
            readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
            readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
            readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
            readonly noresize: BooleanConstructor;
            readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
            readonly always: BooleanConstructor;
            readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
            readonly id: StringConstructor;
            readonly role: StringConstructor;
        }>> & {
            onScroll?: ((args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<{
            COMPONENT_NAME: string;
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly ariaLabel: StringConstructor;
                readonly ariaOrientation: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
                readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
                readonly noresize: BooleanConstructor;
                readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                readonly always: BooleanConstructor;
                readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
                readonly id: StringConstructor;
                readonly role: StringConstructor;
            }>> & {
                onScroll?: ((args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => any) | undefined;
            }>>;
            emit: (event: "scroll", args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => void;
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            stopResizeObserver: undefined;
            stopResizeListener: undefined;
            scrollbarRef: import("vue").Ref<HTMLDivElement | undefined>;
            wrapRef: import("vue").Ref<HTMLDivElement | undefined>;
            resizeRef: import("vue").Ref<HTMLElement | undefined>;
            barRef: import("vue").Ref<({
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "always">;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $emit: (event: string, ...args: any[]) => void;
                $el: any;
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>>, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly minSize: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext | undefined;
                    moveX: import("vue").Ref<number>;
                    moveY: import("vue").Ref<number>;
                    sizeWidth: import("vue").Ref<string>;
                    sizeHeight: import("vue").Ref<string>;
                    ratioY: import("vue").Ref<number>;
                    ratioX: import("vue").Ref<number>;
                    handleScroll: (wrap: HTMLDivElement) => void;
                    update: () => void;
                    Thumb: import("vue").DefineComponent<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }, {
                        COMPONENT_NAME: string;
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        scrollbar: import("../../..").ScrollbarContext;
                        ns: {
                            namespace: import("vue").ComputedRef<string>;
                            b: (blockSuffix?: string) => string;
                            e: (element?: string | undefined) => string;
                            m: (modifier?: string | undefined) => string;
                            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                            em: (element?: string | undefined, modifier?: string | undefined) => string;
                            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                            is: {
                                (name: string, state: boolean | undefined): string;
                                (name: string): string;
                            };
                            cssVar: (object: Record<string, string>) => Record<string, string>;
                            cssVarName: (name: string) => string;
                            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                            cssVarBlockName: (name: string) => string;
                        };
                        instance: import("vue").Ref<HTMLDivElement | undefined>;
                        thumb: import("vue").Ref<HTMLDivElement | undefined>;
                        thumbState: import("vue").Ref<{
                            X?: number | undefined;
                            Y?: number | undefined;
                        }>;
                        visible: import("vue").Ref<boolean>;
                        cursorDown: boolean;
                        cursorLeave: boolean;
                        originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                        bar: import("vue").ComputedRef<{
                            readonly offset: "offsetHeight";
                            readonly scroll: "scrollTop";
                            readonly scrollSize: "scrollHeight";
                            readonly size: "height";
                            readonly key: "vertical";
                            readonly axis: "Y";
                            readonly client: "clientY";
                            readonly direction: "top";
                        } | {
                            readonly offset: "offsetWidth";
                            readonly scroll: "scrollLeft";
                            readonly scrollSize: "scrollWidth";
                            readonly size: "width";
                            readonly key: "horizontal";
                            readonly axis: "X";
                            readonly client: "clientX";
                            readonly direction: "left";
                        }>;
                        thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                        offsetRatio: import("vue").ComputedRef<number>;
                        clickThumbHandler: (e: MouseEvent) => void;
                        clickTrackHandler: (e: MouseEvent) => void;
                        startDrag: (e: MouseEvent) => void;
                        mouseMoveDocumentHandler: (e: MouseEvent) => void;
                        mouseUpDocumentHandler: () => void;
                        mouseMoveScrollbarHandler: () => void;
                        mouseLeaveScrollbarHandler: () => void;
                        restoreOnselectstart: () => void;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>>, {
                        readonly vertical: boolean;
                        readonly always: boolean;
                    }>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                    readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                }> & {
                    beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                    created?: ((() => void) | (() => void)[]) | undefined;
                    beforeMount?: ((() => void) | (() => void)[]) | undefined;
                    mounted?: ((() => void) | (() => void)[]) | undefined;
                    beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                    updated?: ((() => void) | (() => void)[]) | undefined;
                    activated?: ((() => void) | (() => void)[]) | undefined;
                    deactivated?: ((() => void) | (() => void)[]) | undefined;
                    beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                    beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                    destroyed?: ((() => void) | (() => void)[]) | undefined;
                    unmounted?: ((() => void) | (() => void)[]) | undefined;
                    renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof import("vue").nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{
                readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly minSize: {
                    readonly type: import("vue").PropType<number>;
                    readonly required: true;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }>> & import("vue").ShallowUnwrapRef<{
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                scrollbar: import("../../..").ScrollbarContext | undefined;
                moveX: import("vue").Ref<number>;
                moveY: import("vue").Ref<number>;
                sizeWidth: import("vue").Ref<string>;
                sizeHeight: import("vue").Ref<string>;
                ratioY: import("vue").Ref<number>;
                ratioX: import("vue").Ref<number>;
                handleScroll: (wrap: HTMLDivElement) => void;
                update: () => void;
                Thumb: import("vue").DefineComponent<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }, {
                    COMPONENT_NAME: string;
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext;
                    ns: {
                        namespace: import("vue").ComputedRef<string>;
                        b: (blockSuffix?: string) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    instance: import("vue").Ref<HTMLDivElement | undefined>;
                    thumb: import("vue").Ref<HTMLDivElement | undefined>;
                    thumbState: import("vue").Ref<{
                        X?: number | undefined;
                        Y?: number | undefined;
                    }>;
                    visible: import("vue").Ref<boolean>;
                    cursorDown: boolean;
                    cursorLeave: boolean;
                    originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                    bar: import("vue").ComputedRef<{
                        readonly offset: "offsetHeight";
                        readonly scroll: "scrollTop";
                        readonly scrollSize: "scrollHeight";
                        readonly size: "height";
                        readonly key: "vertical";
                        readonly axis: "Y";
                        readonly client: "clientY";
                        readonly direction: "top";
                    } | {
                        readonly offset: "offsetWidth";
                        readonly scroll: "scrollLeft";
                        readonly scrollSize: "scrollWidth";
                        readonly size: "width";
                        readonly key: "horizontal";
                        readonly axis: "X";
                        readonly client: "clientX";
                        readonly direction: "left";
                    }>;
                    thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                    offsetRatio: import("vue").ComputedRef<number>;
                    clickThumbHandler: (e: MouseEvent) => void;
                    clickTrackHandler: (e: MouseEvent) => void;
                    startDrag: (e: MouseEvent) => void;
                    mouseMoveDocumentHandler: (e: MouseEvent) => void;
                    mouseUpDocumentHandler: () => void;
                    mouseMoveScrollbarHandler: () => void;
                    mouseLeaveScrollbarHandler: () => void;
                    restoreOnselectstart: () => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }>>, {
                    readonly vertical: boolean;
                    readonly always: boolean;
                }>;
            }> & {} & import("vue").ComponentCustomProperties) | undefined>;
            wrapStyle: import("vue").ComputedRef<import("vue").StyleValue>;
            wrapKls: import("vue").ComputedRef<(string | unknown[] | {
                [x: string]: boolean;
            })[]>;
            resizeKls: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>[]>;
            handleScroll: () => void;
            scrollTo: (arg1: unknown, arg2?: number | undefined) => void;
            setScrollTop: (value: number) => void;
            setScrollLeft: (value: number) => void;
            update: () => void;
            Bar: import("vue").DefineComponent<{
                readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly minSize: {
                    readonly type: import("vue").PropType<number>;
                    readonly required: true;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                scrollbar: import("../../..").ScrollbarContext | undefined;
                moveX: import("vue").Ref<number>;
                moveY: import("vue").Ref<number>;
                sizeWidth: import("vue").Ref<string>;
                sizeHeight: import("vue").Ref<string>;
                ratioY: import("vue").Ref<number>;
                ratioX: import("vue").Ref<number>;
                handleScroll: (wrap: HTMLDivElement) => void;
                update: () => void;
                Thumb: import("vue").DefineComponent<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }, {
                    COMPONENT_NAME: string;
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext;
                    ns: {
                        namespace: import("vue").ComputedRef<string>;
                        b: (blockSuffix?: string) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    instance: import("vue").Ref<HTMLDivElement | undefined>;
                    thumb: import("vue").Ref<HTMLDivElement | undefined>;
                    thumbState: import("vue").Ref<{
                        X?: number | undefined;
                        Y?: number | undefined;
                    }>;
                    visible: import("vue").Ref<boolean>;
                    cursorDown: boolean;
                    cursorLeave: boolean;
                    originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                    bar: import("vue").ComputedRef<{
                        readonly offset: "offsetHeight";
                        readonly scroll: "scrollTop";
                        readonly scrollSize: "scrollHeight";
                        readonly size: "height";
                        readonly key: "vertical";
                        readonly axis: "Y";
                        readonly client: "clientY";
                        readonly direction: "top";
                    } | {
                        readonly offset: "offsetWidth";
                        readonly scroll: "scrollLeft";
                        readonly scrollSize: "scrollWidth";
                        readonly size: "width";
                        readonly key: "horizontal";
                        readonly axis: "X";
                        readonly client: "clientX";
                        readonly direction: "left";
                    }>;
                    thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                    offsetRatio: import("vue").ComputedRef<number>;
                    clickThumbHandler: (e: MouseEvent) => void;
                    clickTrackHandler: (e: MouseEvent) => void;
                    startDrag: (e: MouseEvent) => void;
                    mouseMoveDocumentHandler: (e: MouseEvent) => void;
                    mouseUpDocumentHandler: () => void;
                    mouseMoveScrollbarHandler: () => void;
                    mouseLeaveScrollbarHandler: () => void;
                    restoreOnselectstart: () => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }>>, {
                    readonly vertical: boolean;
                    readonly always: boolean;
                }>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly minSize: {
                    readonly type: import("vue").PropType<number>;
                    readonly required: true;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }>>, {
                readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            }>;
        }> & {} & import("vue").ComponentCustomProperties) | undefined>;
        listMinutesRef: import("vue").Ref<({
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                readonly height: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly always: boolean;
                readonly maxHeight: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly native: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly wrapStyle: import("vue").StyleValue;
                readonly wrapClass: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewClass: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewStyle: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
                readonly tag: string;
                readonly minSize: number;
                readonly noresize: boolean;
            }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                readonly ariaLabel: StringConstructor;
                readonly ariaOrientation: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
                readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
                readonly noresize: BooleanConstructor;
                readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                readonly always: BooleanConstructor;
                readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
                readonly id: StringConstructor;
                readonly role: StringConstructor;
            }>> & {
                onScroll?: ((args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => any) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "height" | "always" | "maxHeight" | "native" | "wrapStyle" | "wrapClass" | "viewClass" | "viewStyle" | "tag" | "minSize" | "noresize">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $emit: (event: "scroll", args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                readonly ariaLabel: StringConstructor;
                readonly ariaOrientation: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
                readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
                readonly noresize: BooleanConstructor;
                readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                readonly always: BooleanConstructor;
                readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
                readonly id: StringConstructor;
                readonly role: StringConstructor;
            }>> & {
                onScroll?: ((args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => any) | undefined;
            }, {
                COMPONENT_NAME: string;
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly ariaLabel: StringConstructor;
                    readonly ariaOrientation: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                    readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                    readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
                    readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                    readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                    readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
                    readonly noresize: BooleanConstructor;
                    readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                    readonly always: BooleanConstructor;
                    readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
                    readonly id: StringConstructor;
                    readonly role: StringConstructor;
                }>> & {
                    onScroll?: ((args_0: {
                        scrollTop: number;
                        scrollLeft: number;
                    }) => any) | undefined;
                }>>;
                emit: (event: "scroll", args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => void;
                ns: {
                    namespace: import("vue").ComputedRef<string>;
                    b: (blockSuffix?: string) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                stopResizeObserver: undefined;
                stopResizeListener: undefined;
                scrollbarRef: import("vue").Ref<HTMLDivElement | undefined>;
                wrapRef: import("vue").Ref<HTMLDivElement | undefined>;
                resizeRef: import("vue").Ref<HTMLElement | undefined>;
                barRef: import("vue").Ref<({
                    $: import("vue").ComponentInternalInstance;
                    $data: {};
                    $props: Partial<{
                        readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly minSize: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "always">;
                    $attrs: {
                        [x: string]: unknown;
                    };
                    $refs: {
                        [x: string]: unknown;
                    };
                    $slots: Readonly<{
                        [name: string]: import("vue").Slot | undefined;
                    }>;
                    $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                    $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                    $emit: (event: string, ...args: any[]) => void;
                    $el: any;
                    $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly minSize: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>>, {
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly minSize: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        scrollbar: import("../../..").ScrollbarContext | undefined;
                        moveX: import("vue").Ref<number>;
                        moveY: import("vue").Ref<number>;
                        sizeWidth: import("vue").Ref<string>;
                        sizeHeight: import("vue").Ref<string>;
                        ratioY: import("vue").Ref<number>;
                        ratioX: import("vue").Ref<number>;
                        handleScroll: (wrap: HTMLDivElement) => void;
                        update: () => void;
                        Thumb: import("vue").DefineComponent<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }, {
                            COMPONENT_NAME: string;
                            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                                readonly vertical: BooleanConstructor;
                                readonly size: StringConstructor;
                                readonly move: NumberConstructor;
                                readonly ratio: {
                                    readonly type: import("vue").PropType<number>;
                                    readonly required: true;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly always: BooleanConstructor;
                            }>> & {
                                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                            }>>;
                            scrollbar: import("../../..").ScrollbarContext;
                            ns: {
                                namespace: import("vue").ComputedRef<string>;
                                b: (blockSuffix?: string) => string;
                                e: (element?: string | undefined) => string;
                                m: (modifier?: string | undefined) => string;
                                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                                em: (element?: string | undefined, modifier?: string | undefined) => string;
                                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                                is: {
                                    (name: string, state: boolean | undefined): string;
                                    (name: string): string;
                                };
                                cssVar: (object: Record<string, string>) => Record<string, string>;
                                cssVarName: (name: string) => string;
                                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                                cssVarBlockName: (name: string) => string;
                            };
                            instance: import("vue").Ref<HTMLDivElement | undefined>;
                            thumb: import("vue").Ref<HTMLDivElement | undefined>;
                            thumbState: import("vue").Ref<{
                                X?: number | undefined;
                                Y?: number | undefined;
                            }>;
                            visible: import("vue").Ref<boolean>;
                            cursorDown: boolean;
                            cursorLeave: boolean;
                            originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                            bar: import("vue").ComputedRef<{
                                readonly offset: "offsetHeight";
                                readonly scroll: "scrollTop";
                                readonly scrollSize: "scrollHeight";
                                readonly size: "height";
                                readonly key: "vertical";
                                readonly axis: "Y";
                                readonly client: "clientY";
                                readonly direction: "top";
                            } | {
                                readonly offset: "offsetWidth";
                                readonly scroll: "scrollLeft";
                                readonly scrollSize: "scrollWidth";
                                readonly size: "width";
                                readonly key: "horizontal";
                                readonly axis: "X";
                                readonly client: "clientX";
                                readonly direction: "left";
                            }>;
                            thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                            offsetRatio: import("vue").ComputedRef<number>;
                            clickThumbHandler: (e: MouseEvent) => void;
                            clickTrackHandler: (e: MouseEvent) => void;
                            startDrag: (e: MouseEvent) => void;
                            mouseMoveDocumentHandler: (e: MouseEvent) => void;
                            mouseUpDocumentHandler: () => void;
                            mouseMoveScrollbarHandler: () => void;
                            mouseLeaveScrollbarHandler: () => void;
                            restoreOnselectstart: () => void;
                        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }>>, {
                            readonly vertical: boolean;
                            readonly always: boolean;
                        }>;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                        readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    }> & {
                        beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                        created?: ((() => void) | (() => void)[]) | undefined;
                        beforeMount?: ((() => void) | (() => void)[]) | undefined;
                        mounted?: ((() => void) | (() => void)[]) | undefined;
                        beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                        updated?: ((() => void) | (() => void)[]) | undefined;
                        activated?: ((() => void) | (() => void)[]) | undefined;
                        deactivated?: ((() => void) | (() => void)[]) | undefined;
                        beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                        beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                        destroyed?: ((() => void) | (() => void)[]) | undefined;
                        unmounted?: ((() => void) | (() => void)[]) | undefined;
                        renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                        renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                        errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
                    };
                    $forceUpdate: () => void;
                    $nextTick: typeof import("vue").nextTick;
                    $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                } & Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & import("vue").ShallowUnwrapRef<{
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly minSize: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext | undefined;
                    moveX: import("vue").Ref<number>;
                    moveY: import("vue").Ref<number>;
                    sizeWidth: import("vue").Ref<string>;
                    sizeHeight: import("vue").Ref<string>;
                    ratioY: import("vue").Ref<number>;
                    ratioX: import("vue").Ref<number>;
                    handleScroll: (wrap: HTMLDivElement) => void;
                    update: () => void;
                    Thumb: import("vue").DefineComponent<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }, {
                        COMPONENT_NAME: string;
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        scrollbar: import("../../..").ScrollbarContext;
                        ns: {
                            namespace: import("vue").ComputedRef<string>;
                            b: (blockSuffix?: string) => string;
                            e: (element?: string | undefined) => string;
                            m: (modifier?: string | undefined) => string;
                            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                            em: (element?: string | undefined, modifier?: string | undefined) => string;
                            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                            is: {
                                (name: string, state: boolean | undefined): string;
                                (name: string): string;
                            };
                            cssVar: (object: Record<string, string>) => Record<string, string>;
                            cssVarName: (name: string) => string;
                            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                            cssVarBlockName: (name: string) => string;
                        };
                        instance: import("vue").Ref<HTMLDivElement | undefined>;
                        thumb: import("vue").Ref<HTMLDivElement | undefined>;
                        thumbState: import("vue").Ref<{
                            X?: number | undefined;
                            Y?: number | undefined;
                        }>;
                        visible: import("vue").Ref<boolean>;
                        cursorDown: boolean;
                        cursorLeave: boolean;
                        originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                        bar: import("vue").ComputedRef<{
                            readonly offset: "offsetHeight";
                            readonly scroll: "scrollTop";
                            readonly scrollSize: "scrollHeight";
                            readonly size: "height";
                            readonly key: "vertical";
                            readonly axis: "Y";
                            readonly client: "clientY";
                            readonly direction: "top";
                        } | {
                            readonly offset: "offsetWidth";
                            readonly scroll: "scrollLeft";
                            readonly scrollSize: "scrollWidth";
                            readonly size: "width";
                            readonly key: "horizontal";
                            readonly axis: "X";
                            readonly client: "clientX";
                            readonly direction: "left";
                        }>;
                        thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                        offsetRatio: import("vue").ComputedRef<number>;
                        clickThumbHandler: (e: MouseEvent) => void;
                        clickTrackHandler: (e: MouseEvent) => void;
                        startDrag: (e: MouseEvent) => void;
                        mouseMoveDocumentHandler: (e: MouseEvent) => void;
                        mouseUpDocumentHandler: () => void;
                        mouseMoveScrollbarHandler: () => void;
                        mouseLeaveScrollbarHandler: () => void;
                        restoreOnselectstart: () => void;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>>, {
                        readonly vertical: boolean;
                        readonly always: boolean;
                    }>;
                }> & {} & import("vue").ComponentCustomProperties) | undefined>;
                wrapStyle: import("vue").ComputedRef<import("vue").StyleValue>;
                wrapKls: import("vue").ComputedRef<(string | unknown[] | {
                    [x: string]: boolean;
                })[]>;
                resizeKls: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>[]>;
                handleScroll: () => void;
                scrollTo: (arg1: unknown, arg2?: number | undefined) => void;
                setScrollTop: (value: number) => void;
                setScrollLeft: (value: number) => void;
                update: () => void;
                Bar: import("vue").DefineComponent<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly minSize: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext | undefined;
                    moveX: import("vue").Ref<number>;
                    moveY: import("vue").Ref<number>;
                    sizeWidth: import("vue").Ref<string>;
                    sizeHeight: import("vue").Ref<string>;
                    ratioY: import("vue").Ref<number>;
                    ratioX: import("vue").Ref<number>;
                    handleScroll: (wrap: HTMLDivElement) => void;
                    update: () => void;
                    Thumb: import("vue").DefineComponent<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }, {
                        COMPONENT_NAME: string;
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        scrollbar: import("../../..").ScrollbarContext;
                        ns: {
                            namespace: import("vue").ComputedRef<string>;
                            b: (blockSuffix?: string) => string;
                            e: (element?: string | undefined) => string;
                            m: (modifier?: string | undefined) => string;
                            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                            em: (element?: string | undefined, modifier?: string | undefined) => string;
                            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                            is: {
                                (name: string, state: boolean | undefined): string;
                                (name: string): string;
                            };
                            cssVar: (object: Record<string, string>) => Record<string, string>;
                            cssVarName: (name: string) => string;
                            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                            cssVarBlockName: (name: string) => string;
                        };
                        instance: import("vue").Ref<HTMLDivElement | undefined>;
                        thumb: import("vue").Ref<HTMLDivElement | undefined>;
                        thumbState: import("vue").Ref<{
                            X?: number | undefined;
                            Y?: number | undefined;
                        }>;
                        visible: import("vue").Ref<boolean>;
                        cursorDown: boolean;
                        cursorLeave: boolean;
                        originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                        bar: import("vue").ComputedRef<{
                            readonly offset: "offsetHeight";
                            readonly scroll: "scrollTop";
                            readonly scrollSize: "scrollHeight";
                            readonly size: "height";
                            readonly key: "vertical";
                            readonly axis: "Y";
                            readonly client: "clientY";
                            readonly direction: "top";
                        } | {
                            readonly offset: "offsetWidth";
                            readonly scroll: "scrollLeft";
                            readonly scrollSize: "scrollWidth";
                            readonly size: "width";
                            readonly key: "horizontal";
                            readonly axis: "X";
                            readonly client: "clientX";
                            readonly direction: "left";
                        }>;
                        thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                        offsetRatio: import("vue").ComputedRef<number>;
                        clickThumbHandler: (e: MouseEvent) => void;
                        clickTrackHandler: (e: MouseEvent) => void;
                        startDrag: (e: MouseEvent) => void;
                        mouseMoveDocumentHandler: (e: MouseEvent) => void;
                        mouseUpDocumentHandler: () => void;
                        mouseMoveScrollbarHandler: () => void;
                        mouseLeaveScrollbarHandler: () => void;
                        restoreOnselectstart: () => void;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>>, {
                        readonly vertical: boolean;
                        readonly always: boolean;
                    }>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>>, {
                    readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                }>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                scroll: ({ scrollTop, scrollLeft, }: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => boolean;
            }, string, {
                readonly height: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly always: boolean;
                readonly maxHeight: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly native: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly wrapStyle: import("vue").StyleValue;
                readonly wrapClass: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewClass: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewStyle: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
                readonly tag: string;
                readonly minSize: number;
                readonly noresize: boolean;
            }> & {
                beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                created?: ((() => void) | (() => void)[]) | undefined;
                beforeMount?: ((() => void) | (() => void)[]) | undefined;
                mounted?: ((() => void) | (() => void)[]) | undefined;
                beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                updated?: ((() => void) | (() => void)[]) | undefined;
                activated?: ((() => void) | (() => void)[]) | undefined;
                deactivated?: ((() => void) | (() => void)[]) | undefined;
                beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                destroyed?: ((() => void) | (() => void)[]) | undefined;
                unmounted?: ((() => void) | (() => void)[]) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{
            readonly ariaLabel: StringConstructor;
            readonly ariaOrientation: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
            readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
            readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
            readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
            readonly noresize: BooleanConstructor;
            readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
            readonly always: BooleanConstructor;
            readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
            readonly id: StringConstructor;
            readonly role: StringConstructor;
        }>> & {
            onScroll?: ((args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<{
            COMPONENT_NAME: string;
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly ariaLabel: StringConstructor;
                readonly ariaOrientation: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
                readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
                readonly noresize: BooleanConstructor;
                readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                readonly always: BooleanConstructor;
                readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
                readonly id: StringConstructor;
                readonly role: StringConstructor;
            }>> & {
                onScroll?: ((args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => any) | undefined;
            }>>;
            emit: (event: "scroll", args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => void;
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            stopResizeObserver: undefined;
            stopResizeListener: undefined;
            scrollbarRef: import("vue").Ref<HTMLDivElement | undefined>;
            wrapRef: import("vue").Ref<HTMLDivElement | undefined>;
            resizeRef: import("vue").Ref<HTMLElement | undefined>;
            barRef: import("vue").Ref<({
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "always">;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $emit: (event: string, ...args: any[]) => void;
                $el: any;
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>>, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly minSize: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext | undefined;
                    moveX: import("vue").Ref<number>;
                    moveY: import("vue").Ref<number>;
                    sizeWidth: import("vue").Ref<string>;
                    sizeHeight: import("vue").Ref<string>;
                    ratioY: import("vue").Ref<number>;
                    ratioX: import("vue").Ref<number>;
                    handleScroll: (wrap: HTMLDivElement) => void;
                    update: () => void;
                    Thumb: import("vue").DefineComponent<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }, {
                        COMPONENT_NAME: string;
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        scrollbar: import("../../..").ScrollbarContext;
                        ns: {
                            namespace: import("vue").ComputedRef<string>;
                            b: (blockSuffix?: string) => string;
                            e: (element?: string | undefined) => string;
                            m: (modifier?: string | undefined) => string;
                            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                            em: (element?: string | undefined, modifier?: string | undefined) => string;
                            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                            is: {
                                (name: string, state: boolean | undefined): string;
                                (name: string): string;
                            };
                            cssVar: (object: Record<string, string>) => Record<string, string>;
                            cssVarName: (name: string) => string;
                            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                            cssVarBlockName: (name: string) => string;
                        };
                        instance: import("vue").Ref<HTMLDivElement | undefined>;
                        thumb: import("vue").Ref<HTMLDivElement | undefined>;
                        thumbState: import("vue").Ref<{
                            X?: number | undefined;
                            Y?: number | undefined;
                        }>;
                        visible: import("vue").Ref<boolean>;
                        cursorDown: boolean;
                        cursorLeave: boolean;
                        originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                        bar: import("vue").ComputedRef<{
                            readonly offset: "offsetHeight";
                            readonly scroll: "scrollTop";
                            readonly scrollSize: "scrollHeight";
                            readonly size: "height";
                            readonly key: "vertical";
                            readonly axis: "Y";
                            readonly client: "clientY";
                            readonly direction: "top";
                        } | {
                            readonly offset: "offsetWidth";
                            readonly scroll: "scrollLeft";
                            readonly scrollSize: "scrollWidth";
                            readonly size: "width";
                            readonly key: "horizontal";
                            readonly axis: "X";
                            readonly client: "clientX";
                            readonly direction: "left";
                        }>;
                        thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                        offsetRatio: import("vue").ComputedRef<number>;
                        clickThumbHandler: (e: MouseEvent) => void;
                        clickTrackHandler: (e: MouseEvent) => void;
                        startDrag: (e: MouseEvent) => void;
                        mouseMoveDocumentHandler: (e: MouseEvent) => void;
                        mouseUpDocumentHandler: () => void;
                        mouseMoveScrollbarHandler: () => void;
                        mouseLeaveScrollbarHandler: () => void;
                        restoreOnselectstart: () => void;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>>, {
                        readonly vertical: boolean;
                        readonly always: boolean;
                    }>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                    readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                }> & {
                    beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                    created?: ((() => void) | (() => void)[]) | undefined;
                    beforeMount?: ((() => void) | (() => void)[]) | undefined;
                    mounted?: ((() => void) | (() => void)[]) | undefined;
                    beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                    updated?: ((() => void) | (() => void)[]) | undefined;
                    activated?: ((() => void) | (() => void)[]) | undefined;
                    deactivated?: ((() => void) | (() => void)[]) | undefined;
                    beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                    beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                    destroyed?: ((() => void) | (() => void)[]) | undefined;
                    unmounted?: ((() => void) | (() => void)[]) | undefined;
                    renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof import("vue").nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{
                readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly minSize: {
                    readonly type: import("vue").PropType<number>;
                    readonly required: true;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }>> & import("vue").ShallowUnwrapRef<{
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                scrollbar: import("../../..").ScrollbarContext | undefined;
                moveX: import("vue").Ref<number>;
                moveY: import("vue").Ref<number>;
                sizeWidth: import("vue").Ref<string>;
                sizeHeight: import("vue").Ref<string>;
                ratioY: import("vue").Ref<number>;
                ratioX: import("vue").Ref<number>;
                handleScroll: (wrap: HTMLDivElement) => void;
                update: () => void;
                Thumb: import("vue").DefineComponent<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }, {
                    COMPONENT_NAME: string;
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext;
                    ns: {
                        namespace: import("vue").ComputedRef<string>;
                        b: (blockSuffix?: string) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    instance: import("vue").Ref<HTMLDivElement | undefined>;
                    thumb: import("vue").Ref<HTMLDivElement | undefined>;
                    thumbState: import("vue").Ref<{
                        X?: number | undefined;
                        Y?: number | undefined;
                    }>;
                    visible: import("vue").Ref<boolean>;
                    cursorDown: boolean;
                    cursorLeave: boolean;
                    originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                    bar: import("vue").ComputedRef<{
                        readonly offset: "offsetHeight";
                        readonly scroll: "scrollTop";
                        readonly scrollSize: "scrollHeight";
                        readonly size: "height";
                        readonly key: "vertical";
                        readonly axis: "Y";
                        readonly client: "clientY";
                        readonly direction: "top";
                    } | {
                        readonly offset: "offsetWidth";
                        readonly scroll: "scrollLeft";
                        readonly scrollSize: "scrollWidth";
                        readonly size: "width";
                        readonly key: "horizontal";
                        readonly axis: "X";
                        readonly client: "clientX";
                        readonly direction: "left";
                    }>;
                    thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                    offsetRatio: import("vue").ComputedRef<number>;
                    clickThumbHandler: (e: MouseEvent) => void;
                    clickTrackHandler: (e: MouseEvent) => void;
                    startDrag: (e: MouseEvent) => void;
                    mouseMoveDocumentHandler: (e: MouseEvent) => void;
                    mouseUpDocumentHandler: () => void;
                    mouseMoveScrollbarHandler: () => void;
                    mouseLeaveScrollbarHandler: () => void;
                    restoreOnselectstart: () => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }>>, {
                    readonly vertical: boolean;
                    readonly always: boolean;
                }>;
            }> & {} & import("vue").ComponentCustomProperties) | undefined>;
            wrapStyle: import("vue").ComputedRef<import("vue").StyleValue>;
            wrapKls: import("vue").ComputedRef<(string | unknown[] | {
                [x: string]: boolean;
            })[]>;
            resizeKls: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>[]>;
            handleScroll: () => void;
            scrollTo: (arg1: unknown, arg2?: number | undefined) => void;
            setScrollTop: (value: number) => void;
            setScrollLeft: (value: number) => void;
            update: () => void;
            Bar: import("vue").DefineComponent<{
                readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly minSize: {
                    readonly type: import("vue").PropType<number>;
                    readonly required: true;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                scrollbar: import("../../..").ScrollbarContext | undefined;
                moveX: import("vue").Ref<number>;
                moveY: import("vue").Ref<number>;
                sizeWidth: import("vue").Ref<string>;
                sizeHeight: import("vue").Ref<string>;
                ratioY: import("vue").Ref<number>;
                ratioX: import("vue").Ref<number>;
                handleScroll: (wrap: HTMLDivElement) => void;
                update: () => void;
                Thumb: import("vue").DefineComponent<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }, {
                    COMPONENT_NAME: string;
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext;
                    ns: {
                        namespace: import("vue").ComputedRef<string>;
                        b: (blockSuffix?: string) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    instance: import("vue").Ref<HTMLDivElement | undefined>;
                    thumb: import("vue").Ref<HTMLDivElement | undefined>;
                    thumbState: import("vue").Ref<{
                        X?: number | undefined;
                        Y?: number | undefined;
                    }>;
                    visible: import("vue").Ref<boolean>;
                    cursorDown: boolean;
                    cursorLeave: boolean;
                    originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                    bar: import("vue").ComputedRef<{
                        readonly offset: "offsetHeight";
                        readonly scroll: "scrollTop";
                        readonly scrollSize: "scrollHeight";
                        readonly size: "height";
                        readonly key: "vertical";
                        readonly axis: "Y";
                        readonly client: "clientY";
                        readonly direction: "top";
                    } | {
                        readonly offset: "offsetWidth";
                        readonly scroll: "scrollLeft";
                        readonly scrollSize: "scrollWidth";
                        readonly size: "width";
                        readonly key: "horizontal";
                        readonly axis: "X";
                        readonly client: "clientX";
                        readonly direction: "left";
                    }>;
                    thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                    offsetRatio: import("vue").ComputedRef<number>;
                    clickThumbHandler: (e: MouseEvent) => void;
                    clickTrackHandler: (e: MouseEvent) => void;
                    startDrag: (e: MouseEvent) => void;
                    mouseMoveDocumentHandler: (e: MouseEvent) => void;
                    mouseUpDocumentHandler: () => void;
                    mouseMoveScrollbarHandler: () => void;
                    mouseLeaveScrollbarHandler: () => void;
                    restoreOnselectstart: () => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }>>, {
                    readonly vertical: boolean;
                    readonly always: boolean;
                }>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly minSize: {
                    readonly type: import("vue").PropType<number>;
                    readonly required: true;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }>>, {
                readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            }>;
        }> & {} & import("vue").ComponentCustomProperties) | undefined>;
        listSecondsRef: import("vue").Ref<({
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                readonly height: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly always: boolean;
                readonly maxHeight: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly native: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly wrapStyle: import("vue").StyleValue;
                readonly wrapClass: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewClass: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewStyle: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
                readonly tag: string;
                readonly minSize: number;
                readonly noresize: boolean;
            }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                readonly ariaLabel: StringConstructor;
                readonly ariaOrientation: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
                readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
                readonly noresize: BooleanConstructor;
                readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                readonly always: BooleanConstructor;
                readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
                readonly id: StringConstructor;
                readonly role: StringConstructor;
            }>> & {
                onScroll?: ((args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => any) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "height" | "always" | "maxHeight" | "native" | "wrapStyle" | "wrapClass" | "viewClass" | "viewStyle" | "tag" | "minSize" | "noresize">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $emit: (event: "scroll", args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                readonly ariaLabel: StringConstructor;
                readonly ariaOrientation: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
                readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
                readonly noresize: BooleanConstructor;
                readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                readonly always: BooleanConstructor;
                readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
                readonly id: StringConstructor;
                readonly role: StringConstructor;
            }>> & {
                onScroll?: ((args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => any) | undefined;
            }, {
                COMPONENT_NAME: string;
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly ariaLabel: StringConstructor;
                    readonly ariaOrientation: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                    readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                    readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
                    readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                    readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                    readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
                    readonly noresize: BooleanConstructor;
                    readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                    readonly always: BooleanConstructor;
                    readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
                    readonly id: StringConstructor;
                    readonly role: StringConstructor;
                }>> & {
                    onScroll?: ((args_0: {
                        scrollTop: number;
                        scrollLeft: number;
                    }) => any) | undefined;
                }>>;
                emit: (event: "scroll", args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => void;
                ns: {
                    namespace: import("vue").ComputedRef<string>;
                    b: (blockSuffix?: string) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                stopResizeObserver: undefined;
                stopResizeListener: undefined;
                scrollbarRef: import("vue").Ref<HTMLDivElement | undefined>;
                wrapRef: import("vue").Ref<HTMLDivElement | undefined>;
                resizeRef: import("vue").Ref<HTMLElement | undefined>;
                barRef: import("vue").Ref<({
                    $: import("vue").ComponentInternalInstance;
                    $data: {};
                    $props: Partial<{
                        readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly minSize: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "always">;
                    $attrs: {
                        [x: string]: unknown;
                    };
                    $refs: {
                        [x: string]: unknown;
                    };
                    $slots: Readonly<{
                        [name: string]: import("vue").Slot | undefined;
                    }>;
                    $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                    $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                    $emit: (event: string, ...args: any[]) => void;
                    $el: any;
                    $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly minSize: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>>, {
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly minSize: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        scrollbar: import("../../..").ScrollbarContext | undefined;
                        moveX: import("vue").Ref<number>;
                        moveY: import("vue").Ref<number>;
                        sizeWidth: import("vue").Ref<string>;
                        sizeHeight: import("vue").Ref<string>;
                        ratioY: import("vue").Ref<number>;
                        ratioX: import("vue").Ref<number>;
                        handleScroll: (wrap: HTMLDivElement) => void;
                        update: () => void;
                        Thumb: import("vue").DefineComponent<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }, {
                            COMPONENT_NAME: string;
                            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                                readonly vertical: BooleanConstructor;
                                readonly size: StringConstructor;
                                readonly move: NumberConstructor;
                                readonly ratio: {
                                    readonly type: import("vue").PropType<number>;
                                    readonly required: true;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly always: BooleanConstructor;
                            }>> & {
                                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                            }>>;
                            scrollbar: import("../../..").ScrollbarContext;
                            ns: {
                                namespace: import("vue").ComputedRef<string>;
                                b: (blockSuffix?: string) => string;
                                e: (element?: string | undefined) => string;
                                m: (modifier?: string | undefined) => string;
                                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                                em: (element?: string | undefined, modifier?: string | undefined) => string;
                                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                                is: {
                                    (name: string, state: boolean | undefined): string;
                                    (name: string): string;
                                };
                                cssVar: (object: Record<string, string>) => Record<string, string>;
                                cssVarName: (name: string) => string;
                                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                                cssVarBlockName: (name: string) => string;
                            };
                            instance: import("vue").Ref<HTMLDivElement | undefined>;
                            thumb: import("vue").Ref<HTMLDivElement | undefined>;
                            thumbState: import("vue").Ref<{
                                X?: number | undefined;
                                Y?: number | undefined;
                            }>;
                            visible: import("vue").Ref<boolean>;
                            cursorDown: boolean;
                            cursorLeave: boolean;
                            originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                            bar: import("vue").ComputedRef<{
                                readonly offset: "offsetHeight";
                                readonly scroll: "scrollTop";
                                readonly scrollSize: "scrollHeight";
                                readonly size: "height";
                                readonly key: "vertical";
                                readonly axis: "Y";
                                readonly client: "clientY";
                                readonly direction: "top";
                            } | {
                                readonly offset: "offsetWidth";
                                readonly scroll: "scrollLeft";
                                readonly scrollSize: "scrollWidth";
                                readonly size: "width";
                                readonly key: "horizontal";
                                readonly axis: "X";
                                readonly client: "clientX";
                                readonly direction: "left";
                            }>;
                            thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                            offsetRatio: import("vue").ComputedRef<number>;
                            clickThumbHandler: (e: MouseEvent) => void;
                            clickTrackHandler: (e: MouseEvent) => void;
                            startDrag: (e: MouseEvent) => void;
                            mouseMoveDocumentHandler: (e: MouseEvent) => void;
                            mouseUpDocumentHandler: () => void;
                            mouseMoveScrollbarHandler: () => void;
                            mouseLeaveScrollbarHandler: () => void;
                            restoreOnselectstart: () => void;
                        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }>>, {
                            readonly vertical: boolean;
                            readonly always: boolean;
                        }>;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                        readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    }> & {
                        beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                        created?: ((() => void) | (() => void)[]) | undefined;
                        beforeMount?: ((() => void) | (() => void)[]) | undefined;
                        mounted?: ((() => void) | (() => void)[]) | undefined;
                        beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                        updated?: ((() => void) | (() => void)[]) | undefined;
                        activated?: ((() => void) | (() => void)[]) | undefined;
                        deactivated?: ((() => void) | (() => void)[]) | undefined;
                        beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                        beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                        destroyed?: ((() => void) | (() => void)[]) | undefined;
                        unmounted?: ((() => void) | (() => void)[]) | undefined;
                        renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                        renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                        errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
                    };
                    $forceUpdate: () => void;
                    $nextTick: typeof import("vue").nextTick;
                    $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                } & Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & import("vue").ShallowUnwrapRef<{
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly minSize: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext | undefined;
                    moveX: import("vue").Ref<number>;
                    moveY: import("vue").Ref<number>;
                    sizeWidth: import("vue").Ref<string>;
                    sizeHeight: import("vue").Ref<string>;
                    ratioY: import("vue").Ref<number>;
                    ratioX: import("vue").Ref<number>;
                    handleScroll: (wrap: HTMLDivElement) => void;
                    update: () => void;
                    Thumb: import("vue").DefineComponent<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }, {
                        COMPONENT_NAME: string;
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        scrollbar: import("../../..").ScrollbarContext;
                        ns: {
                            namespace: import("vue").ComputedRef<string>;
                            b: (blockSuffix?: string) => string;
                            e: (element?: string | undefined) => string;
                            m: (modifier?: string | undefined) => string;
                            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                            em: (element?: string | undefined, modifier?: string | undefined) => string;
                            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                            is: {
                                (name: string, state: boolean | undefined): string;
                                (name: string): string;
                            };
                            cssVar: (object: Record<string, string>) => Record<string, string>;
                            cssVarName: (name: string) => string;
                            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                            cssVarBlockName: (name: string) => string;
                        };
                        instance: import("vue").Ref<HTMLDivElement | undefined>;
                        thumb: import("vue").Ref<HTMLDivElement | undefined>;
                        thumbState: import("vue").Ref<{
                            X?: number | undefined;
                            Y?: number | undefined;
                        }>;
                        visible: import("vue").Ref<boolean>;
                        cursorDown: boolean;
                        cursorLeave: boolean;
                        originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                        bar: import("vue").ComputedRef<{
                            readonly offset: "offsetHeight";
                            readonly scroll: "scrollTop";
                            readonly scrollSize: "scrollHeight";
                            readonly size: "height";
                            readonly key: "vertical";
                            readonly axis: "Y";
                            readonly client: "clientY";
                            readonly direction: "top";
                        } | {
                            readonly offset: "offsetWidth";
                            readonly scroll: "scrollLeft";
                            readonly scrollSize: "scrollWidth";
                            readonly size: "width";
                            readonly key: "horizontal";
                            readonly axis: "X";
                            readonly client: "clientX";
                            readonly direction: "left";
                        }>;
                        thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                        offsetRatio: import("vue").ComputedRef<number>;
                        clickThumbHandler: (e: MouseEvent) => void;
                        clickTrackHandler: (e: MouseEvent) => void;
                        startDrag: (e: MouseEvent) => void;
                        mouseMoveDocumentHandler: (e: MouseEvent) => void;
                        mouseUpDocumentHandler: () => void;
                        mouseMoveScrollbarHandler: () => void;
                        mouseLeaveScrollbarHandler: () => void;
                        restoreOnselectstart: () => void;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>>, {
                        readonly vertical: boolean;
                        readonly always: boolean;
                    }>;
                }> & {} & import("vue").ComponentCustomProperties) | undefined>;
                wrapStyle: import("vue").ComputedRef<import("vue").StyleValue>;
                wrapKls: import("vue").ComputedRef<(string | unknown[] | {
                    [x: string]: boolean;
                })[]>;
                resizeKls: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>[]>;
                handleScroll: () => void;
                scrollTo: (arg1: unknown, arg2?: number | undefined) => void;
                setScrollTop: (value: number) => void;
                setScrollLeft: (value: number) => void;
                update: () => void;
                Bar: import("vue").DefineComponent<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly minSize: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext | undefined;
                    moveX: import("vue").Ref<number>;
                    moveY: import("vue").Ref<number>;
                    sizeWidth: import("vue").Ref<string>;
                    sizeHeight: import("vue").Ref<string>;
                    ratioY: import("vue").Ref<number>;
                    ratioX: import("vue").Ref<number>;
                    handleScroll: (wrap: HTMLDivElement) => void;
                    update: () => void;
                    Thumb: import("vue").DefineComponent<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }, {
                        COMPONENT_NAME: string;
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        scrollbar: import("../../..").ScrollbarContext;
                        ns: {
                            namespace: import("vue").ComputedRef<string>;
                            b: (blockSuffix?: string) => string;
                            e: (element?: string | undefined) => string;
                            m: (modifier?: string | undefined) => string;
                            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                            em: (element?: string | undefined, modifier?: string | undefined) => string;
                            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                            is: {
                                (name: string, state: boolean | undefined): string;
                                (name: string): string;
                            };
                            cssVar: (object: Record<string, string>) => Record<string, string>;
                            cssVarName: (name: string) => string;
                            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                            cssVarBlockName: (name: string) => string;
                        };
                        instance: import("vue").Ref<HTMLDivElement | undefined>;
                        thumb: import("vue").Ref<HTMLDivElement | undefined>;
                        thumbState: import("vue").Ref<{
                            X?: number | undefined;
                            Y?: number | undefined;
                        }>;
                        visible: import("vue").Ref<boolean>;
                        cursorDown: boolean;
                        cursorLeave: boolean;
                        originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                        bar: import("vue").ComputedRef<{
                            readonly offset: "offsetHeight";
                            readonly scroll: "scrollTop";
                            readonly scrollSize: "scrollHeight";
                            readonly size: "height";
                            readonly key: "vertical";
                            readonly axis: "Y";
                            readonly client: "clientY";
                            readonly direction: "top";
                        } | {
                            readonly offset: "offsetWidth";
                            readonly scroll: "scrollLeft";
                            readonly scrollSize: "scrollWidth";
                            readonly size: "width";
                            readonly key: "horizontal";
                            readonly axis: "X";
                            readonly client: "clientX";
                            readonly direction: "left";
                        }>;
                        thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                        offsetRatio: import("vue").ComputedRef<number>;
                        clickThumbHandler: (e: MouseEvent) => void;
                        clickTrackHandler: (e: MouseEvent) => void;
                        startDrag: (e: MouseEvent) => void;
                        mouseMoveDocumentHandler: (e: MouseEvent) => void;
                        mouseUpDocumentHandler: () => void;
                        mouseMoveScrollbarHandler: () => void;
                        mouseLeaveScrollbarHandler: () => void;
                        restoreOnselectstart: () => void;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>>, {
                        readonly vertical: boolean;
                        readonly always: boolean;
                    }>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>>, {
                    readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                }>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                scroll: ({ scrollTop, scrollLeft, }: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => boolean;
            }, string, {
                readonly height: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly always: boolean;
                readonly maxHeight: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly native: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly wrapStyle: import("vue").StyleValue;
                readonly wrapClass: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewClass: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewStyle: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
                readonly tag: string;
                readonly minSize: number;
                readonly noresize: boolean;
            }> & {
                beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                created?: ((() => void) | (() => void)[]) | undefined;
                beforeMount?: ((() => void) | (() => void)[]) | undefined;
                mounted?: ((() => void) | (() => void)[]) | undefined;
                beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                updated?: ((() => void) | (() => void)[]) | undefined;
                activated?: ((() => void) | (() => void)[]) | undefined;
                deactivated?: ((() => void) | (() => void)[]) | undefined;
                beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                destroyed?: ((() => void) | (() => void)[]) | undefined;
                unmounted?: ((() => void) | (() => void)[]) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{
            readonly ariaLabel: StringConstructor;
            readonly ariaOrientation: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
            readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
            readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
            readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
            readonly noresize: BooleanConstructor;
            readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
            readonly always: BooleanConstructor;
            readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
            readonly id: StringConstructor;
            readonly role: StringConstructor;
        }>> & {
            onScroll?: ((args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<{
            COMPONENT_NAME: string;
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly ariaLabel: StringConstructor;
                readonly ariaOrientation: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
                readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
                readonly noresize: BooleanConstructor;
                readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                readonly always: BooleanConstructor;
                readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
                readonly id: StringConstructor;
                readonly role: StringConstructor;
            }>> & {
                onScroll?: ((args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => any) | undefined;
            }>>;
            emit: (event: "scroll", args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => void;
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            stopResizeObserver: undefined;
            stopResizeListener: undefined;
            scrollbarRef: import("vue").Ref<HTMLDivElement | undefined>;
            wrapRef: import("vue").Ref<HTMLDivElement | undefined>;
            resizeRef: import("vue").Ref<HTMLElement | undefined>;
            barRef: import("vue").Ref<({
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "always">;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $emit: (event: string, ...args: any[]) => void;
                $el: any;
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>>, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly minSize: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext | undefined;
                    moveX: import("vue").Ref<number>;
                    moveY: import("vue").Ref<number>;
                    sizeWidth: import("vue").Ref<string>;
                    sizeHeight: import("vue").Ref<string>;
                    ratioY: import("vue").Ref<number>;
                    ratioX: import("vue").Ref<number>;
                    handleScroll: (wrap: HTMLDivElement) => void;
                    update: () => void;
                    Thumb: import("vue").DefineComponent<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }, {
                        COMPONENT_NAME: string;
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        scrollbar: import("../../..").ScrollbarContext;
                        ns: {
                            namespace: import("vue").ComputedRef<string>;
                            b: (blockSuffix?: string) => string;
                            e: (element?: string | undefined) => string;
                            m: (modifier?: string | undefined) => string;
                            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                            em: (element?: string | undefined, modifier?: string | undefined) => string;
                            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                            is: {
                                (name: string, state: boolean | undefined): string;
                                (name: string): string;
                            };
                            cssVar: (object: Record<string, string>) => Record<string, string>;
                            cssVarName: (name: string) => string;
                            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                            cssVarBlockName: (name: string) => string;
                        };
                        instance: import("vue").Ref<HTMLDivElement | undefined>;
                        thumb: import("vue").Ref<HTMLDivElement | undefined>;
                        thumbState: import("vue").Ref<{
                            X?: number | undefined;
                            Y?: number | undefined;
                        }>;
                        visible: import("vue").Ref<boolean>;
                        cursorDown: boolean;
                        cursorLeave: boolean;
                        originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                        bar: import("vue").ComputedRef<{
                            readonly offset: "offsetHeight";
                            readonly scroll: "scrollTop";
                            readonly scrollSize: "scrollHeight";
                            readonly size: "height";
                            readonly key: "vertical";
                            readonly axis: "Y";
                            readonly client: "clientY";
                            readonly direction: "top";
                        } | {
                            readonly offset: "offsetWidth";
                            readonly scroll: "scrollLeft";
                            readonly scrollSize: "scrollWidth";
                            readonly size: "width";
                            readonly key: "horizontal";
                            readonly axis: "X";
                            readonly client: "clientX";
                            readonly direction: "left";
                        }>;
                        thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                        offsetRatio: import("vue").ComputedRef<number>;
                        clickThumbHandler: (e: MouseEvent) => void;
                        clickTrackHandler: (e: MouseEvent) => void;
                        startDrag: (e: MouseEvent) => void;
                        mouseMoveDocumentHandler: (e: MouseEvent) => void;
                        mouseUpDocumentHandler: () => void;
                        mouseMoveScrollbarHandler: () => void;
                        mouseLeaveScrollbarHandler: () => void;
                        restoreOnselectstart: () => void;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>>, {
                        readonly vertical: boolean;
                        readonly always: boolean;
                    }>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                    readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                }> & {
                    beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                    created?: ((() => void) | (() => void)[]) | undefined;
                    beforeMount?: ((() => void) | (() => void)[]) | undefined;
                    mounted?: ((() => void) | (() => void)[]) | undefined;
                    beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                    updated?: ((() => void) | (() => void)[]) | undefined;
                    activated?: ((() => void) | (() => void)[]) | undefined;
                    deactivated?: ((() => void) | (() => void)[]) | undefined;
                    beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                    beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                    destroyed?: ((() => void) | (() => void)[]) | undefined;
                    unmounted?: ((() => void) | (() => void)[]) | undefined;
                    renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof import("vue").nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{
                readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly minSize: {
                    readonly type: import("vue").PropType<number>;
                    readonly required: true;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }>> & import("vue").ShallowUnwrapRef<{
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                scrollbar: import("../../..").ScrollbarContext | undefined;
                moveX: import("vue").Ref<number>;
                moveY: import("vue").Ref<number>;
                sizeWidth: import("vue").Ref<string>;
                sizeHeight: import("vue").Ref<string>;
                ratioY: import("vue").Ref<number>;
                ratioX: import("vue").Ref<number>;
                handleScroll: (wrap: HTMLDivElement) => void;
                update: () => void;
                Thumb: import("vue").DefineComponent<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }, {
                    COMPONENT_NAME: string;
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext;
                    ns: {
                        namespace: import("vue").ComputedRef<string>;
                        b: (blockSuffix?: string) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    instance: import("vue").Ref<HTMLDivElement | undefined>;
                    thumb: import("vue").Ref<HTMLDivElement | undefined>;
                    thumbState: import("vue").Ref<{
                        X?: number | undefined;
                        Y?: number | undefined;
                    }>;
                    visible: import("vue").Ref<boolean>;
                    cursorDown: boolean;
                    cursorLeave: boolean;
                    originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                    bar: import("vue").ComputedRef<{
                        readonly offset: "offsetHeight";
                        readonly scroll: "scrollTop";
                        readonly scrollSize: "scrollHeight";
                        readonly size: "height";
                        readonly key: "vertical";
                        readonly axis: "Y";
                        readonly client: "clientY";
                        readonly direction: "top";
                    } | {
                        readonly offset: "offsetWidth";
                        readonly scroll: "scrollLeft";
                        readonly scrollSize: "scrollWidth";
                        readonly size: "width";
                        readonly key: "horizontal";
                        readonly axis: "X";
                        readonly client: "clientX";
                        readonly direction: "left";
                    }>;
                    thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                    offsetRatio: import("vue").ComputedRef<number>;
                    clickThumbHandler: (e: MouseEvent) => void;
                    clickTrackHandler: (e: MouseEvent) => void;
                    startDrag: (e: MouseEvent) => void;
                    mouseMoveDocumentHandler: (e: MouseEvent) => void;
                    mouseUpDocumentHandler: () => void;
                    mouseMoveScrollbarHandler: () => void;
                    mouseLeaveScrollbarHandler: () => void;
                    restoreOnselectstart: () => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }>>, {
                    readonly vertical: boolean;
                    readonly always: boolean;
                }>;
            }> & {} & import("vue").ComponentCustomProperties) | undefined>;
            wrapStyle: import("vue").ComputedRef<import("vue").StyleValue>;
            wrapKls: import("vue").ComputedRef<(string | unknown[] | {
                [x: string]: boolean;
            })[]>;
            resizeKls: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>[]>;
            handleScroll: () => void;
            scrollTo: (arg1: unknown, arg2?: number | undefined) => void;
            setScrollTop: (value: number) => void;
            setScrollLeft: (value: number) => void;
            update: () => void;
            Bar: import("vue").DefineComponent<{
                readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly minSize: {
                    readonly type: import("vue").PropType<number>;
                    readonly required: true;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                scrollbar: import("../../..").ScrollbarContext | undefined;
                moveX: import("vue").Ref<number>;
                moveY: import("vue").Ref<number>;
                sizeWidth: import("vue").Ref<string>;
                sizeHeight: import("vue").Ref<string>;
                ratioY: import("vue").Ref<number>;
                ratioX: import("vue").Ref<number>;
                handleScroll: (wrap: HTMLDivElement) => void;
                update: () => void;
                Thumb: import("vue").DefineComponent<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }, {
                    COMPONENT_NAME: string;
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext;
                    ns: {
                        namespace: import("vue").ComputedRef<string>;
                        b: (blockSuffix?: string) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    instance: import("vue").Ref<HTMLDivElement | undefined>;
                    thumb: import("vue").Ref<HTMLDivElement | undefined>;
                    thumbState: import("vue").Ref<{
                        X?: number | undefined;
                        Y?: number | undefined;
                    }>;
                    visible: import("vue").Ref<boolean>;
                    cursorDown: boolean;
                    cursorLeave: boolean;
                    originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                    bar: import("vue").ComputedRef<{
                        readonly offset: "offsetHeight";
                        readonly scroll: "scrollTop";
                        readonly scrollSize: "scrollHeight";
                        readonly size: "height";
                        readonly key: "vertical";
                        readonly axis: "Y";
                        readonly client: "clientY";
                        readonly direction: "top";
                    } | {
                        readonly offset: "offsetWidth";
                        readonly scroll: "scrollLeft";
                        readonly scrollSize: "scrollWidth";
                        readonly size: "width";
                        readonly key: "horizontal";
                        readonly axis: "X";
                        readonly client: "clientX";
                        readonly direction: "left";
                    }>;
                    thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                    offsetRatio: import("vue").ComputedRef<number>;
                    clickThumbHandler: (e: MouseEvent) => void;
                    clickTrackHandler: (e: MouseEvent) => void;
                    startDrag: (e: MouseEvent) => void;
                    mouseMoveDocumentHandler: (e: MouseEvent) => void;
                    mouseUpDocumentHandler: () => void;
                    mouseMoveScrollbarHandler: () => void;
                    mouseLeaveScrollbarHandler: () => void;
                    restoreOnselectstart: () => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }>>, {
                    readonly vertical: boolean;
                    readonly always: boolean;
                }>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly minSize: {
                    readonly type: import("vue").PropType<number>;
                    readonly required: true;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }>>, {
                readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            }>;
        }> & {} & import("vue").ComponentCustomProperties) | undefined>;
        listRefsMap: Record<"hours" | "minutes" | "seconds", import("vue").Ref<({
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                readonly height: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly always: boolean;
                readonly maxHeight: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly native: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly wrapStyle: import("vue").StyleValue;
                readonly wrapClass: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewClass: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewStyle: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
                readonly tag: string;
                readonly minSize: number;
                readonly noresize: boolean;
            }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                readonly ariaLabel: StringConstructor;
                readonly ariaOrientation: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
                readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
                readonly noresize: BooleanConstructor;
                readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                readonly always: BooleanConstructor;
                readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
                readonly id: StringConstructor;
                readonly role: StringConstructor;
            }>> & {
                onScroll?: ((args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => any) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "height" | "always" | "maxHeight" | "native" | "wrapStyle" | "wrapClass" | "viewClass" | "viewStyle" | "tag" | "minSize" | "noresize">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $emit: (event: "scroll", args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                readonly ariaLabel: StringConstructor;
                readonly ariaOrientation: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
                readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
                readonly noresize: BooleanConstructor;
                readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                readonly always: BooleanConstructor;
                readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
                readonly id: StringConstructor;
                readonly role: StringConstructor;
            }>> & {
                onScroll?: ((args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => any) | undefined;
            }, {
                COMPONENT_NAME: string;
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly ariaLabel: StringConstructor;
                    readonly ariaOrientation: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                    readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                    readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
                    readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                    readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                    readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
                    readonly noresize: BooleanConstructor;
                    readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                    readonly always: BooleanConstructor;
                    readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
                    readonly id: StringConstructor;
                    readonly role: StringConstructor;
                }>> & {
                    onScroll?: ((args_0: {
                        scrollTop: number;
                        scrollLeft: number;
                    }) => any) | undefined;
                }>>;
                emit: (event: "scroll", args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => void;
                ns: {
                    namespace: import("vue").ComputedRef<string>;
                    b: (blockSuffix?: string) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                stopResizeObserver: undefined;
                stopResizeListener: undefined;
                scrollbarRef: import("vue").Ref<HTMLDivElement | undefined>;
                wrapRef: import("vue").Ref<HTMLDivElement | undefined>;
                resizeRef: import("vue").Ref<HTMLElement | undefined>;
                barRef: import("vue").Ref<({
                    $: import("vue").ComponentInternalInstance;
                    $data: {};
                    $props: Partial<{
                        readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly minSize: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "always">;
                    $attrs: {
                        [x: string]: unknown;
                    };
                    $refs: {
                        [x: string]: unknown;
                    };
                    $slots: Readonly<{
                        [name: string]: import("vue").Slot | undefined;
                    }>;
                    $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                    $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                    $emit: (event: string, ...args: any[]) => void;
                    $el: any;
                    $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly minSize: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>>, {
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly minSize: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        scrollbar: import("../../..").ScrollbarContext | undefined;
                        moveX: import("vue").Ref<number>;
                        moveY: import("vue").Ref<number>;
                        sizeWidth: import("vue").Ref<string>;
                        sizeHeight: import("vue").Ref<string>;
                        ratioY: import("vue").Ref<number>;
                        ratioX: import("vue").Ref<number>;
                        handleScroll: (wrap: HTMLDivElement) => void;
                        update: () => void;
                        Thumb: import("vue").DefineComponent<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }, {
                            COMPONENT_NAME: string;
                            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                                readonly vertical: BooleanConstructor;
                                readonly size: StringConstructor;
                                readonly move: NumberConstructor;
                                readonly ratio: {
                                    readonly type: import("vue").PropType<number>;
                                    readonly required: true;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly always: BooleanConstructor;
                            }>> & {
                                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                            }>>;
                            scrollbar: import("../../..").ScrollbarContext;
                            ns: {
                                namespace: import("vue").ComputedRef<string>;
                                b: (blockSuffix?: string) => string;
                                e: (element?: string | undefined) => string;
                                m: (modifier?: string | undefined) => string;
                                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                                em: (element?: string | undefined, modifier?: string | undefined) => string;
                                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                                is: {
                                    (name: string, state: boolean | undefined): string;
                                    (name: string): string;
                                };
                                cssVar: (object: Record<string, string>) => Record<string, string>;
                                cssVarName: (name: string) => string;
                                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                                cssVarBlockName: (name: string) => string;
                            };
                            instance: import("vue").Ref<HTMLDivElement | undefined>;
                            thumb: import("vue").Ref<HTMLDivElement | undefined>;
                            thumbState: import("vue").Ref<{
                                X?: number | undefined;
                                Y?: number | undefined;
                            }>;
                            visible: import("vue").Ref<boolean>;
                            cursorDown: boolean;
                            cursorLeave: boolean;
                            originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                            bar: import("vue").ComputedRef<{
                                readonly offset: "offsetHeight";
                                readonly scroll: "scrollTop";
                                readonly scrollSize: "scrollHeight";
                                readonly size: "height";
                                readonly key: "vertical";
                                readonly axis: "Y";
                                readonly client: "clientY";
                                readonly direction: "top";
                            } | {
                                readonly offset: "offsetWidth";
                                readonly scroll: "scrollLeft";
                                readonly scrollSize: "scrollWidth";
                                readonly size: "width";
                                readonly key: "horizontal";
                                readonly axis: "X";
                                readonly client: "clientX";
                                readonly direction: "left";
                            }>;
                            thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                            offsetRatio: import("vue").ComputedRef<number>;
                            clickThumbHandler: (e: MouseEvent) => void;
                            clickTrackHandler: (e: MouseEvent) => void;
                            startDrag: (e: MouseEvent) => void;
                            mouseMoveDocumentHandler: (e: MouseEvent) => void;
                            mouseUpDocumentHandler: () => void;
                            mouseMoveScrollbarHandler: () => void;
                            mouseLeaveScrollbarHandler: () => void;
                            restoreOnselectstart: () => void;
                        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }>>, {
                            readonly vertical: boolean;
                            readonly always: boolean;
                        }>;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                        readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    }> & {
                        beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                        created?: ((() => void) | (() => void)[]) | undefined;
                        beforeMount?: ((() => void) | (() => void)[]) | undefined;
                        mounted?: ((() => void) | (() => void)[]) | undefined;
                        beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                        updated?: ((() => void) | (() => void)[]) | undefined;
                        activated?: ((() => void) | (() => void)[]) | undefined;
                        deactivated?: ((() => void) | (() => void)[]) | undefined;
                        beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                        beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                        destroyed?: ((() => void) | (() => void)[]) | undefined;
                        unmounted?: ((() => void) | (() => void)[]) | undefined;
                        renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                        renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                        errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
                    };
                    $forceUpdate: () => void;
                    $nextTick: typeof import("vue").nextTick;
                    $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                } & Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & import("vue").ShallowUnwrapRef<{
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly minSize: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext | undefined;
                    moveX: import("vue").Ref<number>;
                    moveY: import("vue").Ref<number>;
                    sizeWidth: import("vue").Ref<string>;
                    sizeHeight: import("vue").Ref<string>;
                    ratioY: import("vue").Ref<number>;
                    ratioX: import("vue").Ref<number>;
                    handleScroll: (wrap: HTMLDivElement) => void;
                    update: () => void;
                    Thumb: import("vue").DefineComponent<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }, {
                        COMPONENT_NAME: string;
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        scrollbar: import("../../..").ScrollbarContext;
                        ns: {
                            namespace: import("vue").ComputedRef<string>;
                            b: (blockSuffix?: string) => string;
                            e: (element?: string | undefined) => string;
                            m: (modifier?: string | undefined) => string;
                            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                            em: (element?: string | undefined, modifier?: string | undefined) => string;
                            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                            is: {
                                (name: string, state: boolean | undefined): string;
                                (name: string): string;
                            };
                            cssVar: (object: Record<string, string>) => Record<string, string>;
                            cssVarName: (name: string) => string;
                            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                            cssVarBlockName: (name: string) => string;
                        };
                        instance: import("vue").Ref<HTMLDivElement | undefined>;
                        thumb: import("vue").Ref<HTMLDivElement | undefined>;
                        thumbState: import("vue").Ref<{
                            X?: number | undefined;
                            Y?: number | undefined;
                        }>;
                        visible: import("vue").Ref<boolean>;
                        cursorDown: boolean;
                        cursorLeave: boolean;
                        originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                        bar: import("vue").ComputedRef<{
                            readonly offset: "offsetHeight";
                            readonly scroll: "scrollTop";
                            readonly scrollSize: "scrollHeight";
                            readonly size: "height";
                            readonly key: "vertical";
                            readonly axis: "Y";
                            readonly client: "clientY";
                            readonly direction: "top";
                        } | {
                            readonly offset: "offsetWidth";
                            readonly scroll: "scrollLeft";
                            readonly scrollSize: "scrollWidth";
                            readonly size: "width";
                            readonly key: "horizontal";
                            readonly axis: "X";
                            readonly client: "clientX";
                            readonly direction: "left";
                        }>;
                        thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                        offsetRatio: import("vue").ComputedRef<number>;
                        clickThumbHandler: (e: MouseEvent) => void;
                        clickTrackHandler: (e: MouseEvent) => void;
                        startDrag: (e: MouseEvent) => void;
                        mouseMoveDocumentHandler: (e: MouseEvent) => void;
                        mouseUpDocumentHandler: () => void;
                        mouseMoveScrollbarHandler: () => void;
                        mouseLeaveScrollbarHandler: () => void;
                        restoreOnselectstart: () => void;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>>, {
                        readonly vertical: boolean;
                        readonly always: boolean;
                    }>;
                }> & {} & import("vue").ComponentCustomProperties) | undefined>;
                wrapStyle: import("vue").ComputedRef<import("vue").StyleValue>;
                wrapKls: import("vue").ComputedRef<(string | unknown[] | {
                    [x: string]: boolean;
                })[]>;
                resizeKls: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>[]>;
                handleScroll: () => void;
                scrollTo: (arg1: unknown, arg2?: number | undefined) => void;
                setScrollTop: (value: number) => void;
                setScrollLeft: (value: number) => void;
                update: () => void;
                Bar: import("vue").DefineComponent<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly minSize: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext | undefined;
                    moveX: import("vue").Ref<number>;
                    moveY: import("vue").Ref<number>;
                    sizeWidth: import("vue").Ref<string>;
                    sizeHeight: import("vue").Ref<string>;
                    ratioY: import("vue").Ref<number>;
                    ratioX: import("vue").Ref<number>;
                    handleScroll: (wrap: HTMLDivElement) => void;
                    update: () => void;
                    Thumb: import("vue").DefineComponent<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }, {
                        COMPONENT_NAME: string;
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        scrollbar: import("../../..").ScrollbarContext;
                        ns: {
                            namespace: import("vue").ComputedRef<string>;
                            b: (blockSuffix?: string) => string;
                            e: (element?: string | undefined) => string;
                            m: (modifier?: string | undefined) => string;
                            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                            em: (element?: string | undefined, modifier?: string | undefined) => string;
                            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                            is: {
                                (name: string, state: boolean | undefined): string;
                                (name: string): string;
                            };
                            cssVar: (object: Record<string, string>) => Record<string, string>;
                            cssVarName: (name: string) => string;
                            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                            cssVarBlockName: (name: string) => string;
                        };
                        instance: import("vue").Ref<HTMLDivElement | undefined>;
                        thumb: import("vue").Ref<HTMLDivElement | undefined>;
                        thumbState: import("vue").Ref<{
                            X?: number | undefined;
                            Y?: number | undefined;
                        }>;
                        visible: import("vue").Ref<boolean>;
                        cursorDown: boolean;
                        cursorLeave: boolean;
                        originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                        bar: import("vue").ComputedRef<{
                            readonly offset: "offsetHeight";
                            readonly scroll: "scrollTop";
                            readonly scrollSize: "scrollHeight";
                            readonly size: "height";
                            readonly key: "vertical";
                            readonly axis: "Y";
                            readonly client: "clientY";
                            readonly direction: "top";
                        } | {
                            readonly offset: "offsetWidth";
                            readonly scroll: "scrollLeft";
                            readonly scrollSize: "scrollWidth";
                            readonly size: "width";
                            readonly key: "horizontal";
                            readonly axis: "X";
                            readonly client: "clientX";
                            readonly direction: "left";
                        }>;
                        thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                        offsetRatio: import("vue").ComputedRef<number>;
                        clickThumbHandler: (e: MouseEvent) => void;
                        clickTrackHandler: (e: MouseEvent) => void;
                        startDrag: (e: MouseEvent) => void;
                        mouseMoveDocumentHandler: (e: MouseEvent) => void;
                        mouseUpDocumentHandler: () => void;
                        mouseMoveScrollbarHandler: () => void;
                        mouseLeaveScrollbarHandler: () => void;
                        restoreOnselectstart: () => void;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>>, {
                        readonly vertical: boolean;
                        readonly always: boolean;
                    }>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>>, {
                    readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                }>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                scroll: ({ scrollTop, scrollLeft, }: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => boolean;
            }, string, {
                readonly height: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly always: boolean;
                readonly maxHeight: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly native: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly wrapStyle: import("vue").StyleValue;
                readonly wrapClass: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewClass: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewStyle: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
                readonly tag: string;
                readonly minSize: number;
                readonly noresize: boolean;
            }> & {
                beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                created?: ((() => void) | (() => void)[]) | undefined;
                beforeMount?: ((() => void) | (() => void)[]) | undefined;
                mounted?: ((() => void) | (() => void)[]) | undefined;
                beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                updated?: ((() => void) | (() => void)[]) | undefined;
                activated?: ((() => void) | (() => void)[]) | undefined;
                deactivated?: ((() => void) | (() => void)[]) | undefined;
                beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                destroyed?: ((() => void) | (() => void)[]) | undefined;
                unmounted?: ((() => void) | (() => void)[]) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{
            readonly ariaLabel: StringConstructor;
            readonly ariaOrientation: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
            readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
            readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
            readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
            readonly noresize: BooleanConstructor;
            readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
            readonly always: BooleanConstructor;
            readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
            readonly id: StringConstructor;
            readonly role: StringConstructor;
        }>> & {
            onScroll?: ((args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<{
            COMPONENT_NAME: string;
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly ariaLabel: StringConstructor;
                readonly ariaOrientation: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
                readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
                readonly noresize: BooleanConstructor;
                readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                readonly always: BooleanConstructor;
                readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
                readonly id: StringConstructor;
                readonly role: StringConstructor;
            }>> & {
                onScroll?: ((args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => any) | undefined;
            }>>;
            emit: (event: "scroll", args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => void;
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            stopResizeObserver: undefined;
            stopResizeListener: undefined;
            scrollbarRef: import("vue").Ref<HTMLDivElement | undefined>;
            wrapRef: import("vue").Ref<HTMLDivElement | undefined>;
            resizeRef: import("vue").Ref<HTMLElement | undefined>;
            barRef: import("vue").Ref<({
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "always">;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $emit: (event: string, ...args: any[]) => void;
                $el: any;
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>>, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly minSize: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext | undefined;
                    moveX: import("vue").Ref<number>;
                    moveY: import("vue").Ref<number>;
                    sizeWidth: import("vue").Ref<string>;
                    sizeHeight: import("vue").Ref<string>;
                    ratioY: import("vue").Ref<number>;
                    ratioX: import("vue").Ref<number>;
                    handleScroll: (wrap: HTMLDivElement) => void;
                    update: () => void;
                    Thumb: import("vue").DefineComponent<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }, {
                        COMPONENT_NAME: string;
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        scrollbar: import("../../..").ScrollbarContext;
                        ns: {
                            namespace: import("vue").ComputedRef<string>;
                            b: (blockSuffix?: string) => string;
                            e: (element?: string | undefined) => string;
                            m: (modifier?: string | undefined) => string;
                            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                            em: (element?: string | undefined, modifier?: string | undefined) => string;
                            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                            is: {
                                (name: string, state: boolean | undefined): string;
                                (name: string): string;
                            };
                            cssVar: (object: Record<string, string>) => Record<string, string>;
                            cssVarName: (name: string) => string;
                            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                            cssVarBlockName: (name: string) => string;
                        };
                        instance: import("vue").Ref<HTMLDivElement | undefined>;
                        thumb: import("vue").Ref<HTMLDivElement | undefined>;
                        thumbState: import("vue").Ref<{
                            X?: number | undefined;
                            Y?: number | undefined;
                        }>;
                        visible: import("vue").Ref<boolean>;
                        cursorDown: boolean;
                        cursorLeave: boolean;
                        originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                        bar: import("vue").ComputedRef<{
                            readonly offset: "offsetHeight";
                            readonly scroll: "scrollTop";
                            readonly scrollSize: "scrollHeight";
                            readonly size: "height";
                            readonly key: "vertical";
                            readonly axis: "Y";
                            readonly client: "clientY";
                            readonly direction: "top";
                        } | {
                            readonly offset: "offsetWidth";
                            readonly scroll: "scrollLeft";
                            readonly scrollSize: "scrollWidth";
                            readonly size: "width";
                            readonly key: "horizontal";
                            readonly axis: "X";
                            readonly client: "clientX";
                            readonly direction: "left";
                        }>;
                        thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                        offsetRatio: import("vue").ComputedRef<number>;
                        clickThumbHandler: (e: MouseEvent) => void;
                        clickTrackHandler: (e: MouseEvent) => void;
                        startDrag: (e: MouseEvent) => void;
                        mouseMoveDocumentHandler: (e: MouseEvent) => void;
                        mouseUpDocumentHandler: () => void;
                        mouseMoveScrollbarHandler: () => void;
                        mouseLeaveScrollbarHandler: () => void;
                        restoreOnselectstart: () => void;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>>, {
                        readonly vertical: boolean;
                        readonly always: boolean;
                    }>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                    readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                }> & {
                    beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                    created?: ((() => void) | (() => void)[]) | undefined;
                    beforeMount?: ((() => void) | (() => void)[]) | undefined;
                    mounted?: ((() => void) | (() => void)[]) | undefined;
                    beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                    updated?: ((() => void) | (() => void)[]) | undefined;
                    activated?: ((() => void) | (() => void)[]) | undefined;
                    deactivated?: ((() => void) | (() => void)[]) | undefined;
                    beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                    beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                    destroyed?: ((() => void) | (() => void)[]) | undefined;
                    unmounted?: ((() => void) | (() => void)[]) | undefined;
                    renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof import("vue").nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{
                readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly minSize: {
                    readonly type: import("vue").PropType<number>;
                    readonly required: true;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }>> & import("vue").ShallowUnwrapRef<{
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                scrollbar: import("../../..").ScrollbarContext | undefined;
                moveX: import("vue").Ref<number>;
                moveY: import("vue").Ref<number>;
                sizeWidth: import("vue").Ref<string>;
                sizeHeight: import("vue").Ref<string>;
                ratioY: import("vue").Ref<number>;
                ratioX: import("vue").Ref<number>;
                handleScroll: (wrap: HTMLDivElement) => void;
                update: () => void;
                Thumb: import("vue").DefineComponent<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }, {
                    COMPONENT_NAME: string;
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext;
                    ns: {
                        namespace: import("vue").ComputedRef<string>;
                        b: (blockSuffix?: string) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    instance: import("vue").Ref<HTMLDivElement | undefined>;
                    thumb: import("vue").Ref<HTMLDivElement | undefined>;
                    thumbState: import("vue").Ref<{
                        X?: number | undefined;
                        Y?: number | undefined;
                    }>;
                    visible: import("vue").Ref<boolean>;
                    cursorDown: boolean;
                    cursorLeave: boolean;
                    originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                    bar: import("vue").ComputedRef<{
                        readonly offset: "offsetHeight";
                        readonly scroll: "scrollTop";
                        readonly scrollSize: "scrollHeight";
                        readonly size: "height";
                        readonly key: "vertical";
                        readonly axis: "Y";
                        readonly client: "clientY";
                        readonly direction: "top";
                    } | {
                        readonly offset: "offsetWidth";
                        readonly scroll: "scrollLeft";
                        readonly scrollSize: "scrollWidth";
                        readonly size: "width";
                        readonly key: "horizontal";
                        readonly axis: "X";
                        readonly client: "clientX";
                        readonly direction: "left";
                    }>;
                    thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                    offsetRatio: import("vue").ComputedRef<number>;
                    clickThumbHandler: (e: MouseEvent) => void;
                    clickTrackHandler: (e: MouseEvent) => void;
                    startDrag: (e: MouseEvent) => void;
                    mouseMoveDocumentHandler: (e: MouseEvent) => void;
                    mouseUpDocumentHandler: () => void;
                    mouseMoveScrollbarHandler: () => void;
                    mouseLeaveScrollbarHandler: () => void;
                    restoreOnselectstart: () => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }>>, {
                    readonly vertical: boolean;
                    readonly always: boolean;
                }>;
            }> & {} & import("vue").ComponentCustomProperties) | undefined>;
            wrapStyle: import("vue").ComputedRef<import("vue").StyleValue>;
            wrapKls: import("vue").ComputedRef<(string | unknown[] | {
                [x: string]: boolean;
            })[]>;
            resizeKls: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>[]>;
            handleScroll: () => void;
            scrollTo: (arg1: unknown, arg2?: number | undefined) => void;
            setScrollTop: (value: number) => void;
            setScrollLeft: (value: number) => void;
            update: () => void;
            Bar: import("vue").DefineComponent<{
                readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly minSize: {
                    readonly type: import("vue").PropType<number>;
                    readonly required: true;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                scrollbar: import("../../..").ScrollbarContext | undefined;
                moveX: import("vue").Ref<number>;
                moveY: import("vue").Ref<number>;
                sizeWidth: import("vue").Ref<string>;
                sizeHeight: import("vue").Ref<string>;
                ratioY: import("vue").Ref<number>;
                ratioX: import("vue").Ref<number>;
                handleScroll: (wrap: HTMLDivElement) => void;
                update: () => void;
                Thumb: import("vue").DefineComponent<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }, {
                    COMPONENT_NAME: string;
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext;
                    ns: {
                        namespace: import("vue").ComputedRef<string>;
                        b: (blockSuffix?: string) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    instance: import("vue").Ref<HTMLDivElement | undefined>;
                    thumb: import("vue").Ref<HTMLDivElement | undefined>;
                    thumbState: import("vue").Ref<{
                        X?: number | undefined;
                        Y?: number | undefined;
                    }>;
                    visible: import("vue").Ref<boolean>;
                    cursorDown: boolean;
                    cursorLeave: boolean;
                    originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                    bar: import("vue").ComputedRef<{
                        readonly offset: "offsetHeight";
                        readonly scroll: "scrollTop";
                        readonly scrollSize: "scrollHeight";
                        readonly size: "height";
                        readonly key: "vertical";
                        readonly axis: "Y";
                        readonly client: "clientY";
                        readonly direction: "top";
                    } | {
                        readonly offset: "offsetWidth";
                        readonly scroll: "scrollLeft";
                        readonly scrollSize: "scrollWidth";
                        readonly size: "width";
                        readonly key: "horizontal";
                        readonly axis: "X";
                        readonly client: "clientX";
                        readonly direction: "left";
                    }>;
                    thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                    offsetRatio: import("vue").ComputedRef<number>;
                    clickThumbHandler: (e: MouseEvent) => void;
                    clickTrackHandler: (e: MouseEvent) => void;
                    startDrag: (e: MouseEvent) => void;
                    mouseMoveDocumentHandler: (e: MouseEvent) => void;
                    mouseUpDocumentHandler: () => void;
                    mouseMoveScrollbarHandler: () => void;
                    mouseLeaveScrollbarHandler: () => void;
                    restoreOnselectstart: () => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }>>, {
                    readonly vertical: boolean;
                    readonly always: boolean;
                }>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly minSize: {
                    readonly type: import("vue").PropType<number>;
                    readonly required: true;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }>>, {
                readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            }>;
        }> & {} & import("vue").ComponentCustomProperties) | undefined>>;
        spinnerItems: import("vue").ComputedRef<readonly ["hours", "minutes", "seconds"] | ("hours" | "minutes" | "seconds")[]>;
        timePartials: import("vue").ComputedRef<Record<"hours" | "minutes" | "seconds", number>>;
        timeList: import("vue").ComputedRef<{
            hours: boolean[];
            minutes: boolean[];
            seconds: boolean[];
        }>;
        arrowControlTimeList: import("vue").ComputedRef<Record<"hours" | "minutes" | "seconds", import("../utils").TimeList>>;
        debouncedResetScroll: import("lodash").DebouncedFunc<(type: any) => void>;
        getAmPmFlag: (hour: number) => string;
        emitSelectRange: (type: "hours" | "minutes" | "seconds") => void;
        adjustCurrentSpinner: (type: "hours" | "minutes" | "seconds") => void;
        adjustSpinners: () => void;
        getScrollbarElement: (el: HTMLElement) => HTMLElement;
        adjustSpinner: (type: "hours" | "minutes" | "seconds", value: number) => void;
        typeItemHeight: (type: "hours" | "minutes" | "seconds") => number;
        onIncrement: () => void;
        onDecrement: () => void;
        scrollDown: (step: number) => void;
        findNextUnDisabled: (type: "hours" | "minutes" | "seconds", now: number, step: number, total: number) => number;
        modifyDateField: (type: "hours" | "minutes" | "seconds", value: number) => void;
        handleClick: (type: "hours" | "minutes" | "seconds", { value, disabled }: {
            value: number;
            disabled: boolean;
        }) => void;
        handleScroll: (type: "hours" | "minutes" | "seconds") => void;
        scrollBarHeight: (type: "hours" | "minutes" | "seconds") => any;
        bindScrollEvent: () => void;
        setRef: (scrollbar: {
            $: import("vue").ComponentInternalInstance;
            $data: {};
            $props: Partial<{
                readonly height: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly always: boolean;
                readonly maxHeight: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly native: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly wrapStyle: import("vue").StyleValue;
                readonly wrapClass: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewClass: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewStyle: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
                readonly tag: string;
                readonly minSize: number;
                readonly noresize: boolean;
            }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                readonly ariaLabel: StringConstructor;
                readonly ariaOrientation: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
                readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
                readonly noresize: BooleanConstructor;
                readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                readonly always: BooleanConstructor;
                readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
                readonly id: StringConstructor;
                readonly role: StringConstructor;
            }>> & {
                onScroll?: ((args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => any) | undefined;
            } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "height" | "always" | "maxHeight" | "native" | "wrapStyle" | "wrapClass" | "viewClass" | "viewStyle" | "tag" | "minSize" | "noresize">;
            $attrs: {
                [x: string]: unknown;
            };
            $refs: {
                [x: string]: unknown;
            };
            $slots: Readonly<{
                [name: string]: import("vue").Slot | undefined;
            }>;
            $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
            $emit: (event: "scroll", args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => void;
            $el: any;
            $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                readonly ariaLabel: StringConstructor;
                readonly ariaOrientation: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
                readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
                readonly noresize: BooleanConstructor;
                readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                readonly always: BooleanConstructor;
                readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
                readonly id: StringConstructor;
                readonly role: StringConstructor;
            }>> & {
                onScroll?: ((args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => any) | undefined;
            }, {
                COMPONENT_NAME: string;
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly ariaLabel: StringConstructor;
                    readonly ariaOrientation: {
                        readonly type: import("vue").PropType<string>;
                        readonly required: false;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                    readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                    readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                    readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
                    readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                    readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                    readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
                    readonly noresize: BooleanConstructor;
                    readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                    readonly always: BooleanConstructor;
                    readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
                    readonly id: StringConstructor;
                    readonly role: StringConstructor;
                }>> & {
                    onScroll?: ((args_0: {
                        scrollTop: number;
                        scrollLeft: number;
                    }) => any) | undefined;
                }>>;
                emit: (event: "scroll", args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => void;
                ns: {
                    namespace: import("vue").ComputedRef<string>;
                    b: (blockSuffix?: string) => string;
                    e: (element?: string | undefined) => string;
                    m: (modifier?: string | undefined) => string;
                    be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                    em: (element?: string | undefined, modifier?: string | undefined) => string;
                    bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                    bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                    is: {
                        (name: string, state: boolean | undefined): string;
                        (name: string): string;
                    };
                    cssVar: (object: Record<string, string>) => Record<string, string>;
                    cssVarName: (name: string) => string;
                    cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                    cssVarBlockName: (name: string) => string;
                };
                stopResizeObserver: undefined;
                stopResizeListener: undefined;
                scrollbarRef: import("vue").Ref<HTMLDivElement | undefined>;
                wrapRef: import("vue").Ref<HTMLDivElement | undefined>;
                resizeRef: import("vue").Ref<HTMLElement | undefined>;
                barRef: import("vue").Ref<({
                    $: import("vue").ComponentInternalInstance;
                    $data: {};
                    $props: Partial<{
                        readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly minSize: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "always">;
                    $attrs: {
                        [x: string]: unknown;
                    };
                    $refs: {
                        [x: string]: unknown;
                    };
                    $slots: Readonly<{
                        [name: string]: import("vue").Slot | undefined;
                    }>;
                    $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                    $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                    $emit: (event: string, ...args: any[]) => void;
                    $el: any;
                    $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly minSize: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>>, {
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                            readonly minSize: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        scrollbar: import("../../..").ScrollbarContext | undefined;
                        moveX: import("vue").Ref<number>;
                        moveY: import("vue").Ref<number>;
                        sizeWidth: import("vue").Ref<string>;
                        sizeHeight: import("vue").Ref<string>;
                        ratioY: import("vue").Ref<number>;
                        ratioX: import("vue").Ref<number>;
                        handleScroll: (wrap: HTMLDivElement) => void;
                        update: () => void;
                        Thumb: import("vue").DefineComponent<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }, {
                            COMPONENT_NAME: string;
                            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                                readonly vertical: BooleanConstructor;
                                readonly size: StringConstructor;
                                readonly move: NumberConstructor;
                                readonly ratio: {
                                    readonly type: import("vue").PropType<number>;
                                    readonly required: true;
                                    readonly validator: ((val: unknown) => boolean) | undefined;
                                    __epPropKey: true;
                                };
                                readonly always: BooleanConstructor;
                            }>> & {
                                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                            }>>;
                            scrollbar: import("../../..").ScrollbarContext;
                            ns: {
                                namespace: import("vue").ComputedRef<string>;
                                b: (blockSuffix?: string) => string;
                                e: (element?: string | undefined) => string;
                                m: (modifier?: string | undefined) => string;
                                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                                em: (element?: string | undefined, modifier?: string | undefined) => string;
                                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                                is: {
                                    (name: string, state: boolean | undefined): string;
                                    (name: string): string;
                                };
                                cssVar: (object: Record<string, string>) => Record<string, string>;
                                cssVarName: (name: string) => string;
                                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                                cssVarBlockName: (name: string) => string;
                            };
                            instance: import("vue").Ref<HTMLDivElement | undefined>;
                            thumb: import("vue").Ref<HTMLDivElement | undefined>;
                            thumbState: import("vue").Ref<{
                                X?: number | undefined;
                                Y?: number | undefined;
                            }>;
                            visible: import("vue").Ref<boolean>;
                            cursorDown: boolean;
                            cursorLeave: boolean;
                            originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                            bar: import("vue").ComputedRef<{
                                readonly offset: "offsetHeight";
                                readonly scroll: "scrollTop";
                                readonly scrollSize: "scrollHeight";
                                readonly size: "height";
                                readonly key: "vertical";
                                readonly axis: "Y";
                                readonly client: "clientY";
                                readonly direction: "top";
                            } | {
                                readonly offset: "offsetWidth";
                                readonly scroll: "scrollLeft";
                                readonly scrollSize: "scrollWidth";
                                readonly size: "width";
                                readonly key: "horizontal";
                                readonly axis: "X";
                                readonly client: "clientX";
                                readonly direction: "left";
                            }>;
                            thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                            offsetRatio: import("vue").ComputedRef<number>;
                            clickThumbHandler: (e: MouseEvent) => void;
                            clickTrackHandler: (e: MouseEvent) => void;
                            startDrag: (e: MouseEvent) => void;
                            mouseMoveDocumentHandler: (e: MouseEvent) => void;
                            mouseUpDocumentHandler: () => void;
                            mouseMoveScrollbarHandler: () => void;
                            mouseLeaveScrollbarHandler: () => void;
                            restoreOnselectstart: () => void;
                        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }>>, {
                            readonly vertical: boolean;
                            readonly always: boolean;
                        }>;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                        readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                    }> & {
                        beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                        created?: ((() => void) | (() => void)[]) | undefined;
                        beforeMount?: ((() => void) | (() => void)[]) | undefined;
                        mounted?: ((() => void) | (() => void)[]) | undefined;
                        beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                        updated?: ((() => void) | (() => void)[]) | undefined;
                        activated?: ((() => void) | (() => void)[]) | undefined;
                        deactivated?: ((() => void) | (() => void)[]) | undefined;
                        beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                        beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                        destroyed?: ((() => void) | (() => void)[]) | undefined;
                        unmounted?: ((() => void) | (() => void)[]) | undefined;
                        renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                        renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                        errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
                    };
                    $forceUpdate: () => void;
                    $nextTick: typeof import("vue").nextTick;
                    $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
                } & Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & import("vue").ShallowUnwrapRef<{
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly minSize: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext | undefined;
                    moveX: import("vue").Ref<number>;
                    moveY: import("vue").Ref<number>;
                    sizeWidth: import("vue").Ref<string>;
                    sizeHeight: import("vue").Ref<string>;
                    ratioY: import("vue").Ref<number>;
                    ratioX: import("vue").Ref<number>;
                    handleScroll: (wrap: HTMLDivElement) => void;
                    update: () => void;
                    Thumb: import("vue").DefineComponent<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }, {
                        COMPONENT_NAME: string;
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        scrollbar: import("../../..").ScrollbarContext;
                        ns: {
                            namespace: import("vue").ComputedRef<string>;
                            b: (blockSuffix?: string) => string;
                            e: (element?: string | undefined) => string;
                            m: (modifier?: string | undefined) => string;
                            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                            em: (element?: string | undefined, modifier?: string | undefined) => string;
                            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                            is: {
                                (name: string, state: boolean | undefined): string;
                                (name: string): string;
                            };
                            cssVar: (object: Record<string, string>) => Record<string, string>;
                            cssVarName: (name: string) => string;
                            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                            cssVarBlockName: (name: string) => string;
                        };
                        instance: import("vue").Ref<HTMLDivElement | undefined>;
                        thumb: import("vue").Ref<HTMLDivElement | undefined>;
                        thumbState: import("vue").Ref<{
                            X?: number | undefined;
                            Y?: number | undefined;
                        }>;
                        visible: import("vue").Ref<boolean>;
                        cursorDown: boolean;
                        cursorLeave: boolean;
                        originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                        bar: import("vue").ComputedRef<{
                            readonly offset: "offsetHeight";
                            readonly scroll: "scrollTop";
                            readonly scrollSize: "scrollHeight";
                            readonly size: "height";
                            readonly key: "vertical";
                            readonly axis: "Y";
                            readonly client: "clientY";
                            readonly direction: "top";
                        } | {
                            readonly offset: "offsetWidth";
                            readonly scroll: "scrollLeft";
                            readonly scrollSize: "scrollWidth";
                            readonly size: "width";
                            readonly key: "horizontal";
                            readonly axis: "X";
                            readonly client: "clientX";
                            readonly direction: "left";
                        }>;
                        thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                        offsetRatio: import("vue").ComputedRef<number>;
                        clickThumbHandler: (e: MouseEvent) => void;
                        clickTrackHandler: (e: MouseEvent) => void;
                        startDrag: (e: MouseEvent) => void;
                        mouseMoveDocumentHandler: (e: MouseEvent) => void;
                        mouseUpDocumentHandler: () => void;
                        mouseMoveScrollbarHandler: () => void;
                        mouseLeaveScrollbarHandler: () => void;
                        restoreOnselectstart: () => void;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>>, {
                        readonly vertical: boolean;
                        readonly always: boolean;
                    }>;
                }> & {} & import("vue").ComponentCustomProperties) | undefined>;
                wrapStyle: import("vue").ComputedRef<import("vue").StyleValue>;
                wrapKls: import("vue").ComputedRef<(string | unknown[] | {
                    [x: string]: boolean;
                })[]>;
                resizeKls: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>[]>;
                handleScroll: () => void;
                scrollTo: (arg1: unknown, arg2?: number | undefined) => void;
                setScrollTop: (value: number) => void;
                setScrollLeft: (value: number) => void;
                update: () => void;
                Bar: import("vue").DefineComponent<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly minSize: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext | undefined;
                    moveX: import("vue").Ref<number>;
                    moveY: import("vue").Ref<number>;
                    sizeWidth: import("vue").Ref<string>;
                    sizeHeight: import("vue").Ref<string>;
                    ratioY: import("vue").Ref<number>;
                    ratioX: import("vue").Ref<number>;
                    handleScroll: (wrap: HTMLDivElement) => void;
                    update: () => void;
                    Thumb: import("vue").DefineComponent<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }, {
                        COMPONENT_NAME: string;
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        scrollbar: import("../../..").ScrollbarContext;
                        ns: {
                            namespace: import("vue").ComputedRef<string>;
                            b: (blockSuffix?: string) => string;
                            e: (element?: string | undefined) => string;
                            m: (modifier?: string | undefined) => string;
                            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                            em: (element?: string | undefined, modifier?: string | undefined) => string;
                            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                            is: {
                                (name: string, state: boolean | undefined): string;
                                (name: string): string;
                            };
                            cssVar: (object: Record<string, string>) => Record<string, string>;
                            cssVarName: (name: string) => string;
                            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                            cssVarBlockName: (name: string) => string;
                        };
                        instance: import("vue").Ref<HTMLDivElement | undefined>;
                        thumb: import("vue").Ref<HTMLDivElement | undefined>;
                        thumbState: import("vue").Ref<{
                            X?: number | undefined;
                            Y?: number | undefined;
                        }>;
                        visible: import("vue").Ref<boolean>;
                        cursorDown: boolean;
                        cursorLeave: boolean;
                        originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                        bar: import("vue").ComputedRef<{
                            readonly offset: "offsetHeight";
                            readonly scroll: "scrollTop";
                            readonly scrollSize: "scrollHeight";
                            readonly size: "height";
                            readonly key: "vertical";
                            readonly axis: "Y";
                            readonly client: "clientY";
                            readonly direction: "top";
                        } | {
                            readonly offset: "offsetWidth";
                            readonly scroll: "scrollLeft";
                            readonly scrollSize: "scrollWidth";
                            readonly size: "width";
                            readonly key: "horizontal";
                            readonly axis: "X";
                            readonly client: "clientX";
                            readonly direction: "left";
                        }>;
                        thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                        offsetRatio: import("vue").ComputedRef<number>;
                        clickThumbHandler: (e: MouseEvent) => void;
                        clickTrackHandler: (e: MouseEvent) => void;
                        startDrag: (e: MouseEvent) => void;
                        mouseMoveDocumentHandler: (e: MouseEvent) => void;
                        mouseUpDocumentHandler: () => void;
                        mouseMoveScrollbarHandler: () => void;
                        mouseLeaveScrollbarHandler: () => void;
                        restoreOnselectstart: () => void;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>>, {
                        readonly vertical: boolean;
                        readonly always: boolean;
                    }>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>>, {
                    readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                }>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                scroll: ({ scrollTop, scrollLeft, }: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => boolean;
            }, string, {
                readonly height: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly always: boolean;
                readonly maxHeight: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
                readonly native: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                readonly wrapStyle: import("vue").StyleValue;
                readonly wrapClass: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewClass: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
                readonly viewStyle: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
                readonly tag: string;
                readonly minSize: number;
                readonly noresize: boolean;
            }> & {
                beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                created?: ((() => void) | (() => void)[]) | undefined;
                beforeMount?: ((() => void) | (() => void)[]) | undefined;
                mounted?: ((() => void) | (() => void)[]) | undefined;
                beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                updated?: ((() => void) | (() => void)[]) | undefined;
                activated?: ((() => void) | (() => void)[]) | undefined;
                deactivated?: ((() => void) | (() => void)[]) | undefined;
                beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                destroyed?: ((() => void) | (() => void)[]) | undefined;
                unmounted?: ((() => void) | (() => void)[]) | undefined;
                renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
            };
            $forceUpdate: () => void;
            $nextTick: typeof import("vue").nextTick;
            $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
        } & Readonly<import("vue").ExtractPropTypes<{
            readonly ariaLabel: StringConstructor;
            readonly ariaOrientation: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
            readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
            readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
            readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
            readonly noresize: BooleanConstructor;
            readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
            readonly always: BooleanConstructor;
            readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
            readonly id: StringConstructor;
            readonly role: StringConstructor;
        }>> & {
            onScroll?: ((args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => any) | undefined;
        } & import("vue").ShallowUnwrapRef<{
            COMPONENT_NAME: string;
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly ariaLabel: StringConstructor;
                readonly ariaOrientation: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
                readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
                readonly noresize: BooleanConstructor;
                readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                readonly always: BooleanConstructor;
                readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
                readonly id: StringConstructor;
                readonly role: StringConstructor;
            }>> & {
                onScroll?: ((args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => any) | undefined;
            }>>;
            emit: (event: "scroll", args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => void;
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            stopResizeObserver: undefined;
            stopResizeListener: undefined;
            scrollbarRef: import("vue").Ref<HTMLDivElement | undefined>;
            wrapRef: import("vue").Ref<HTMLDivElement | undefined>;
            resizeRef: import("vue").Ref<HTMLElement | undefined>;
            barRef: import("vue").Ref<({
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "always">;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $emit: (event: string, ...args: any[]) => void;
                $el: any;
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>>, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly minSize: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext | undefined;
                    moveX: import("vue").Ref<number>;
                    moveY: import("vue").Ref<number>;
                    sizeWidth: import("vue").Ref<string>;
                    sizeHeight: import("vue").Ref<string>;
                    ratioY: import("vue").Ref<number>;
                    ratioX: import("vue").Ref<number>;
                    handleScroll: (wrap: HTMLDivElement) => void;
                    update: () => void;
                    Thumb: import("vue").DefineComponent<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }, {
                        COMPONENT_NAME: string;
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        scrollbar: import("../../..").ScrollbarContext;
                        ns: {
                            namespace: import("vue").ComputedRef<string>;
                            b: (blockSuffix?: string) => string;
                            e: (element?: string | undefined) => string;
                            m: (modifier?: string | undefined) => string;
                            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                            em: (element?: string | undefined, modifier?: string | undefined) => string;
                            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                            is: {
                                (name: string, state: boolean | undefined): string;
                                (name: string): string;
                            };
                            cssVar: (object: Record<string, string>) => Record<string, string>;
                            cssVarName: (name: string) => string;
                            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                            cssVarBlockName: (name: string) => string;
                        };
                        instance: import("vue").Ref<HTMLDivElement | undefined>;
                        thumb: import("vue").Ref<HTMLDivElement | undefined>;
                        thumbState: import("vue").Ref<{
                            X?: number | undefined;
                            Y?: number | undefined;
                        }>;
                        visible: import("vue").Ref<boolean>;
                        cursorDown: boolean;
                        cursorLeave: boolean;
                        originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                        bar: import("vue").ComputedRef<{
                            readonly offset: "offsetHeight";
                            readonly scroll: "scrollTop";
                            readonly scrollSize: "scrollHeight";
                            readonly size: "height";
                            readonly key: "vertical";
                            readonly axis: "Y";
                            readonly client: "clientY";
                            readonly direction: "top";
                        } | {
                            readonly offset: "offsetWidth";
                            readonly scroll: "scrollLeft";
                            readonly scrollSize: "scrollWidth";
                            readonly size: "width";
                            readonly key: "horizontal";
                            readonly axis: "X";
                            readonly client: "clientX";
                            readonly direction: "left";
                        }>;
                        thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                        offsetRatio: import("vue").ComputedRef<number>;
                        clickThumbHandler: (e: MouseEvent) => void;
                        clickTrackHandler: (e: MouseEvent) => void;
                        startDrag: (e: MouseEvent) => void;
                        mouseMoveDocumentHandler: (e: MouseEvent) => void;
                        mouseUpDocumentHandler: () => void;
                        mouseMoveScrollbarHandler: () => void;
                        mouseLeaveScrollbarHandler: () => void;
                        restoreOnselectstart: () => void;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>>, {
                        readonly vertical: boolean;
                        readonly always: boolean;
                    }>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                    readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                }> & {
                    beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                    created?: ((() => void) | (() => void)[]) | undefined;
                    beforeMount?: ((() => void) | (() => void)[]) | undefined;
                    mounted?: ((() => void) | (() => void)[]) | undefined;
                    beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                    updated?: ((() => void) | (() => void)[]) | undefined;
                    activated?: ((() => void) | (() => void)[]) | undefined;
                    deactivated?: ((() => void) | (() => void)[]) | undefined;
                    beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                    beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                    destroyed?: ((() => void) | (() => void)[]) | undefined;
                    unmounted?: ((() => void) | (() => void)[]) | undefined;
                    renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof import("vue").nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{
                readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly minSize: {
                    readonly type: import("vue").PropType<number>;
                    readonly required: true;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }>> & import("vue").ShallowUnwrapRef<{
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                scrollbar: import("../../..").ScrollbarContext | undefined;
                moveX: import("vue").Ref<number>;
                moveY: import("vue").Ref<number>;
                sizeWidth: import("vue").Ref<string>;
                sizeHeight: import("vue").Ref<string>;
                ratioY: import("vue").Ref<number>;
                ratioX: import("vue").Ref<number>;
                handleScroll: (wrap: HTMLDivElement) => void;
                update: () => void;
                Thumb: import("vue").DefineComponent<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }, {
                    COMPONENT_NAME: string;
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext;
                    ns: {
                        namespace: import("vue").ComputedRef<string>;
                        b: (blockSuffix?: string) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    instance: import("vue").Ref<HTMLDivElement | undefined>;
                    thumb: import("vue").Ref<HTMLDivElement | undefined>;
                    thumbState: import("vue").Ref<{
                        X?: number | undefined;
                        Y?: number | undefined;
                    }>;
                    visible: import("vue").Ref<boolean>;
                    cursorDown: boolean;
                    cursorLeave: boolean;
                    originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                    bar: import("vue").ComputedRef<{
                        readonly offset: "offsetHeight";
                        readonly scroll: "scrollTop";
                        readonly scrollSize: "scrollHeight";
                        readonly size: "height";
                        readonly key: "vertical";
                        readonly axis: "Y";
                        readonly client: "clientY";
                        readonly direction: "top";
                    } | {
                        readonly offset: "offsetWidth";
                        readonly scroll: "scrollLeft";
                        readonly scrollSize: "scrollWidth";
                        readonly size: "width";
                        readonly key: "horizontal";
                        readonly axis: "X";
                        readonly client: "clientX";
                        readonly direction: "left";
                    }>;
                    thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                    offsetRatio: import("vue").ComputedRef<number>;
                    clickThumbHandler: (e: MouseEvent) => void;
                    clickTrackHandler: (e: MouseEvent) => void;
                    startDrag: (e: MouseEvent) => void;
                    mouseMoveDocumentHandler: (e: MouseEvent) => void;
                    mouseUpDocumentHandler: () => void;
                    mouseMoveScrollbarHandler: () => void;
                    mouseLeaveScrollbarHandler: () => void;
                    restoreOnselectstart: () => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }>>, {
                    readonly vertical: boolean;
                    readonly always: boolean;
                }>;
            }> & {} & import("vue").ComponentCustomProperties) | undefined>;
            wrapStyle: import("vue").ComputedRef<import("vue").StyleValue>;
            wrapKls: import("vue").ComputedRef<(string | unknown[] | {
                [x: string]: boolean;
            })[]>;
            resizeKls: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>[]>;
            handleScroll: () => void;
            scrollTo: (arg1: unknown, arg2?: number | undefined) => void;
            setScrollTop: (value: number) => void;
            setScrollLeft: (value: number) => void;
            update: () => void;
            Bar: import("vue").DefineComponent<{
                readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly minSize: {
                    readonly type: import("vue").PropType<number>;
                    readonly required: true;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                scrollbar: import("../../..").ScrollbarContext | undefined;
                moveX: import("vue").Ref<number>;
                moveY: import("vue").Ref<number>;
                sizeWidth: import("vue").Ref<string>;
                sizeHeight: import("vue").Ref<string>;
                ratioY: import("vue").Ref<number>;
                ratioX: import("vue").Ref<number>;
                handleScroll: (wrap: HTMLDivElement) => void;
                update: () => void;
                Thumb: import("vue").DefineComponent<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }, {
                    COMPONENT_NAME: string;
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext;
                    ns: {
                        namespace: import("vue").ComputedRef<string>;
                        b: (blockSuffix?: string) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    instance: import("vue").Ref<HTMLDivElement | undefined>;
                    thumb: import("vue").Ref<HTMLDivElement | undefined>;
                    thumbState: import("vue").Ref<{
                        X?: number | undefined;
                        Y?: number | undefined;
                    }>;
                    visible: import("vue").Ref<boolean>;
                    cursorDown: boolean;
                    cursorLeave: boolean;
                    originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                    bar: import("vue").ComputedRef<{
                        readonly offset: "offsetHeight";
                        readonly scroll: "scrollTop";
                        readonly scrollSize: "scrollHeight";
                        readonly size: "height";
                        readonly key: "vertical";
                        readonly axis: "Y";
                        readonly client: "clientY";
                        readonly direction: "top";
                    } | {
                        readonly offset: "offsetWidth";
                        readonly scroll: "scrollLeft";
                        readonly scrollSize: "scrollWidth";
                        readonly size: "width";
                        readonly key: "horizontal";
                        readonly axis: "X";
                        readonly client: "clientX";
                        readonly direction: "left";
                    }>;
                    thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                    offsetRatio: import("vue").ComputedRef<number>;
                    clickThumbHandler: (e: MouseEvent) => void;
                    clickTrackHandler: (e: MouseEvent) => void;
                    startDrag: (e: MouseEvent) => void;
                    mouseMoveDocumentHandler: (e: MouseEvent) => void;
                    mouseUpDocumentHandler: () => void;
                    mouseMoveScrollbarHandler: () => void;
                    mouseLeaveScrollbarHandler: () => void;
                    restoreOnselectstart: () => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }>>, {
                    readonly vertical: boolean;
                    readonly always: boolean;
                }>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly minSize: {
                    readonly type: import("vue").PropType<number>;
                    readonly required: true;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }>>, {
                readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            }>;
        }> & {} & import("vue").ComponentCustomProperties, type: "hours" | "minutes" | "seconds") => void;
        vRepeatClick: import("vue").ObjectDirective<HTMLElement, import("../../../../directives/repeat-click").RepeatClickOptions | ((...args: unknown[]) => unknown)>;
        ElScrollbar: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
            readonly ariaLabel: StringConstructor;
            readonly ariaOrientation: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
            readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
            readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
            readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
            readonly noresize: BooleanConstructor;
            readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
            readonly always: BooleanConstructor;
            readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
            readonly id: StringConstructor;
            readonly role: StringConstructor;
        }, {
            COMPONENT_NAME: string;
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly ariaLabel: StringConstructor;
                readonly ariaOrientation: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
                readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
                readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
                readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
                readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
                readonly noresize: BooleanConstructor;
                readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
                readonly always: BooleanConstructor;
                readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
                readonly id: StringConstructor;
                readonly role: StringConstructor;
            }>> & {
                onScroll?: ((args_0: {
                    scrollTop: number;
                    scrollLeft: number;
                }) => any) | undefined;
            }>>;
            emit: (event: "scroll", args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => void;
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            stopResizeObserver: undefined;
            stopResizeListener: undefined;
            scrollbarRef: import("vue").Ref<HTMLDivElement | undefined>;
            wrapRef: import("vue").Ref<HTMLDivElement | undefined>;
            resizeRef: import("vue").Ref<HTMLElement | undefined>;
            barRef: import("vue").Ref<({
                $: import("vue").ComponentInternalInstance;
                $data: {};
                $props: Partial<{
                    readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                }> & Omit<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "always">;
                $attrs: {
                    [x: string]: unknown;
                };
                $refs: {
                    [x: string]: unknown;
                };
                $slots: Readonly<{
                    [name: string]: import("vue").Slot | undefined;
                }>;
                $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
                $emit: (event: string, ...args: any[]) => void;
                $el: any;
                $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>>, {
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                        readonly minSize: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext | undefined;
                    moveX: import("vue").Ref<number>;
                    moveY: import("vue").Ref<number>;
                    sizeWidth: import("vue").Ref<string>;
                    sizeHeight: import("vue").Ref<string>;
                    ratioY: import("vue").Ref<number>;
                    ratioX: import("vue").Ref<number>;
                    handleScroll: (wrap: HTMLDivElement) => void;
                    update: () => void;
                    Thumb: import("vue").DefineComponent<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }, {
                        COMPONENT_NAME: string;
                        props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                            readonly vertical: BooleanConstructor;
                            readonly size: StringConstructor;
                            readonly move: NumberConstructor;
                            readonly ratio: {
                                readonly type: import("vue").PropType<number>;
                                readonly required: true;
                                readonly validator: ((val: unknown) => boolean) | undefined;
                                __epPropKey: true;
                            };
                            readonly always: BooleanConstructor;
                        }>> & {
                            [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                        }>>;
                        scrollbar: import("../../..").ScrollbarContext;
                        ns: {
                            namespace: import("vue").ComputedRef<string>;
                            b: (blockSuffix?: string) => string;
                            e: (element?: string | undefined) => string;
                            m: (modifier?: string | undefined) => string;
                            be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                            em: (element?: string | undefined, modifier?: string | undefined) => string;
                            bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                            bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                            is: {
                                (name: string, state: boolean | undefined): string;
                                (name: string): string;
                            };
                            cssVar: (object: Record<string, string>) => Record<string, string>;
                            cssVarName: (name: string) => string;
                            cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                            cssVarBlockName: (name: string) => string;
                        };
                        instance: import("vue").Ref<HTMLDivElement | undefined>;
                        thumb: import("vue").Ref<HTMLDivElement | undefined>;
                        thumbState: import("vue").Ref<{
                            X?: number | undefined;
                            Y?: number | undefined;
                        }>;
                        visible: import("vue").Ref<boolean>;
                        cursorDown: boolean;
                        cursorLeave: boolean;
                        originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                        bar: import("vue").ComputedRef<{
                            readonly offset: "offsetHeight";
                            readonly scroll: "scrollTop";
                            readonly scrollSize: "scrollHeight";
                            readonly size: "height";
                            readonly key: "vertical";
                            readonly axis: "Y";
                            readonly client: "clientY";
                            readonly direction: "top";
                        } | {
                            readonly offset: "offsetWidth";
                            readonly scroll: "scrollLeft";
                            readonly scrollSize: "scrollWidth";
                            readonly size: "width";
                            readonly key: "horizontal";
                            readonly axis: "X";
                            readonly client: "clientX";
                            readonly direction: "left";
                        }>;
                        thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                        offsetRatio: import("vue").ComputedRef<number>;
                        clickThumbHandler: (e: MouseEvent) => void;
                        clickTrackHandler: (e: MouseEvent) => void;
                        startDrag: (e: MouseEvent) => void;
                        mouseMoveDocumentHandler: (e: MouseEvent) => void;
                        mouseUpDocumentHandler: () => void;
                        mouseMoveScrollbarHandler: () => void;
                        mouseLeaveScrollbarHandler: () => void;
                        restoreOnselectstart: () => void;
                    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>>, {
                        readonly vertical: boolean;
                        readonly always: boolean;
                    }>;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, {
                    readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
                }> & {
                    beforeCreate?: ((() => void) | (() => void)[]) | undefined;
                    created?: ((() => void) | (() => void)[]) | undefined;
                    beforeMount?: ((() => void) | (() => void)[]) | undefined;
                    mounted?: ((() => void) | (() => void)[]) | undefined;
                    beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
                    updated?: ((() => void) | (() => void)[]) | undefined;
                    activated?: ((() => void) | (() => void)[]) | undefined;
                    deactivated?: ((() => void) | (() => void)[]) | undefined;
                    beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
                    beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
                    destroyed?: ((() => void) | (() => void)[]) | undefined;
                    unmounted?: ((() => void) | (() => void)[]) | undefined;
                    renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
                    errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
                };
                $forceUpdate: () => void;
                $nextTick: typeof import("vue").nextTick;
                $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
            } & Readonly<import("vue").ExtractPropTypes<{
                readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly minSize: {
                    readonly type: import("vue").PropType<number>;
                    readonly required: true;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }>> & import("vue").ShallowUnwrapRef<{
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                scrollbar: import("../../..").ScrollbarContext | undefined;
                moveX: import("vue").Ref<number>;
                moveY: import("vue").Ref<number>;
                sizeWidth: import("vue").Ref<string>;
                sizeHeight: import("vue").Ref<string>;
                ratioY: import("vue").Ref<number>;
                ratioX: import("vue").Ref<number>;
                handleScroll: (wrap: HTMLDivElement) => void;
                update: () => void;
                Thumb: import("vue").DefineComponent<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }, {
                    COMPONENT_NAME: string;
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext;
                    ns: {
                        namespace: import("vue").ComputedRef<string>;
                        b: (blockSuffix?: string) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    instance: import("vue").Ref<HTMLDivElement | undefined>;
                    thumb: import("vue").Ref<HTMLDivElement | undefined>;
                    thumbState: import("vue").Ref<{
                        X?: number | undefined;
                        Y?: number | undefined;
                    }>;
                    visible: import("vue").Ref<boolean>;
                    cursorDown: boolean;
                    cursorLeave: boolean;
                    originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                    bar: import("vue").ComputedRef<{
                        readonly offset: "offsetHeight";
                        readonly scroll: "scrollTop";
                        readonly scrollSize: "scrollHeight";
                        readonly size: "height";
                        readonly key: "vertical";
                        readonly axis: "Y";
                        readonly client: "clientY";
                        readonly direction: "top";
                    } | {
                        readonly offset: "offsetWidth";
                        readonly scroll: "scrollLeft";
                        readonly scrollSize: "scrollWidth";
                        readonly size: "width";
                        readonly key: "horizontal";
                        readonly axis: "X";
                        readonly client: "clientX";
                        readonly direction: "left";
                    }>;
                    thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                    offsetRatio: import("vue").ComputedRef<number>;
                    clickThumbHandler: (e: MouseEvent) => void;
                    clickTrackHandler: (e: MouseEvent) => void;
                    startDrag: (e: MouseEvent) => void;
                    mouseMoveDocumentHandler: (e: MouseEvent) => void;
                    mouseUpDocumentHandler: () => void;
                    mouseMoveScrollbarHandler: () => void;
                    mouseLeaveScrollbarHandler: () => void;
                    restoreOnselectstart: () => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }>>, {
                    readonly vertical: boolean;
                    readonly always: boolean;
                }>;
            }> & {} & import("vue").ComponentCustomProperties) | undefined>;
            wrapStyle: import("vue").ComputedRef<import("vue").StyleValue>;
            wrapKls: import("vue").ComputedRef<(string | unknown[] | {
                [x: string]: boolean;
            })[]>;
            resizeKls: import("vue").ComputedRef<import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>[]>;
            handleScroll: () => void;
            scrollTo: (arg1: unknown, arg2?: number | undefined) => void;
            setScrollTop: (value: number) => void;
            setScrollLeft: (value: number) => void;
            update: () => void;
            Bar: import("vue").DefineComponent<{
                readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly minSize: {
                    readonly type: import("vue").PropType<number>;
                    readonly required: true;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }, {
                props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                    readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                    readonly minSize: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                }>> & {
                    [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                }>>;
                scrollbar: import("../../..").ScrollbarContext | undefined;
                moveX: import("vue").Ref<number>;
                moveY: import("vue").Ref<number>;
                sizeWidth: import("vue").Ref<string>;
                sizeHeight: import("vue").Ref<string>;
                ratioY: import("vue").Ref<number>;
                ratioX: import("vue").Ref<number>;
                handleScroll: (wrap: HTMLDivElement) => void;
                update: () => void;
                Thumb: import("vue").DefineComponent<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }, {
                    COMPONENT_NAME: string;
                    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                        readonly vertical: BooleanConstructor;
                        readonly size: StringConstructor;
                        readonly move: NumberConstructor;
                        readonly ratio: {
                            readonly type: import("vue").PropType<number>;
                            readonly required: true;
                            readonly validator: ((val: unknown) => boolean) | undefined;
                            __epPropKey: true;
                        };
                        readonly always: BooleanConstructor;
                    }>> & {
                        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
                    }>>;
                    scrollbar: import("../../..").ScrollbarContext;
                    ns: {
                        namespace: import("vue").ComputedRef<string>;
                        b: (blockSuffix?: string) => string;
                        e: (element?: string | undefined) => string;
                        m: (modifier?: string | undefined) => string;
                        be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                        em: (element?: string | undefined, modifier?: string | undefined) => string;
                        bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                        bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                        is: {
                            (name: string, state: boolean | undefined): string;
                            (name: string): string;
                        };
                        cssVar: (object: Record<string, string>) => Record<string, string>;
                        cssVarName: (name: string) => string;
                        cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                        cssVarBlockName: (name: string) => string;
                    };
                    instance: import("vue").Ref<HTMLDivElement | undefined>;
                    thumb: import("vue").Ref<HTMLDivElement | undefined>;
                    thumbState: import("vue").Ref<{
                        X?: number | undefined;
                        Y?: number | undefined;
                    }>;
                    visible: import("vue").Ref<boolean>;
                    cursorDown: boolean;
                    cursorLeave: boolean;
                    originalOnSelectStart: ((this: GlobalEventHandlers, ev: Event) => any) | null;
                    bar: import("vue").ComputedRef<{
                        readonly offset: "offsetHeight";
                        readonly scroll: "scrollTop";
                        readonly scrollSize: "scrollHeight";
                        readonly size: "height";
                        readonly key: "vertical";
                        readonly axis: "Y";
                        readonly client: "clientY";
                        readonly direction: "top";
                    } | {
                        readonly offset: "offsetWidth";
                        readonly scroll: "scrollLeft";
                        readonly scrollSize: "scrollWidth";
                        readonly size: "width";
                        readonly key: "horizontal";
                        readonly axis: "X";
                        readonly client: "clientX";
                        readonly direction: "left";
                    }>;
                    thumbStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
                    offsetRatio: import("vue").ComputedRef<number>;
                    clickThumbHandler: (e: MouseEvent) => void;
                    clickTrackHandler: (e: MouseEvent) => void;
                    startDrag: (e: MouseEvent) => void;
                    mouseMoveDocumentHandler: (e: MouseEvent) => void;
                    mouseUpDocumentHandler: () => void;
                    mouseMoveScrollbarHandler: () => void;
                    mouseLeaveScrollbarHandler: () => void;
                    restoreOnselectstart: () => void;
                }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                    readonly vertical: BooleanConstructor;
                    readonly size: StringConstructor;
                    readonly move: NumberConstructor;
                    readonly ratio: {
                        readonly type: import("vue").PropType<number>;
                        readonly required: true;
                        readonly validator: ((val: unknown) => boolean) | undefined;
                        __epPropKey: true;
                    };
                    readonly always: BooleanConstructor;
                }>>, {
                    readonly vertical: boolean;
                    readonly always: boolean;
                }>;
            }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
                readonly always: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
                readonly minSize: {
                    readonly type: import("vue").PropType<number>;
                    readonly required: true;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }>>, {
                readonly always: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            }>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            scroll: ({ scrollTop, scrollLeft, }: {
                scrollTop: number;
                scrollLeft: number;
            }) => boolean;
        }, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly ariaLabel: StringConstructor;
            readonly ariaOrientation: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly height: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly maxHeight: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, NumberConstructor], unknown, unknown, "", boolean>;
            readonly native: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, false, boolean>;
            readonly wrapStyle: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue) | ((new (...args: any[]) => import("vue").StyleValue & {}) | (() => import("vue").StyleValue))[], unknown, unknown, "", boolean>;
            readonly wrapClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
            readonly viewClass: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor], unknown, unknown, "", boolean>;
            readonly viewStyle: import("element-plus/es/utils").EpPropFinalized<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown, "", boolean>;
            readonly noresize: BooleanConstructor;
            readonly tag: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "div", boolean>;
            readonly always: BooleanConstructor;
            readonly minSize: import("element-plus/es/utils").EpPropFinalized<NumberConstructor, unknown, unknown, 20, boolean>;
            readonly id: StringConstructor;
            readonly role: StringConstructor;
        }>> & {
            onScroll?: ((args_0: {
                scrollTop: number;
                scrollLeft: number;
            }) => any) | undefined;
        }, {
            readonly height: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly always: boolean;
            readonly maxHeight: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, NumberConstructor], unknown, unknown>;
            readonly native: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
            readonly wrapStyle: import("vue").StyleValue;
            readonly wrapClass: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewClass: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor], unknown, unknown>;
            readonly viewStyle: import("element-plus/es/utils").EpPropMergeType<readonly [StringConstructor, ArrayConstructor, ObjectConstructor], unknown, unknown>;
            readonly tag: string;
            readonly minSize: number;
            readonly noresize: boolean;
        }>> & Record<string, any>;
        ElIcon: import("element-plus/es/utils").SFCWithInstall<import("vue").DefineComponent<{
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly color: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }, {
            props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
                readonly size: {
                    readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
                readonly color: {
                    readonly type: import("vue").PropType<string>;
                    readonly required: false;
                    readonly validator: ((val: unknown) => boolean) | undefined;
                    __epPropKey: true;
                };
            }>> & {
                [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
            }>>;
            ns: {
                namespace: import("vue").ComputedRef<string>;
                b: (blockSuffix?: string) => string;
                e: (element?: string | undefined) => string;
                m: (modifier?: string | undefined) => string;
                be: (blockSuffix?: string | undefined, element?: string | undefined) => string;
                em: (element?: string | undefined, modifier?: string | undefined) => string;
                bm: (blockSuffix?: string | undefined, modifier?: string | undefined) => string;
                bem: (blockSuffix?: string | undefined, element?: string | undefined, modifier?: string | undefined) => string;
                is: {
                    (name: string, state: boolean | undefined): string;
                    (name: string): string;
                };
                cssVar: (object: Record<string, string>) => Record<string, string>;
                cssVarName: (name: string) => string;
                cssVarBlock: (object: Record<string, string>) => Record<string, string>;
                cssVarBlockName: (name: string) => string;
            };
            style: import("vue").ComputedRef<import("vue").CSSProperties>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            readonly size: {
                readonly type: import("vue").PropType<import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => (string | number) & {}) | (() => string | number) | ((new (...args: any[]) => (string | number) & {}) | (() => string | number))[], unknown, unknown>>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
            readonly color: {
                readonly type: import("vue").PropType<string>;
                readonly required: false;
                readonly validator: ((val: unknown) => boolean) | undefined;
                __epPropKey: true;
            };
        }>>, {}>> & Record<string, any>;
        ArrowDown: any;
        ArrowUp: any;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "select-range" | "set-option")[], "change" | "select-range" | "set-option", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        readonly disabledHours: {
            readonly type: import("vue").PropType<import("../props/shared").GetDisabledHours>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabledMinutes: {
            readonly type: import("vue").PropType<import("../props/shared").GetDisabledMinutes>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabledSeconds: {
            readonly type: import("vue").PropType<import("../props/shared").GetDisabledSeconds>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly role: {
            readonly type: import("vue").PropType<string>;
            readonly required: true;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly spinnerDate: {
            readonly type: import("vue").PropType<dayjs.Dayjs>;
            readonly required: true;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly showSeconds: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, true, boolean>;
        readonly arrowControl: BooleanConstructor;
        readonly amPmMode: import("element-plus/es/utils").EpPropFinalized<(new (...args: any[]) => ("" | "A" | "a") & {}) | (() => "" | "A" | "a") | ((new (...args: any[]) => ("" | "A" | "a") & {}) | (() => "" | "A" | "a"))[], unknown, unknown, "", boolean>;
    }>> & {
        onChange?: ((...args: any[]) => any) | undefined;
        "onSelect-range"?: ((...args: any[]) => any) | undefined;
        "onSet-option"?: ((...args: any[]) => any) | undefined;
    }, {
        readonly arrowControl: boolean;
        readonly showSeconds: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
        readonly amPmMode: import("element-plus/es/utils").EpPropMergeType<(new (...args: any[]) => ("" | "A" | "a") & {}) | (() => "" | "A" | "a") | ((new (...args: any[]) => ("" | "A" | "a") & {}) | (() => "" | "A" | "a"))[], unknown, unknown>;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("pick" | "select-range" | "set-picker-option")[], "pick" | "select-range" | "set-picker-option", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly parsedValue: {
        readonly type: import("vue").PropType<[dayjs.Dayjs, dayjs.Dayjs]>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly visible: BooleanConstructor;
    readonly actualVisible: import("element-plus/es/utils").EpPropFinalized<BooleanConstructor, unknown, unknown, undefined, boolean>;
    readonly format: import("element-plus/es/utils").EpPropFinalized<StringConstructor, unknown, unknown, "", boolean>;
}>> & {
    onPick?: ((...args: any[]) => any) | undefined;
    "onSelect-range"?: ((...args: any[]) => any) | undefined;
    "onSet-picker-option"?: ((...args: any[]) => any) | undefined;
}, {
    readonly visible: boolean;
    readonly format: string;
    readonly actualVisible: import("element-plus/es/utils").EpPropMergeType<BooleanConstructor, unknown, unknown>;
}>;
export default _default;
