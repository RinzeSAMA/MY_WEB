import type { CSSProperties } from 'vue';
declare const _default: import("vue").DefineComponent<{
    readonly modelValue: import("../../../utils").EpPropFinalized<(NumberConstructor | BooleanConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
    readonly size: {
        readonly type: import("vue").PropType<import("../../../utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
    readonly label: import("../../../utils").EpPropFinalized<(NumberConstructor | BooleanConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
    readonly value: import("../../../utils").EpPropFinalized<(NumberConstructor | BooleanConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
    readonly name: import("../../../utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
}, {
    props: Readonly<import("@vue/shared").LooseRequired<Readonly<import("vue").ExtractPropTypes<{
        readonly modelValue: import("../../../utils").EpPropFinalized<(NumberConstructor | BooleanConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
        readonly size: {
            readonly type: import("vue").PropType<import("../../../utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
            readonly required: false;
            readonly validator: ((val: unknown) => boolean) | undefined;
            __epPropKey: true;
        };
        readonly disabled: BooleanConstructor;
        readonly label: import("../../../utils").EpPropFinalized<(NumberConstructor | BooleanConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
        readonly value: import("../../../utils").EpPropFinalized<(NumberConstructor | BooleanConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
        readonly name: import("../../../utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
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
    radioRef: import("vue").Ref<HTMLInputElement | undefined>;
    focus: import("vue").Ref<boolean>;
    size: import("vue").ComputedRef<"" | "default" | "small" | "large">;
    disabled: import("vue").ComputedRef<boolean>;
    modelValue: import("vue").WritableComputedRef<import("../../../utils").EpPropMergeType<(NumberConstructor | BooleanConstructor | StringConstructor)[], unknown, unknown> | undefined>;
    radioGroup: import("./constants").RadioGroupContext | undefined;
    actualValue: import("vue").ComputedRef<import("../../../utils").EpPropMergeType<(NumberConstructor | BooleanConstructor | StringConstructor)[], unknown, unknown> | undefined>;
    activeStyle: import("vue").ComputedRef<CSSProperties>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly modelValue: import("../../../utils").EpPropFinalized<(NumberConstructor | BooleanConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
    readonly size: {
        readonly type: import("vue").PropType<import("../../../utils").EpPropMergeType<StringConstructor, "" | "default" | "small" | "large", never>>;
        readonly required: false;
        readonly validator: ((val: unknown) => boolean) | undefined;
        __epPropKey: true;
    };
    readonly disabled: BooleanConstructor;
    readonly label: import("../../../utils").EpPropFinalized<(NumberConstructor | BooleanConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
    readonly value: import("../../../utils").EpPropFinalized<(NumberConstructor | BooleanConstructor | StringConstructor)[], unknown, unknown, undefined, boolean>;
    readonly name: import("../../../utils").EpPropFinalized<StringConstructor, unknown, unknown, undefined, boolean>;
}>>, {
    readonly value: import("../../../utils").EpPropMergeType<(NumberConstructor | BooleanConstructor | StringConstructor)[], unknown, unknown>;
    readonly modelValue: import("../../../utils").EpPropMergeType<(NumberConstructor | BooleanConstructor | StringConstructor)[], unknown, unknown>;
    readonly disabled: boolean;
    readonly name: string;
    readonly label: import("../../../utils").EpPropMergeType<(NumberConstructor | BooleanConstructor | StringConstructor)[], unknown, unknown>;
}>;
export default _default;
